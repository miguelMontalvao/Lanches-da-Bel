import { BrendiButton } from './Buttons'
import { SectionLabel } from './SectionLabel'

const steps = [
  { title: 'Abra o cardápio', text: 'Fotos e preços de tudo, direto no navegador. Não precisa baixar app.' },
  { title: 'Monte seu pedido', text: 'Escolha os lanches, os adicionais e a bebida.' },
  { title: 'Receba quentinho', text: 'Informe o endereço e acompanhe o pedido até chegar.' },
]

export function OrderMain() {
  return (
    <section id="pedir" aria-labelledby="pedir-titulo" className="py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-12 lg:items-center lg:gap-16">
        <div data-reveal className="relative mx-auto w-full max-w-sm lg:col-span-5 lg:max-w-none">
          <div className="aspect-square overflow-hidden rounded-md">
            <picture>
              <source srcSet="/images/lanche-4.webp" type="image/webp" />
              <img
                src="/images/lanche-4.jpg"
                alt="Combo na caixa: batata com cheddar e bacon, anéis de cebola e três lanches"
                width={800}
                height={800}
                loading="lazy"
                decoding="async"
                className="size-full object-cover"
              />
            </picture>
          </div>
          <p className="absolute -bottom-4 left-4 rounded-md bg-mostarda px-3 pb-1 pt-1.5 font-display text-lg uppercase tracking-wider text-carvao">
            Canal oficial da Bel
          </p>
        </div>

        <div data-reveal className="lg:col-span-7">
          <SectionLabel index="01">Como pedir</SectionLabel>
          <h2 id="pedir-titulo" className="mt-4 font-display text-5xl uppercase leading-[0.9] tracking-wide sm:text-6xl">
            Peça direto com a gente
          </h2>
          <p className="mt-4 max-w-lg text-lg leading-relaxed text-creme/70">
            Pelo cardápio digital, o pedido cai direto na nossa cozinha, sem intermediário. É o jeito mais rápido de receber e a melhor forma
            de apoiar a lanchonete do seu bairro.
          </p>

          <ol className="mt-8 border-t border-linha">
            {steps.map((s, i) => (
              <li key={s.title} className="grid grid-cols-[3rem_1fr] gap-4 border-b border-linha py-5">
                <span className="font-display text-4xl leading-none text-rosa">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <p className="font-display text-2xl uppercase leading-none tracking-wide">{s.title}</p>
                  <p className="mt-1.5 text-creme/70">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <BrendiButton location="secao_pedido" label="Abrir cardápio e pedir" className="mt-8 w-full sm:w-auto" />
        </div>
      </div>
    </section>
  )
}
