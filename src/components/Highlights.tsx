import { highlights, site } from '../config'
import { track } from '../lib/track'
import { BrendiButton } from './Buttons'
import { SafeImage } from './SafeImage'

const fallbackEmoji = ['🍔', '🌭', '🍳', '🍟']

export function Highlights() {
  return (
    <section id="cardapio" className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-bold uppercase tracking-widest text-rosa-600">Os queridinhos do bairro</p>
        <h2 className="mt-2 font-display text-3xl font-extrabold text-rosa-900 sm:text-4xl">Dá água na boca só de olhar</h2>
        <p className="mt-3 text-lg text-rosa-900/75">Esses são os mais pedidos da casa. Escolha o seu e finalize em poucos cliques.</p>
      </div>

      <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {highlights.map((item, i) => (
          <li key={item.name}>
            <a
              href={site.brendiUrl}
              target="_blank"
              rel="noopener"
              onClick={() => track('clique_pedido_brendi', { local: 'destaque', item: item.name })}
              className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-md ring-1 ring-rosa-100 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-rosa-200/60"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-rosa-100">
                <SafeImage
                  src={item.image}
                  alt={item.name}
                  className="size-full object-cover transition duration-500 group-hover:scale-105"
                  fallback={
                    <div className="grid size-full place-items-center bg-gradient-to-br from-rosa-100 to-rosa-200 text-7xl" aria-hidden="true">
                      {fallbackEmoji[i % fallbackEmoji.length]}
                    </div>
                  }
                />
                {item.badge && (
                  <span className="absolute left-3 top-3 rounded-full bg-rosa-700 px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-white">
                    {item.badge}
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-xl font-extrabold text-rosa-900">{item.name}</h3>
                <p className="mt-1 flex-1 text-rosa-900/75">{item.description}</p>
                <span className="mt-4 font-extrabold text-rosa-700 group-hover:text-rosa-900">Quero esse →</span>
              </div>
            </a>
          </li>
        ))}
      </ul>

      <div className="mt-10 text-center">
        <BrendiButton location="destaques" label="Ver cardápio completo" />
      </div>
    </section>
  )
}
