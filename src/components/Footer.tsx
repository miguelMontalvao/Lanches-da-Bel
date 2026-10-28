import { site } from '../config'
import { track } from '../lib/track'

export function FinalCta() {
  return (
    <section aria-labelledby="cta-titulo" className="bg-rosa text-carvao">
      <div data-reveal className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:py-20 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7">
          <h2 id="cta-titulo" className="font-display text-6xl uppercase leading-[0.88] tracking-wide sm:text-7xl">
            Bateu a fome? <br />A Bel resolve.
          </h2>
          <p className="mt-4 max-w-md text-lg font-medium text-carvao/80">Seu pedido sai da chapa direto pra sua casa.</p>
        </div>
        <div className="flex flex-col gap-3 lg:col-span-5 lg:items-end">
          <a
            href={site.brendiUrl}
            target="_blank"
            rel="noopener"
            onClick={() => track('clique_pedido_brendi', { local: 'cta_final' })}
            className="inline-flex min-h-14 w-full items-center justify-center rounded-md bg-carvao px-8 pb-3 pt-3.5 font-display text-2xl uppercase leading-none tracking-wider text-creme transition hover:bg-grafite-2 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-carvao lg:w-auto"
          >
            Fazer meu pedido agora
          </a>
          <p className="text-sm font-medium text-carvao/80">
            Fora da área?{' '}
            <a href="#apps" className="font-semibold underline underline-offset-4">
              Peça pelo iFood ou 99Food
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  const { credits } = site
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-linha pb-40 md:pb-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-sm text-creme/60 sm:flex-row sm:items-center sm:justify-between">
        <p suppressHydrationWarning>
          © {year} {site.name}. Todos os direitos reservados.
        </p>
        <p>
          Produzido por{' '}
          {credits.url ? (
            <a href={credits.url} target="_blank" rel="noopener" className="font-semibold text-creme/80 underline decoration-creme/30 underline-offset-4 transition-colors hover:text-creme">
              {credits.name}
            </a>
          ) : (
            <span className="font-semibold text-creme/80">{credits.name}</span>
          )}
        </p>
      </div>
    </footer>
  )
}
