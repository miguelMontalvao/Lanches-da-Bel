import { site, whatsappUrl } from '../config'
import { track } from '../lib/track'
import { WhatsAppIcon } from './Icons'

export function FloatingActions() {
  return (
    <>
      {/* Desktop: WhatsApp flutuante */}
      <a
        href={whatsappUrl()}
        target="_blank"
        rel="noopener"
        aria-label={`Falar com a ${site.name} no WhatsApp`}
        onClick={() => track('clique_whatsapp', { local: 'flutuante' })}
        className="fixed bottom-6 right-6 z-40 hidden size-14 place-items-center rounded-full bg-[#25d366] text-carvao shadow-lg shadow-black/40 transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-creme md:grid"
      >
        <WhatsAppIcon className="size-7" />
      </a>

      {/* Celular: barra fixa com pedido + WhatsApp, sempre ao alcance do polegar */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-linha bg-carvao px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 md:hidden">
        <div className="flex gap-3">
          <a
            href={site.brendiUrl}
            target="_blank"
            rel="noopener"
            onClick={() => track('clique_pedido_brendi', { local: 'barra_mobile' })}
            className="flex min-h-13 flex-1 items-center justify-center rounded-md bg-rosa pb-2.5 pt-3.5 font-display text-2xl uppercase leading-none tracking-wider text-carvao transition active:scale-[0.98]"
          >
            Pedir agora
          </a>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener"
            aria-label="Falar no WhatsApp"
            onClick={() => track('clique_whatsapp', { local: 'barra_mobile' })}
            className="grid min-h-13 w-14 place-items-center rounded-md border border-linha text-creme transition active:scale-[0.98]"
          >
            <WhatsAppIcon className="size-6" />
          </a>
        </div>
      </div>
    </>
  )
}
