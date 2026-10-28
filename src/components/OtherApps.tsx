import { AppPill } from './Buttons'

export function OtherApps() {
  return (
    <section id="apps" aria-labelledby="apps-titulo" className="border-y border-turquesa/20 bg-petroleo">
      <div data-reveal className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:py-14 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-6">
          <h2 id="apps-titulo" className="font-display text-5xl uppercase leading-[0.9] tracking-wide sm:text-6xl">
            Fora da nossa <span className="text-mostarda">área de entrega?</span>
          </h2>
          <p className="mt-4 max-w-md text-creme/70">
            A Bel também chega até você pelos apps. Mesmo lanche, mesma cozinha.
          </p>
        </div>
        <div className="lg:col-span-6">
          <div className="grid gap-3 sm:grid-cols-2 lg:ml-auto lg:max-w-[32rem]">
            <AppPill app="99food" location="secao_apps" />
            <AppPill app="ifood" location="secao_apps" />
          </div>
          <dl className="mt-5 grid grid-cols-2 gap-3 text-center text-sm lg:ml-auto lg:max-w-[32rem]">
            <div>
              <dt className="text-turquesa-claro/80">Na 99Food</dt>
              <dd className="font-semibold">Loja Destaque</dd>
            </div>
            <div>
              <dt className="text-turquesa-claro/80">No iFood</dt>
              <dd className="font-semibold">Super Restaurante</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
