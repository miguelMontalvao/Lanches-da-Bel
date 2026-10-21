import { useEffect, useState } from 'react'
import { site } from '../config'
import { isOpenNow } from '../lib/hours'
import { BrendiButton } from './Buttons'
import { StarIcon } from './Icons'
import { SafeImage } from './SafeImage'

function OpenBadge() {
  const [open, setOpen] = useState(isOpenNow)
  useEffect(() => {
    const id = setInterval(() => setOpen(isOpenNow()), 60_000)
    return () => clearInterval(id)
  }, [])
  return open ? (
    <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 text-sm font-bold text-emerald-800 ring-1 ring-emerald-200">
      <span className="relative flex size-2.5">
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-75 motion-reduce:hidden" />
        <span className="relative inline-flex size-2.5 rounded-full bg-emerald-600" />
      </span>
      Aberto agora • peça já!
    </span>
  ) : (
    <a href="#horario" className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-bold text-rosa-800 ring-1 ring-rosa-200">
      <span className="size-2.5 rounded-full bg-rosa-400" />
      Fechado agora • veja nosso horário
    </a>
  )
}

const badges = ['Super Restaurante iFood', 'Loja Destaque 99Food', '+10 anos de tradição']

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden bg-gradient-to-b from-rosa-100 via-rosa-50 to-white">
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 size-96 rounded-full bg-rosa-200/60 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:py-16 lg:grid-cols-2 lg:py-24">
        <div className="text-center lg:text-left">
          <OpenBadge />
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] text-rosa-900 sm:text-5xl lg:text-6xl">
            Bateu a fome?
            <span className="block text-rosa-600">O lanche da Bel resolve.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-rosa-900/80 sm:text-xl lg:mx-0">
            Há mais de 10 anos servindo os lanches mais queridos de {site.address.neighborhood} e {site.address.region}.
            Feito na hora, caprichado e entregue quentinho na sua casa.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 lg:items-start">
            <BrendiButton location="hero" pulse className="w-full sm:w-auto" />
            <a href="#apps" className="text-sm font-bold text-rosa-700 underline decoration-rosa-300 underline-offset-4 hover:text-rosa-900">
              Mora fora da nossa área de entrega? Peça pelo iFood ou 99Food
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap justify-center gap-2 lg:justify-start">
            {badges.map((b) => (
              <li key={b} className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-sm font-bold text-rosa-800 shadow-sm ring-1 ring-rosa-100">
                <StarIcon className="size-4 text-amber-400" />
                {b}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="aspect-square overflow-hidden rounded-[2.5rem] bg-rosa-200 shadow-2xl shadow-rosa-300/50 ring-8 ring-white">
            <SafeImage
              src={site.heroImage}
              alt="Lanche caprichado da Lanches da Bel"
              loading="eager"
              className="size-full object-cover"
              fallback={
                <div className="grid size-full place-items-center bg-gradient-to-br from-rosa-200 to-rosa-300 text-[9rem]" aria-hidden="true">
                  🍔
                </div>
              }
            />
          </div>
          <div className="absolute -bottom-5 left-4 rounded-2xl bg-white px-5 py-3 shadow-xl ring-1 ring-rosa-100 sm:-left-6">
            <p className="font-display text-3xl font-extrabold leading-none text-rosa-600">+100</p>
            <p className="text-sm font-bold text-rosa-900/70">lanches vendidos por dia</p>
          </div>
        </div>
      </div>
    </section>
  )
}
