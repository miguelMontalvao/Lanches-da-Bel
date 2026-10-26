import { faq } from '../config'
import { WhatsAppButton } from './Buttons'
import { SectionLabel } from './SectionLabel'

export function Faq() {
  return (
    <section id="duvidas" aria-labelledby="duvidas-titulo" className="bg-grafite py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-12 lg:gap-12">
        <div data-reveal className="lg:col-span-4">
          <SectionLabel index="03">Dúvidas</SectionLabel>
          <h2 id="duvidas-titulo" className="mt-4 font-display text-5xl uppercase leading-[0.9] tracking-wide sm:text-6xl">
            Perguntas frequentes
          </h2>
          <p className="mt-4 text-creme/70">Não achou sua resposta? Fale direto com a gente.</p>
          <WhatsAppButton location="duvidas" className="mt-6" />
        </div>

        <div data-reveal className="border-t border-linha lg:col-span-8">
          {faq.map((item) => (
            <details key={item.q} className="group border-b border-linha">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-lg font-semibold transition-colors hover:text-rosa-claro focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-creme [&::-webkit-details-marker]:hidden">
                {item.q}
                <span
                  aria-hidden="true"
                  className="relative size-4 shrink-0 before:absolute before:inset-x-0 before:top-1/2 before:h-0.5 before:-translate-y-1/2 before:bg-current after:absolute after:inset-y-0 after:left-1/2 after:w-0.5 after:-translate-x-1/2 after:bg-current after:transition-transform group-open:after:scale-y-0"
                />
              </summary>
              <p className="max-w-2xl pb-6 leading-relaxed text-creme/70">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
