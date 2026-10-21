import { BrendiButton } from './Buttons'

const steps = [
  { emoji: '📱', title: 'Abra o cardápio', text: 'Tudo com foto e preço, sem precisar baixar nada.' },
  { emoji: '🍔', title: 'Monte seu pedido', text: 'Escolha os lanches, adicionais e a bebida.' },
  { emoji: '🛵', title: 'Receba quentinho', text: 'Entregamos na sua porta ou você retira no balcão.' },
]

export function OrderMain() {
  return (
    <section id="pedir" className="bg-rosa-50 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4">
        <div className="rounded-[2.5rem] bg-white px-6 py-12 text-center shadow-xl shadow-rosa-200/50 ring-1 ring-rosa-100 sm:px-12">
          <span className="inline-block rounded-full bg-rosa-100 px-4 py-1.5 text-sm font-extrabold uppercase tracking-wide text-rosa-700">
            Canal oficial • Pedido direto com a Bel
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-rosa-900 sm:text-5xl">Peça direto pelo nosso cardápio digital</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-rosa-900/75">
            O seu pedido cai direto na nossa cozinha, sem intermediário. É o jeito mais rápido de receber e a melhor forma de apoiar a
            lanchonete do seu bairro. 💗
          </p>

          <ol className="mx-auto mt-10 grid max-w-4xl gap-6 text-left sm:grid-cols-3">
            {steps.map((s, i) => (
              <li key={s.title} className="flex gap-4 rounded-2xl bg-rosa-50 p-5 sm:flex-col sm:gap-2">
                <span className="text-4xl" aria-hidden="true">{s.emoji}</span>
                <div>
                  <p className="font-display text-lg font-extrabold text-rosa-900">
                    {i + 1}. {s.title}
                  </p>
                  <p className="text-rosa-900/75">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <BrendiButton location="secao_pedido" label="Abrir cardápio e pedir agora" pulse className="mt-10 w-full sm:w-auto" />
        </div>
      </div>
    </section>
  )
}
