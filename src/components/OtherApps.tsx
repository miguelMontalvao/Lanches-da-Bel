import { AppPill } from './Buttons'

export function OtherApps() {
  return (
    <section id="apps" className="py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <p className="font-bold uppercase tracking-widest text-rosa-600">Fora da nossa área de entrega?</p>
        <h2 className="mt-2 font-display text-3xl font-extrabold text-rosa-900 sm:text-4xl">A Bel também chega até você pelos apps</h2>
        <p className="mx-auto mt-3 max-w-2xl text-lg text-rosa-900/75">
          Se o cardápio digital não atende o seu endereço, peça pela 99Food ou pelo iFood — mesmo sabor, mesma qualidade.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <AppPill app="99food" location="secao_apps" />
          <AppPill app="ifood" location="secao_apps" />
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <div className="rounded-3xl bg-food99/15 p-6 ring-1 ring-food99/50">
            <p className="text-3xl" aria-hidden="true">🏆</p>
            <p className="mt-2 font-display text-xl font-extrabold text-neutral-900">Loja Destaque na 99Food</p>
            <p className="text-neutral-700">Reconhecida pela qualidade e pelas avaliações dos clientes.</p>
          </div>
          <div className="rounded-3xl bg-ifood/5 p-6 ring-1 ring-ifood/20">
            <p className="text-3xl" aria-hidden="true">⭐</p>
            <p className="mt-2 font-display text-xl font-extrabold text-neutral-900">Super Restaurante no iFood</p>
            <p className="text-neutral-700">Selo dado a quem entrega excelência pedido após pedido.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
