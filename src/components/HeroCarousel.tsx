import { useCallback, useEffect, useRef, useState } from 'react'
import { heroSlides } from '../config'

const INTERVAL = 4000
const SWIPE_MIN = 40

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
                  <source srcSet={`/images/carrossel/${slide.file}.webp`} type="image/webp" />
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
                i === index ? 'w-6 bg-rosa' : 'w-1.5 bg-creme/35 group-hover:bg-creme/70'
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  )
}
