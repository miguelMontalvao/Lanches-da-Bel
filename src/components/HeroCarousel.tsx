import { useCallback, useEffect, useRef, useState } from 'react'
import { heroSlides } from '../config'

const INTERVAL = 4000
const SWIPE_MIN = 40
// Largura do carrossel na tela: 20rem no celular, 28rem a partir de sm, coluna de ~460px no desktop
const SIZES = '(min-width: 1024px) 460px, (min-width: 640px) 448px, 320px'

// Selo tipo adesivo colado no canto da foto
function Seal() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute -right-1 -top-3 z-10 size-24 sm:size-28 lg:-right-4 lg:-top-2 lg:size-32">
      <div className="absolute inset-0 rounded-full bg-mostarda shadow-lg shadow-black/40" />
      <svg viewBox="0 0 100 100" className="absolute inset-0 animate-spin-slow">
        <defs>
          <path id="selo-anel" d="M50 50m-37 0a37 37 0 1 1 74 0a37 37 0 1 1-74 0" />
        </defs>
        <text className="fill-carvao font-display" fontSize="13.4">
          <textPath href="#selo-anel" textLength="228" lengthAdjust="spacing">FEITO NA HORA • DIRETO DA CHAPA •</textPath>
        </text>
      </svg>
      {/* Chama no centro */}
      <svg viewBox="0 0 24 24" className="absolute left-1/2 top-1/2 size-[34%] -translate-x-1/2 -translate-y-1/2 fill-carvao">
        <path d="M12 2c.5 3.2 2.4 5 4.2 6.9C18 10.8 19.5 12.9 19.5 15.6 19.5 19.7 16.1 23 12 23s-7.5-3.3-7.5-7.4c0-2.6 1.3-4.6 2.8-6.1.2 1.7 1 3 2.3 3.7-.3-3.9 1-8.2 2.4-11.2Zm.3 11.3c-.4 1.9-2.6 2.9-2.6 5.1 0 1.4 1 2.6 2.3 2.6s2.3-1.1 2.3-2.5c0-2-1.6-3.2-2-5.2Z" />
      </svg>
    </div>
  )
}

// Vapor saindo do lanche quente
function Steam() {
  return (
    <div aria-hidden="true" className="steam pointer-events-none absolute inset-x-[20%] -top-[10%] h-[34%]">
      <span style={{ left: '4%', animationDelay: '0s', ['--drift' as string]: '-18%' }} />
      <span style={{ left: '37%', animationDelay: '1.2s', ['--drift' as string]: '10%' }} />
      <span style={{ left: '70%', animationDelay: '2.4s', ['--drift' as string]: '22%' }} />
    </div>
  )
}

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

export function HeroCarousel() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  // As demais fotos só entram depois do carregamento da página, para não disputarem banda com a primeira
  const [loadRest, setLoadRest] = useState(false)
  const startX = useRef<number | null>(null)
  const total = heroSlides.length

  const go = useCallback(
    (i: number) => {
      setLoadRest(true)
      setIndex((i + total) % total)
    },
    [total],
  )

  useEffect(() => {
    if (document.readyState === 'complete') {
      setLoadRest(true)
      return
    }
    const onLoad = () => setLoadRest(true)
    window.addEventListener('load', onLoad)
    return () => window.removeEventListener('load', onLoad)
  }, [])

  // Troca automática: para com movimento reduzido, pausa no toque/hover/foco e com a aba oculta.
  // Depende de `index` para reiniciar a contagem após cada troca manual.
  useEffect(() => {
    if (paused || total < 2 || prefersReducedMotion()) return
    const id = window.setTimeout(() => {
      if (document.visibilityState === 'visible') go(index + 1)
    }, INTERVAL)
    return () => window.clearTimeout(id)
  }, [index, paused, total, go])

  const onPointerDown = (e: React.PointerEvent) => {
    startX.current = e.clientX
    setPaused(true)
  }
  const onPointerUp = (e: React.PointerEvent) => {
    if (startX.current !== null) {
      const dx = e.clientX - startX.current
      if (Math.abs(dx) > SWIPE_MIN) go(dx < 0 ? index + 1 : index - 1)
    }
    startX.current = null
    if (e.pointerType !== 'mouse') setPaused(false)
  }

  return (
    <div
      role="region"
      aria-roledescription="carrossel"
      aria-label="Lanches da casa"
      className="relative"
      onPointerEnter={(e) => e.pointerType === 'mouse' && setPaused(true)}
      onPointerLeave={(e) => e.pointerType === 'mouse' && setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onKeyDown={(e) => {
        if (e.key === 'ArrowRight') go(index + 1)
        if (e.key === 'ArrowLeft') go(index - 1)
      }}
    >
      <Seal />

      {/* Luz quente atrás do lanche */}
      <div
        aria-hidden="true"
        className="absolute inset-[12%] rounded-full bg-[radial-gradient(closest-side,rgb(244_183_64/0.26),transparent)]"
      />

      <div
        className="relative mx-auto aspect-square w-full max-w-[20rem] touch-pan-y select-none sm:max-w-md lg:max-w-none"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={() => {
          startX.current = null
          setPaused(false)
        }}
      >
        {heroSlides.map((slide, i) => {
          const active = i === index
          return (
            <div
              key={slide.file}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} de ${total}`}
              aria-hidden={!active}
              className={`absolute inset-0 grid place-items-center transition duration-700 ease-out ${
                active ? 'scale-100 opacity-100' : 'pointer-events-none scale-90 opacity-0'
              }`}
            >
              {(i === 0 || loadRest) && (
                <picture>
                  <source
                    srcSet={`/images/carrossel/${slide.file}-480.webp 480w, /images/carrossel/${slide.file}-640.webp 640w, /images/carrossel/${slide.file}.webp 900w`}
                    sizes={SIZES}
                    type="image/webp"
                  />
                  <img
                    src={`/images/carrossel/${slide.file}.png`}
                    alt={slide.alt}
                    width={slide.width}
                    height={slide.height}
                    draggable={false}
                    fetchPriority={i === 0 ? 'high' : 'low'}
                    decoding="async"
                    className="h-auto max-h-full w-full object-contain drop-shadow-[0_24px_30px_rgb(0_0_0/0.55)]"
                  />
                </picture>
              )}
              {slide.steam && active && <Steam />}
            </div>
          )
        })}
      </div>

      <div className="relative mt-2 flex items-center justify-center gap-1">
        {heroSlides.map((slide, i) => (
          <button
            key={slide.file}
            type="button"
            onClick={() => go(i)}
            aria-label={`Mostrar foto ${i + 1} de ${total}`}
            aria-current={i === index}
            className="group grid size-8 place-items-center rounded-full focus-visible:outline-2 focus-visible:outline-creme"
          >
            <span
              aria-hidden="true"
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? 'w-6 bg-turquesa' : 'w-1.5 bg-creme/35 group-hover:bg-creme/70'
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  )
}
