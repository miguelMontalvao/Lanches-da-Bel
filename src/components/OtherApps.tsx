import { AppPill } from './Buttons'

export function OtherApps() {
  return (
    <section id="apps" className="bg-rosa-50 pb-16 pt-4 sm:pb-20 sm:pt-6">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="font-display text-5xl uppercase leading-[0.95] tracking-wide text-tinta sm:text-6xl">
          Fora da nossa <span className="text-rosa-700">área de entrega?</span>
        </h2>
        <p className="mt-2 font-bold uppercase tracking-[0.2em] text-tinta/80">A Bel também chega até você pelos apps</p>
        <p className="mx-auto mt-3 max-w-2xl text-lg text-tinta/70">
          Se o cardápio digital não atende o seu endereço, peça pela 99Food ou pelo iFood — mesmo sabor, mesma qualidade.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <AppPill app="99food" location="secao_apps" />
          <AppPill app="ifood" location="secao_apps" />
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <div className="rounded-3xl bg-food99/15 p-6 ring-1 ring-food99/50">
            <p className="text-3xl" aria-hidden="true">🏆</p>
            <p className="mt-2 font-display text-3xl uppercase leading-none tracking-wide text-tinta">Loja Destaque na 99Food</p>
            <p className="text-neutral-700">Reconhecida pela qualidade e pelas avaliações dos clientes.</p>
          </div>
          <div className="rounded-3xl bg-ifood/5 p-6 ring-1 ring-ifood/20">
            <p className="text-3xl" aria-hidden="true">⭐</p>
            <p className="mt-2 font-display text-3xl uppercase leading-none tracking-wide text-tinta">Super Restaurante no iFood</p>
            <p className="text-neutral-700">Selo dado a quem entrega excelência pedido após pedido.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
