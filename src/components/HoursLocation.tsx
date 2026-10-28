import { useEffect, useRef, useState } from 'react'
import { hours, mapsDirectionsUrl, mapsEmbedUrl, site } from '../config'
import { formatTime, todayIndex } from '../lib/hours'
import { track } from '../lib/track'
import { WhatsAppButton } from './Buttons'
import { ArrowIcon, PinIcon } from './Icons'
import { SectionLabel } from './SectionLabel'

// Fundo com pin enquanto o mapa não carrega; o mapa só entra perto da tela.
// Sem JavaScript, o fundo continua como link para o Google Maps.
function MapEmbed() {
  const ref = useRef<HTMLDivElement>(null)
  const [near, setNear] = useState(false)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) return setNear(true)
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setNear(true)
          io.disconnect()
        }
      },
      { rootMargin: '400px 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div ref={ref} className="relative h-80 bg-grafite lg:h-full lg:min-h-[28rem]">
      <a
        href={mapsDirectionsUrl}
        target="_blank"
        rel="noopener"
        aria-hidden={loaded}
        tabIndex={loaded ? -1 : undefined}
        className="absolute inset-0 grid place-content-center justify-items-center gap-3 bg-[radial-gradient(rgb(58_51_49/0.7)_1px,transparent_1px)] bg-[size:18px_18px] text-center"
      >
        <span className="grid size-14 place-items-center rounded-full bg-turquesa/15 text-turquesa">
          <PinIcon className={`size-7 ${near && !loaded ? 'motion-safe:animate-bounce' : ''}`} />
        </span>
        <span className="font-semibold">{site.address.street}</span>
        <span className="text-sm text-creme/60">{near ? 'Carregando o mapa…' : 'Ver no Google Maps'}</span>
      </a>
      {near && (
        <iframe
          title={`Mapa com a localização da ${site.name}`}
          src={mapsEmbedUrl}
          onLoad={() => setLoaded(true)}
          className={`absolute inset-0 size-full border-0 transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      )}
    </div>
  )
}

export function HoursLocation() {
  // Dia de hoje só no navegador, para o HTML pré-renderizado não fixar o dia do build
  const [today, setToday] = useState<number | null>(null)
  useEffect(() => setToday(todayIndex()), [])
  const { address } = site
  return (
    <section id="horario" aria-labelledby="horario-titulo" data-spotlight className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div data-reveal>
          <SectionLabel index="02">Horário e local</SectionLabel>
          <h2 id="horario-titulo" className="mt-4 font-display text-5xl uppercase leading-[0.9] tracking-wide sm:text-6xl">
            Vem buscar ou pede em casa
          </h2>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div data-reveal className="lg:col-span-5">
            <table className="w-full text-left">
              <caption className="sr-only">Horário de funcionamento</caption>
              <tbody>
                {hours.map((h) => {
                  const isToday = h.day === today
                  return (
                    <tr key={h.day} className={`border-b border-linha ${isToday ? 'text-creme' : 'text-creme/70'}`}>
                      <th scope="row" className={`py-3 font-medium ${isToday ? 'font-semibold' : ''}`}>
                        {h.label}
                        {isToday && <span className="ml-2 text-xs font-semibold uppercase tracking-wider text-turquesa">Hoje</span>}
                      </th>
                      <td className="py-3 text-right tabular-nums">
                        {h.open && h.close ? `${formatTime(h.open)} – ${formatTime(h.close)}` : 'Fechado'}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>

            <address className="mt-8 flex gap-3 not-italic">
              <PinIcon className="mt-0.5 size-5 shrink-0 text-turquesa" />
              <span>
                <span className="block font-semibold">{address.street}</span>
                <span className="text-creme/70">
                  {address.neighborhood}, {address.region} · {address.city}/{address.state}
                </span>
              </span>
            </address>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={mapsDirectionsUrl}
                target="_blank"
                rel="noopener"
                onClick={() => track('clique_como_chegar')}
                data-ripple
                className="group inline-flex min-h-14 items-center justify-center gap-2.5 rounded-md bg-creme px-6 pb-3 pt-3.5 font-display text-2xl uppercase leading-none tracking-wider text-carvao transition [--ripple:rgb(18_16_16/0.16)] hover:bg-white active:scale-[0.96] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-creme"
              >
                Como chegar
                <ArrowIcon className="-mt-0.5 size-5 transition-transform group-hover:translate-x-1" />
              </a>
              <WhatsAppButton location="horario" label="WhatsApp" />
            </div>
          </div>

          <div data-reveal className="overflow-hidden rounded-md border border-linha lg:col-span-7">
            <MapEmbed />
          </div>
        </div>
      </div>
    </section>
  )
}
