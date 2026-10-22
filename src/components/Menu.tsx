import { useState } from 'react'
import { categories, menu, site, type Category } from '../config'
import { track } from '../lib/track'
import { BrendiButton } from './Buttons'
import { ArrowIcon } from './Icons'
import { SafeImage } from './SafeImage'
import { SectionLabel } from './SectionLabel'

type Filter = Category | 'Todos'
const filters: Filter[] = ['Todos', ...categories]

export function Menu() {
  const [active, setActive] = useState<Filter>('Todos')
  const items = active === 'Todos' ? menu : menu.filter((m) => m.category === active)

  return (
    <section id="cardapio" aria-labelledby="cardapio-titulo" className="bg-grafite py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div data-reveal className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <SectionLabel index="01">Cardápio</SectionLabel>
            <h2 id="cardapio-titulo" className="mt-4 font-display text-5xl uppercase leading-[0.9] tracking-wide sm:text-6xl">
              Os mais pedidos da casa
            </h2>
            <p className="mt-4 max-w-md text-creme/70">Uma amostra do que sai da nossa chapa. Preços e o cardápio completo estão no pedido online.</p>
          </div>

          <div role="group" aria-label="Filtrar por categoria" className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 lg:mx-0 lg:px-0">
            {filters.map((f) => {
              const on = f === active
              return (
                <button
                  key={f}
                  type="button"
                  aria-pressed={on}
                  onClick={() => setActive(f)}
                  className={`shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-creme ${
                    on ? 'border-creme bg-creme text-carvao' : 'border-linha text-creme/80 hover:border-creme/60 hover:text-creme'
                  }`}
                >
                  {f}
                </button>
              )
            })}
          </div>
        </div>

        <ul key={active} className="mt-10 grid gap-x-12 border-t border-linha lg:grid-cols-2">
          {items.map((item, i) => (
            <li key={item.name} className="animate-fade-up border-b border-linha" style={{ animationDelay: `${i * 60}ms` }}>
              <a
                href={site.brendiUrl}
                target="_blank"
                rel="noopener"
                onClick={() => track('clique_pedido_brendi', { local: 'cardapio', item: item.name })}
                className="group grid grid-cols-[6.5rem_1fr] items-center gap-5 py-6 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-creme sm:grid-cols-[9rem_1fr] sm:gap-6"
              >
                <div className="aspect-square overflow-hidden rounded-md bg-grafite-2">
                  <SafeImage
                    src={item.image}
                    alt={item.name}
                    width={240}
                    height={240}
                    className="size-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-mostarda">{item.category}</p>
                  <h3 className="mt-1 font-display text-3xl uppercase leading-none tracking-wide sm:text-4xl">{item.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-creme/70 sm:text-base">{item.description}</p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-rosa">
                    Pedir este
                    <ArrowIcon className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>

        <div data-reveal className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-creme/70">Tem muito mais no cardápio completo.</p>
          <BrendiButton location="cardapio" label="Ver cardápio completo" className="w-full sm:w-auto" />
        </div>
      </div>
    </section>
  )
}
