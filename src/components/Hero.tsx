import { useEffect, useState } from 'react'
import { proof, site } from '../config'
import { isOpenNow } from '../lib/hours'
import { BrendiButton } from './Buttons'
import { HeroCarousel } from './HeroCarousel'

function OpenStatus() {
  // null até o navegador calcular: o HTML pré-renderizado não sabe a hora atual
  const [open, setOpen] = useState<boolean | null>(null)
  useEffect(() => {
    const update = () => setOpen(isOpenNow())
    update()
    const id = setInterval(update, 60_000)
    return () => clearInterval(id)
  }, [])
  return (
    <a href="#horario" className="inline-flex min-h-11 items-center gap-2 self-start text-sm font-medium text-creme/70 transition-colors hover:text-creme">
      {open !== null && (
        <>
          <span aria-hidden="true" className={`size-2 rounded-full ${open ? 'bg-turquesa' : 'bg-creme/30'}`} />
          {open ? 'Aberto agora' : 'Fechado agora'}
          <span className="text-creme/40">·</span>
        </>
      )}
      <span className="underline decoration-creme/30 underline-offset-4">ver horários</span>
    </a>
  )
}

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 pb-12 pt-10 sm:pt-14 lg:grid-cols-12 lg:items-center lg:gap-4 lg:pb-16 lg:pt-12">
        <div className="lg:col-span-7">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-mostarda">
            {site.address.neighborhood} · {site.address.region}
          </p>
          <h1 className="mt-4 font-display text-[3.5rem] uppercase leading-[0.88] tracking-wide sm:text-8xl lg:text-[6.5rem]">
            O lanche de <br />
            <span className="text-rosa">Senador Camará.</span>
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-creme/75">
            Feito na chapa, na hora do pedido, e entregue quentinho. Escolha o seu no nosso cardápio digital.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
            <BrendiButton location="hero" className="w-full sm:w-auto" />
            <OpenStatus />
          </div>
          <p className="mt-5 text-sm text-creme/60">
            Fora da área de entrega?{' '}
            <a href="#apps" className="font-semibold text-creme underline decoration-rosa underline-offset-4 hover:decoration-2">
              Peça pelo iFood ou 99Food
            </a>
          </p>
        </div>

        <div className="lg:col-span-5">
          <HeroCarousel />
        </div>
      </div>

      <ul className="mx-auto grid max-w-6xl divide-y divide-linha border-t border-linha px-4 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {proof.map((p) => (
          <li key={p.title} className="flex items-baseline justify-between gap-4 py-4 sm:block sm:px-6 sm:py-6 sm:first:pl-0">
            <p className="font-display text-2xl uppercase leading-none tracking-wide sm:text-3xl lg:text-4xl">{p.title}</p>
            <p className="text-right text-sm text-creme/60 sm:mt-1.5 sm:text-left">{p.label}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
