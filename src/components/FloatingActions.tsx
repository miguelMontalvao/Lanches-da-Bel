import { site, whatsappUrl } from '../config'
import { track } from '../lib/track'
import { WhatsAppIcon } from './Icons'

export function FloatingActions() {
  return (
    <>
      <a
        href={whatsappUrl()}
        target="_blank"
        rel="noopener"
        aria-label={`Falar com a ${site.name} no WhatsApp`}
        onClick={() => track('clique_whatsapp', { local: 'flutuante' })}
        className="fixed bottom-24 right-4 z-50 grid size-14 place-items-center rounded-full bg-[#25d366] text-white shadow-xl shadow-black/20 transition hover:scale-110 sm:bottom-6 sm:right-6 sm:size-16"
      >
        <WhatsAppIcon className="size-8 sm:size-9" />
      </a>

      {/* Barra fixa de pedido no celular */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-rosa-100 bg-white/95 p-3 backdrop-blur sm:hidden">
        <a
          href={site.brendiUrl}
          target="_blank"
          rel="noopener"
          onClick={() => track('clique_pedido_brendi', { local: 'barra_mobile' })}
          className="flex w-full items-center justify-center rounded-full bg-rosa-700 py-3.5 text-lg font-extrabold text-white shadow-lg shadow-rosa-700/25"
        >
          🍔 Pedir agora
        </a>
      </div>
    </>
  )
}
