import { marquee } from '../config'

function Sparkle() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 shrink-0 fill-current sm:size-5">
      <path d="M12 0c.6 6.5 5.5 11.4 12 12-6.5.6-11.4 5.5-12 12-.6-6.5-5.5-11.4-12-12C6.5 11.4 11.4 6.5 12 0Z" />
    </svg>
  )
}

// Decorativa: as mesmas informações já aparecem no resto da página
export function Marquee() {
  const items = [...marquee, ...marquee]
  return (
    <div aria-hidden="true" className="overflow-hidden py-6 sm:py-10">
      <div className="-mx-4 -rotate-2 bg-rosa lg:-rotate-1 py-3 text-carvao shadow-[0_10px_30px_rgb(242_106_156/0.25)] sm:py-4">
        <div className="flex w-max animate-marquee items-center">
          {items.map((text, i) => (
            <span key={i} className="flex items-center gap-6 pr-6 font-display text-2xl uppercase leading-none tracking-wider sm:gap-8 sm:pr-8 sm:text-3xl">
              <span className="pt-1">{text}</span>
              <Sparkle />
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
