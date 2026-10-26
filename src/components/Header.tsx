import { site } from '../config'
import { BrendiButton } from './Buttons'
import { SafeImage } from './SafeImage'

export const navLinks = [
  { href: '#pedir', label: 'Como pedir' },
  { href: '#horario', label: 'Horário e local' },
  { href: '#duvidas', label: 'Dúvidas' },
]

export function Logo({ className = 'size-14' }: { className?: string }) {
  return <SafeImage src={site.logo} alt={site.name} width={150} height={150} loading="eager" className={`${className} object-contain`} />
}

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-linha bg-carvao">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:rounded-md focus:bg-creme focus:px-4 focus:py-2 focus:font-bold focus:text-carvao"
      >
        Pular para o conteúdo
      </a>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:h-20">
        <a href="#topo" aria-label={`${site.name}, voltar ao início`} className="-my-1 shrink-0">
          <Logo className="size-14 sm:size-16" />
        </a>
        <nav aria-label="Principal" className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative py-1 text-sm font-semibold uppercase tracking-wider text-creme/80 transition-colors hover:text-creme after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:bg-rosa after:transition-transform hover:after:scale-x-100"
            >
              {l.label}
            </a>
          ))}
        </nav>
        {/* No celular a barra fixa inferior faz esse papel */}
        <div className="hidden md:block">
          <BrendiButton location="header" label="Pedir agora" size="md" />
        </div>
      </div>
    </header>
  )
}
