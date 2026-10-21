import { site, whatsappUrl } from '../config'
import { track } from '../lib/track'
import { AppPill, BrendiButton } from './Buttons'
import { Logo } from './Header'

export function FinalCta() {
  return (
    <section className="bg-gradient-to-br from-rosa-200 via-rosa-100 to-rosa-50 py-16 text-center sm:py-20">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="font-display text-3xl font-extrabold text-rosa-900 sm:text-5xl">Seu lanche está a poucos cliques 🍔</h2>
        <p className="mt-4 text-lg text-rosa-900/80">Mais de 100 pessoas já pediram hoje. Bora ser a próxima?</p>
        <BrendiButton location="cta_final" label="Fazer meu pedido agora" pulse className="mt-8 w-full sm:w-auto" />
        <p className="mt-6 text-sm font-semibold text-rosa-900/70">Fora da área de entrega?</p>
        <div className="mx-auto mt-3 flex max-w-xl flex-col gap-3 sm:flex-row sm:justify-center">
          <AppPill app="99food" location="cta_final" className="sm:min-w-0 sm:px-6 sm:py-3 sm:text-base" />
          <AppPill app="ifood" location="cta_final" className="sm:min-w-0 sm:px-6 sm:py-3 sm:text-base" />
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  const { address } = site
  return (
    <footer className="border-t border-rosa-100 bg-white pb-28 pt-10 sm:pb-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 text-center text-sm text-rosa-900/70 sm:flex-row sm:justify-between sm:text-left">
        <Logo className="h-10" />
        <p>
          {address.street} – {address.neighborhood}, {address.region} – {address.city}/{address.state}
          <br />
          <a href={whatsappUrl()} target="_blank" rel="noopener" onClick={() => track('clique_whatsapp', { local: 'rodape' })} className="font-bold text-rosa-700 hover:underline">
            WhatsApp {site.whatsapp.display}
          </a>
        </p>
        <p>© {new Date().getFullYear()} {site.name}</p>
      </div>
    </footer>
  )
}
