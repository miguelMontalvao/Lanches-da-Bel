import { useEffect, useState } from 'react'
import { site } from '../config'
import { isOpenNow } from '../lib/hours'
import { BrendiButton } from './Buttons'
import { StarIcon } from './Icons'
import { SafeImage } from './SafeImage'

function OpenStatus() {
  const [open, setOpen] = useState(isOpenNow)
  useEffect(() => {
    const id = setInterval(() => setOpen(isOpenNow()), 60_000)
    return () => clearInterval(id)
  }, [])
  return open ? (
    <p className="inline-flex items-center gap-2 text-sm font-bold text-emerald-800">
      <span className="size-2.5 rounded-full bg-emerald-600" aria-hidden="true" />
      Aberto agora — seu pedido sai em instantes
    </p>
  ) : (
    <a href="#horario" className="inline-flex items-center gap-2 text-sm font-semibold text-tinta/70 underline decoration-rosa-300 underline-offset-4 hover:text-tinta">
      <span className="size-2.5 rounded-full bg-tinta/30" aria-hidden="true" />
      Fechado agora — veja nosso horário
    </a>
  )
}

const badges = ['Super Restaurante iFood', 'Loja Destaque 99Food', '+10 anos de tradição']

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden bg-rosa-100">
      {/* Mancha rosa atrás do lanche */}
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-40 -right-40 size-[38rem] rounded-full bg-rosa-200 lg:-right-20 lg:top-1/2 lg:size-[44rem] lg:-translate-y-1/2" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 pb-16 pt-10 sm:pt-14 lg:grid-cols-[1.15fr_1fr] lg:gap-10 lg:py-16">
        <div className="text-center lg:text-left">
          <p className="inline-block rounded-full bg-tinta px-4 pb-1 pt-1.5 font-display text-lg uppercase tracking-widest text-rosa-200">
            Há +10 anos em Senador Camará
          </p>
          <h1 className="mt-5 font-display text-[3.75rem] uppercase leading-[0.9] tracking-wide text-tinta sm:text-8xl lg:text-[6.25rem]">
            <span className="block sm:whitespace-nowrap">Bateu a fome?</span>
            <span className="block text-rosa-700 sm:whitespace-nowrap">A Bel resolve.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-lg font-medium text-tinta/75 sm:text-xl lg:mx-0">
            Há mais de 10 anos fazendo os lanches mais queridos de {site.address.neighborhood} e {site.address.region}. Feito na
            hora, caprichado e entregue quentinho.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 lg:items-start">
            <BrendiButton location="hero" className="w-full sm:w-auto" />
            <OpenStatus />
            <a href="#apps" className="text-sm font-semibold text-tinta/70 underline decoration-rosa-300 underline-offset-4 hover:text-tinta">
              Fora da nossa área de entrega? Peça pelo iFood ou 99Food
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap justify-center gap-x-5 gap-y-2 lg:justify-start">
            {badges.map((b) => (
              <li key={b} className="inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wide text-tinta">
                <StarIcon className="size-4 text-rosa-600" />
                {b}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-[22rem] sm:max-w-md lg:max-w-[30rem]">
          <div className="relative aspect-square">
            {/* Disco atrás do lanche */}
            <div aria-hidden="true" className="absolute inset-[8%] rounded-full border-[6px] border-tinta bg-rosa-300" />
            <div aria-hidden="true" className="absolute inset-x-[18%] bottom-[3%] h-[7%] rounded-[50%] bg-tinta/25 blur-md" />
            <SafeImage
              src={site.heroImage}
              alt="X-Tudo da Bel, com hambúrgueres, ovo, presunto e queijo"
              loading="eager"
              className="relative size-full -rotate-3 object-contain drop-shadow-[0_18px_22px_rgb(20_20_20/0.35)]"
              fallback={
                <div className="relative grid size-full place-items-center text-[9rem]" aria-hidden="true">
                  🍔
                </div>
              }
            />
          </div>
          {/* Selo de prova social */}
          <div className="absolute -left-2 top-2 grid size-32 -rotate-12 place-items-center rounded-full bg-tinta text-center text-white shadow-xl sm:-left-6 sm:size-36">
            <p className="font-display uppercase leading-[0.85] tracking-wide">
              <span className="block text-5xl text-rosa-300 sm:text-6xl">+100</span>
              <span className="block text-lg">lanches</span>
              <span className="block text-lg">por dia</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
