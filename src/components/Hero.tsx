import { useEffect, useState } from 'react'
import { proof, site } from '../config'
import { isOpenNow } from '../lib/hours'
import { BrendiButton } from './Buttons'
import { SafeImage } from './SafeImage'

function OpenStatus() {
  const [open, setOpen] = useState(isOpenNow)
  useEffect(() => {
    const id = setInterval(() => setOpen(isOpenNow()), 60_000)
    return () => clearInterval(id)
  }, [])
  return (
    <a href="#horario" className="inline-flex items-center gap-2 text-sm font-medium text-creme/70 transition-colors hover:text-creme">
      <span aria-hidden="true" className={`size-2 rounded-full ${open ? 'bg-emerald-400' : 'bg-creme/30'}`} />
      {open ? 'Aberto agora' : 'Fechado agora'}
      <span className="text-creme/40">·</span>
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
            O lanche que <br className="hidden sm:block" />
            Senador Camará pede <span className="text-rosa">há mais de 10 anos.</span>
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

        <div className="relative lg:col-span-5">
          {/* Luz quente atrás do lanche */}
          <div
            aria-hidden="true"
            className="absolute inset-[10%] rounded-full bg-[radial-gradient(closest-side,rgb(244_183_64/0.28),transparent)]"
          />
          <SafeImage
            src={site.heroImage}
            alt="X-Tudo da Bel: dois hambúrgueres, ovo, presunto e queijo"
            width={240}
            height={240}
            loading="eager"
            fetchPriority="high"
            className="relative mx-auto aspect-square w-full max-w-[22rem] object-contain drop-shadow-[0_24px_30px_rgb(0_0_0/0.55)] sm:max-w-md lg:max-w-none"
          />
        </div>
      </div>

      <ul className="mx-auto grid max-w-6xl grid-cols-2 border-t border-linha px-4 lg:grid-cols-4">
        {proof.map((p, i) => (
          <li
            key={p.title}
            className={`py-6 pr-4 ${i % 2 === 1 ? 'border-l border-linha pl-4 sm:pl-6' : ''} ${i >= 2 ? 'border-t border-linha lg:border-t-0' : ''} ${i === 2 ? 'lg:border-l lg:pl-6' : ''}`}
          >
            <p className="font-display text-3xl uppercase leading-none tracking-wide sm:text-4xl">{p.title}</p>
            <p className="mt-1.5 text-sm text-creme/60">{p.label}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
