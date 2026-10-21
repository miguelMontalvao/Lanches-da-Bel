import { site } from '../config'
import { BrendiButton } from './Buttons'
import { SafeImage } from './SafeImage'

const links = [
  { href: '#cardapio', label: 'Cardápio' },
  { href: '#apps', label: 'iFood e 99Food' },
  { href: '#horario', label: 'Horário e local' },
  { href: '#duvidas', label: 'Dúvidas' },
]

export function Logo({ className = 'h-12' }: { className?: string }) {
  return (
    <SafeImage
      src={site.logo}
      alt={site.name}
      loading="eager"
      className={`${className} w-auto`}
      fallback={
        <span className="flex items-center gap-2 font-display text-2xl font-extrabold leading-none text-rosa-800">
          <span className="grid size-10 place-items-center rounded-full bg-rosa-200 text-xl" aria-hidden="true">🍔</span>
          {site.name}
        </span>
      }
    />
  )
}

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-rosa-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <a href="#topo" aria-label={`${site.name} – início`}>
          <Logo />
        </a>
        <nav aria-label="Principal" className="hidden items-center gap-6 font-bold text-rosa-800 lg:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-rosa-600">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden sm:block">
          <BrendiButton location="header" label="Pedir agora" size="md" />
        </div>
      </div>
    </header>
  )
}
