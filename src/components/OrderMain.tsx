import { BrendiButton } from './Buttons'
import { SectionLabel } from './SectionLabel'

const steps = [
  { title: 'Abra o cardápio', text: 'Fotos e preços de tudo, direto no navegador. Não precisa baixar app.' },
  { title: 'Monte seu pedido', text: 'Escolha os lanches, os adicionais e a bebida.' },
  { title: 'Receba quentinho', text: 'Informe o endereço e acompanhe o pedido até chegar.' },
]

export function OrderMain() {
  return (
    <section id="pedir" aria-labelledby="pedir-titulo" data-spotlight className="py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-12 lg:items-center lg:gap-16">
        <div data-reveal className="relative mx-auto w-full max-w-sm lg:col-span-5 lg:max-w-none">
          {/* Caixa Top sem fundo, flutuando como os lanches do topo */}
          <div
            aria-hidden="true"
            className="absolute inset-[8%] rounded-full bg-[radial-gradient(closest-side,rgb(244_183_64/0.22),transparent)]"
          />
          <picture>
            <source
              srcSet="/images/caixa-top-480.webp 480w, /images/caixa-top-640.webp 640w, /images/caixa-top.webp 900w"
              sizes="(min-width: 1024px) 440px, (min-width: 640px) 384px, calc(100vw - 32px)"
              type="image/webp"
            />
            <img
              src="/images/caixa-top.png"
              alt="Caixa Top: batata com cheddar e bacon, nuggets, molho e três hambúrgueres"
              width={900}
              height={484}
              loading="lazy"
              decoding="async"
              className="relative h-auto w-full drop-shadow-[0_24px_30px_rgb(0_0_0/0.55)]"
            />
          </picture>
          <p className="absolute -bottom-6 left-4 rounded-md bg-mostarda px-3 pb-1 pt-1.5 font-display text-lg uppercase tracking-wider text-carvao">
            Canal oficial da Bel
          </p>
        </div>

        <div data-reveal className="lg:col-span-7">
          <SectionLabel index="01">Como pedir</SectionLabel>
          <h2 id="pedir-titulo" className="mt-4 text-center font-display text-5xl uppercase leading-[0.9] tracking-wide sm:text-6xl lg:text-left">
            Peça direto com a gente
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-center text-lg leading-relaxed text-creme/70 lg:mx-0 lg:text-left">
            Pelo cardápio digital, o pedido cai direto na nossa cozinha, sem intermediário. É o jeito mais rápido de receber e a melhor forma
            de apoiar a lanchonete do seu bairro.
          </p>

          <ol className="mt-8 border-t border-linha">
            {steps.map((s, i) => (
              // Cada passo entra um depois do outro; a linha liga o número ao próximo
              <li
                key={s.title}
                data-reveal
                style={{ transitionDelay: `${i * 150}ms` }}
                className="relative grid grid-cols-[3rem_1fr] gap-4 border-b border-linha py-5"
              >
                <span className="font-display text-4xl leading-none text-turquesa">{String(i + 1).padStart(2, '0')}</span>
                {i < steps.length - 1 && (
                  <span aria-hidden="true" className="step-line absolute -bottom-3 left-[0.95rem] top-[3.75rem] w-0.5 rounded-full bg-turquesa/50" />
                )}
                <div>
                  <p className="font-display text-2xl uppercase leading-none tracking-wide">{s.title}</p>
                  <p className="mt-1.5 text-creme/70">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-8 text-center lg:text-left">
            <BrendiButton location="secao_pedido" label="Abrir cardápio e pedir" className="w-full sm:w-auto" />
          </div>
        </div>
      </div>
    </section>
  )
}
