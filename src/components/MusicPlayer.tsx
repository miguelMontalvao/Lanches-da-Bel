import { useCallback, useEffect, useRef, useState } from 'react'
import { PauseIcon, PlayIcon, VolumeIcon } from './Icons'

const SRC = '/audio/jingle-lanches-da-bel.mp3'
const DEFAULT_VOLUME = 0.25
const STORAGE_KEY = 'bel-musica'

type Prefs = { volume: number; paused: boolean }

function readPrefs(): Prefs | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as Prefs) : null
  } catch {
    return null
  }
}

function savePrefs(prefs: Prefs) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs))
  } catch {
    /* modo privado ou armazenamento bloqueado: segue sem lembrar */
  }
}

/**
 * Jingle de fundo. O navegador só permite som após uma interação, então a música começa
 * no primeiro toque/clique na página (a menos que a pessoa já tenha pausado antes).
 * O arquivo só é baixado depois que a página termina de carregar.
 */
export function MusicPlayer() {
  const [playing, setPlaying] = useState(false)
  const [volume, setVolume] = useState(DEFAULT_VOLUME)
  const rootRef = useRef<HTMLDivElement>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const gainRef = useRef<GainNode | null>(null)
  const ctxRef = useRef<AudioContext | null>(null)
  const volumeRef = useRef(DEFAULT_VOLUME)
  const userPausedRef = useRef(false)

  const getAudio = useCallback(() => {
    if (!audioRef.current) {
      const audio = new Audio(SRC)
      audio.loop = true
      audio.preload = 'auto'
      audio.addEventListener('play', () => setPlaying(true))
      audio.addEventListener('pause', () => setPlaying(false))
      audioRef.current = audio
    }
    return audioRef.current
  }, [])

  // Volume via Web Audio: o Safari do iPhone ignora audio.volume. Precisa ser criado num gesto.
  const connectGain = useCallback((audio: HTMLAudioElement) => {
    if (gainRef.current) return
    const AudioCtx = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
    if (!AudioCtx) {
      audio.volume = volumeRef.current
      return
    }
    const ctx = new AudioCtx()
    const gain = ctx.createGain()
    gain.gain.value = volumeRef.current
    ctx.createMediaElementSource(audio).connect(gain).connect(ctx.destination)
    ctxRef.current = ctx
    gainRef.current = gain
  }, [])

  const play = useCallback(async () => {
    const audio = getAudio()
    connectGain(audio)
    try {
      await ctxRef.current?.resume()
      await audio.play()
      return true
    } catch {
      return false
    }
  }, [getAudio, connectGain])

  // Preferências salvas + download do áudio só depois do carregamento visual
  useEffect(() => {
    const prefs = readPrefs()
    if (prefs) {
      setVolume(prefs.volume)
      volumeRef.current = prefs.volume
      userPausedRef.current = prefs.paused
    }
    const preload = () => {
      const idle = window.requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 1500))
      idle(() => getAudio())
    }
    if (document.readyState === 'complete') preload()
    else window.addEventListener('load', preload, { once: true })
    return () => window.removeEventListener('load', preload)
  }, [getAudio])

  // Começa no primeiro toque/clique (teclado não dispara, para não assustar quem navega com Tab)
  useEffect(() => {
    const events = ['pointerdown', 'touchend', 'click'] as const
    const stop = () => events.forEach((e) => document.removeEventListener(e, onFirstInteraction, true))
    async function onFirstInteraction(e: Event) {
      if (userPausedRef.current) return stop()
      if (rootRef.current?.contains(e.target as Node)) return stop() // o próprio player cuida
      if (await play()) stop()
    }
    events.forEach((e) => document.addEventListener(e, onFirstInteraction, true))
    return stop
  }, [play])

  // Pausa com a aba em segundo plano e retoma ao voltar
  useEffect(() => {
    let resume = false
    const onVisibility = () => {
      const audio = audioRef.current
      if (!audio) return
      if (document.hidden && !audio.paused) {
        resume = true
        audio.pause()
      } else if (!document.hidden && resume) {
        resume = false
        void play()
      }
    }
    document.addEventListener('visibilitychange', onVisibility)
    return () => document.removeEventListener('visibilitychange', onVisibility)
  }, [play])

  const toggle = async () => {
    if (playing) {
      audioRef.current?.pause()
      userPausedRef.current = true
    } else {
      userPausedRef.current = false
      await play()
    }
    savePrefs({ volume: volumeRef.current, paused: userPausedRef.current })
  }

  const changeVolume = (value: number) => {
    setVolume(value)
    volumeRef.current = value
    if (gainRef.current) gainRef.current.gain.value = value
    else if (audioRef.current) audioRef.current.volume = value
    savePrefs({ volume: value, paused: userPausedRef.current })
  }

  const percent = Math.round(volume * 100)

  return (
    <div
      ref={rootRef}
      role="group"
      aria-label="Jingle da Lanches da Bel"
      className="fixed bottom-[5.5rem] left-4 z-40 flex items-center gap-2 rounded-full border border-turquesa/30 bg-carvao py-1.5 pl-1.5 pr-3 shadow-lg shadow-black/40 md:bottom-6 md:left-6"
    >
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? 'Pausar música' : 'Tocar música'}
        className="grid size-10 shrink-0 place-items-center rounded-full bg-turquesa text-carvao transition hover:bg-turquesa-claro active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-creme"
      >
        {playing ? <PauseIcon className="size-5" /> : <PlayIcon className="size-5" />}
      </button>

      <span aria-hidden="true" className="flex h-4 items-end gap-0.5">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className={`w-0.5 rounded-full bg-turquesa-claro ${playing ? 'animate-equalizer' : 'h-1'}`}
            style={playing ? { animationDelay: `${i * 0.18}s` } : undefined}
          />
        ))}
      </span>

      <label className="flex items-center gap-1.5 text-creme/70">
        <VolumeIcon className="size-4 shrink-0" muted={volume === 0} />
        <span className="sr-only">Volume da música</span>
        <input
          type="range"
          min={0}
          max={100}
          step={5}
          value={percent}
          aria-valuetext={`${percent}%`}
          onChange={(e) => changeVolume(Number(e.target.value) / 100)}
          className="h-6 w-20 cursor-pointer accent-turquesa sm:w-24"
        />
      </label>
    </div>
  )
}
