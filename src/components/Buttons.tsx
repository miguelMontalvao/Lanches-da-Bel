import { site } from '../config'
import { track } from '../lib/track'
import { ArrowIcon } from './Icons'

type BrendiProps = { location: string; label?: string; size?: 'md' | 'lg'; pulse?: boolean; className?: string }

export function BrendiButton({ location, label = 'Ver cardápio e pedir', size = 'lg', pulse, className = '' }: BrendiProps) {
  const sizes = size === 'lg' ? 'px-8 py-4 text-lg sm:text-xl' : 'px-5 py-2.5 text-base'
  return (
    <a
      href={site.brendiUrl}
      target="_blank"
      rel="noopener"
      onClick={() => track('clique_pedido_brendi', { local: location })}
      className={`group inline-flex items-center justify-center gap-2 rounded-full bg-rosa-700 font-extrabold text-white shadow-lg shadow-rosa-700/25 transition hover:-translate-y-0.5 hover:bg-rosa-800 focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-rosa-400 ${sizes} ${pulse ? 'cta-pulse' : ''} ${className}`}
    >
      {label}
      <ArrowIcon className="size-5 transition group-hover:translate-x-1" />
    </a>
  )
}

type AppPillProps = { app: 'ifood' | '99food'; location: string; className?: string }

export function AppPill({ app, location, className = '' }: AppPillProps) {
  const isIfood = app === 'ifood'
  return (
    <a
      href={isIfood ? site.ifoodUrl : site.food99Url}
      target="_blank"
      rel="noopener"
      onClick={() => track('clique_app_parceiro', { app, local: location })}
      className={`inline-flex w-full items-center justify-center gap-3 rounded-full px-8 py-4 text-lg font-extrabold shadow-lg transition hover:-translate-y-0.5 focus-visible:outline-4 focus-visible:outline-offset-2 sm:w-auto sm:min-w-64 ${
        isIfood
          ? 'bg-ifood text-white shadow-ifood/30 hover:bg-ifood-dark focus-visible:outline-ifood'
          : 'bg-food99 text-neutral-900 shadow-food99/40 hover:bg-food99-dark focus-visible:outline-neutral-900'
      } ${className}`}
    >
      <span className="text-2xl leading-none" aria-hidden="true">🛵</span>
      Pedir no {isIfood ? 'iFood' : '99Food'}
    </a>
  )
}
