import { site } from '../config'
import { track } from '../lib/track'
import { ArrowIcon } from './Icons'

type BrendiProps = { location: string; label?: string; size?: 'md' | 'lg'; className?: string }

export function BrendiButton({ location, label = 'Ver cardápio e pedir', size = 'lg', className = '' }: BrendiProps) {
  const sizes = size === 'lg' ? 'min-h-14 px-8 pt-3.5 pb-3 text-2xl sm:text-[1.7rem]' : 'min-h-11 px-5 pt-2 pb-1.5 text-xl'
  return (
    <a
      href={site.brendiUrl}
      target="_blank"
      rel="noopener"
      onClick={() => track('clique_pedido_brendi', { local: location })}
      className={`group inline-flex items-center justify-center gap-2 rounded-full bg-rosa-700 font-display uppercase leading-none tracking-wider text-white shadow-[0_4px_0_0_var(--color-tinta)] transition duration-150 hover:bg-tinta active:translate-y-1 active:shadow-none focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-rosa-400 ${sizes} ${className}`}
    >
      {label}
      <ArrowIcon className="-mt-1 size-5 transition group-hover:translate-x-1 motion-reduce:transition-none" />
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
      className={`inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full px-8 pt-3.5 pb-3 font-display text-2xl uppercase leading-none tracking-wider shadow-[0_4px_0_0_var(--color-tinta)] transition duration-150 active:translate-y-1 active:shadow-none focus-visible:outline-4 focus-visible:outline-offset-4 sm:w-auto sm:min-w-64 ${
        isIfood
          ? 'bg-ifood text-white hover:bg-ifood-dark focus-visible:outline-ifood'
          : 'bg-food99 text-tinta hover:bg-food99-dark focus-visible:outline-tinta'
      } ${className}`}
    >
      Pedir no {isIfood ? 'iFood' : '99Food'}
    </a>
  )
}
