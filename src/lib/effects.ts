const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

/** Holofote que acompanha o cursor nas seções com [data-spotlight]. Só com mouse. */
export function initSpotlight() {
  if (!window.matchMedia('(pointer: fine)').matches || reducedMotion()) return () => {}
  let lit: HTMLElement | null = null
  let frame = 0
  let last: PointerEvent | null = null

  const update = () => {
    frame = 0
    if (!last) return
    const target = (last.target as Element | null)?.closest<HTMLElement>('[data-spotlight]') ?? null
    if (target !== lit) {
      lit?.classList.remove('is-lit')
      target?.classList.add('is-lit')
      lit = target
    }
    if (!target) return
    const rect = target.getBoundingClientRect()
    target.style.setProperty('--mx', `${last.clientX - rect.left}px`)
    target.style.setProperty('--my', `${last.clientY - rect.top}px`)
  }
  const onMove = (e: PointerEvent) => {
    last = e
    if (!frame) frame = requestAnimationFrame(update)
  }
  const onLeave = () => {
    lit?.classList.remove('is-lit')
    lit = null
  }

  document.addEventListener('pointermove', onMove, { passive: true })
  document.documentElement.addEventListener('pointerleave', onLeave)
  return () => {
    cancelAnimationFrame(frame)
    document.removeEventListener('pointermove', onMove)
    document.documentElement.removeEventListener('pointerleave', onLeave)
  }
}

/** Onda de luz saindo do ponto do toque/clique nos elementos com [data-ripple]. */
export function initRipple() {
  if (reducedMotion()) return () => {}
  const onDown = (e: PointerEvent) => {
    const el = (e.target as Element | null)?.closest<HTMLElement>('[data-ripple]')
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    // Raio até o canto mais distante, para a onda cobrir o botão inteiro (a bolinha tem 12px)
    const radius = Math.hypot(Math.max(x, rect.width - x), Math.max(y, rect.height - y))
    const dot = document.createElement('span')
    dot.className = 'ripple'
    dot.style.left = `${x}px`
    dot.style.top = `${y}px`
    dot.style.setProperty('--ripple-scale', String((radius * 2) / 12))
    dot.addEventListener('animationend', () => dot.remove(), { once: true })
    el.appendChild(dot)
  }
  document.addEventListener('pointerdown', onDown, { passive: true })
  return () => document.removeEventListener('pointerdown', onDown)
}
