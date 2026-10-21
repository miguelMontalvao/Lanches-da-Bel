import { faq } from '../config'
import { ChevronIcon } from './Icons'

export function Faq() {
  return (
    <section id="duvidas" className="mx-auto max-w-3xl px-4 py-16 sm:py-20">
      <h2 className="text-center font-display text-3xl font-extrabold text-rosa-900 sm:text-4xl">Perguntas frequentes</h2>
      <div className="mt-8 space-y-3">
        {faq.map((item) => (
          <details key={item.q} className="group rounded-2xl bg-white ring-1 ring-rosa-100 open:bg-rosa-50 open:ring-rosa-200">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-bold text-rosa-900 [&::-webkit-details-marker]:hidden">
              {item.q}
              <ChevronIcon className="size-5 shrink-0 text-rosa-600 transition group-open:rotate-180" />
            </summary>
            <p className="px-5 pb-5 text-rosa-900/80">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
