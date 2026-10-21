import { hours, mapsDirectionsUrl, mapsEmbedUrl, site, whatsappUrl } from '../config'
import { formatTime, todayIndex } from '../lib/hours'
import { track } from '../lib/track'
import { ClockIcon, PinIcon, WhatsAppIcon } from './Icons'

export function HoursLocation() {
  const today = todayIndex()
  const { address } = site
  return (
    <section id="horario" className="py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 lg:grid-cols-5">
        <div className="rounded-3xl bg-white p-6 shadow-md ring-1 ring-rosa-100 sm:p-8 lg:col-span-2">
          <h2 className="flex items-center gap-3 font-display text-4xl uppercase leading-none tracking-wide text-tinta sm:text-5xl">
            <ClockIcon className="size-7 text-rosa-600" />
            Horário de funcionamento
          </h2>
          <ul className="mt-6 divide-y divide-rosa-100">
            {hours.map((h) => {
              const isToday = h.day === today
              return (
                <li key={h.day} className={`flex justify-between py-2.5 ${isToday ? 'font-extrabold text-rosa-700' : 'text-tinta/75'}`}>
                  <span>
                    {h.label}
                    {isToday && <span className="ml-2 rounded-full bg-rosa-100 px-2 py-0.5 text-xs">hoje</span>}
                  </span>
                  <span>{h.open && h.close ? `${formatTime(h.open)} às ${formatTime(h.close)}` : 'Fechado'}</span>
                </li>
              )
            })}
          </ul>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener"
            onClick={() => track('clique_whatsapp', { local: 'horario' })}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#1da851] px-6 py-3 font-extrabold text-white transition hover:bg-[#178a43]"
          >
            <WhatsAppIcon className="size-5" />
            Falar no WhatsApp {site.whatsapp.display}
          </a>
        </div>

        <div className="overflow-hidden rounded-3xl bg-white shadow-md ring-1 ring-rosa-100 lg:col-span-3">
          <iframe
            title={`Mapa: ${site.name}`}
            src={mapsEmbedUrl}
            className="h-72 w-full border-0 sm:h-80"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
            <address className="flex gap-3 not-italic">
              <PinIcon className="mt-0.5 size-6 shrink-0 text-rosa-600" />
              <span>
                <strong className="block text-tinta">{address.street}</strong>
                <span className="text-tinta/70">
                  {address.neighborhood}, {address.region} – {address.city}/{address.state}
                </span>
              </span>
            </address>
            <a
              href={mapsDirectionsUrl}
              target="_blank"
              rel="noopener"
              onClick={() => track('clique_como_chegar')}
              className="inline-flex shrink-0 items-center justify-center rounded-full border-2 border-rosa-700 px-6 py-2.5 font-extrabold text-rosa-700 transition hover:bg-rosa-700 hover:text-white"
            >
              Como chegar
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
