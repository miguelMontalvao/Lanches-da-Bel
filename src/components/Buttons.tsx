import { site, whatsappUrl } from '../config'
import { track } from '../lib/track'
import { ArrowIcon, WhatsAppIcon } from './Icons'

const base =
  'group inline-flex items-center justify-center gap-2.5 font-display uppercase leading-none tracking-wider transition duration-200 ease-out active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-creme motion-reduce:transition-none'

const sizes = {
  md: 'min-h-11 px-5 pt-2.5 pb-2 text-xl',
  lg: 'min-h-14 px-7 pt-3.5 pb-3 text-2xl',
}

type BrendiProps = { location: string; label?: string; size?: keyof typeof sizes; className?: string }

/** Botão principal: abre o cardápio digital (Brendi). */
export function BrendiButton({ location, label = 'Ver cardápio e pedir', size = 'lg', className = '' }: BrendiProps) {
  return (
    <a
      href={site.brendiUrl}
      target="_blank"
      rel="noopener"
      onClick={() => track('clique_pedido_brendi', { local: location })}
      className={`${base} ${sizes[size]} rounded-md bg-rosa text-carvao hover:bg-rosa-claro ${className}`}
    >
      {label}
      <ArrowIcon className="-mt-0.5 size-5 transition-transform duration-200 group-hover:translate-x-1" />
    </a>
  )
}

type WhatsAppProps = { location: string; label?: string; className?: string }

/** Botão secundário com contorno para o WhatsApp. */
export function WhatsAppButton({ location, label = 'Chamar no WhatsApp', className = '' }: WhatsAppProps) {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener"
      onClick={() => track('clique_whatsapp', { local: location })}
      className={`${base} ${sizes.lg} rounded-md border border-linha text-creme hover:border-creme ${className}`}
    >
      <WhatsAppIcon className="-mt-0.5 size-5" />
      {label}
    </a>
  )
}

type AppPillProps = { app: 'ifood' | '99food'; location: string; className?: string }

/** Botões cilíndricos dos apps parceiros (fora da área de entrega). */
export function AppPill({ app, location, className = '' }: AppPillProps) {
  const isIfood = app === 'ifood'
  return (
    <a
      href={isIfood ? site.ifoodUrl : site.food99Url}
      target="_blank"
      rel="noopener"
      onClick={() => track('clique_app_parceiro', { app, local: location })}
      className={`${base} ${sizes.lg} w-full rounded-full ${
        isIfood ? 'bg-ifood text-white hover:bg-ifood-dark' : 'bg-food99 text-carvao hover:bg-food99-dark'
      } ${className}`}
    >
      Pedir no {isIfood ? 'iFood' : '99Food'}
    </a>
  )
}
