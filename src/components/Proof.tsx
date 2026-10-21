import { proof } from '../config'

export function Proof() {
  return (
    <section aria-label="Por que a Bel" className="bg-tinta text-white">
      <ul className="mx-auto grid max-w-6xl grid-cols-2 divide-white/10 px-4 py-10 lg:grid-cols-4 lg:divide-x">
        {proof.map((p) => (
          <li key={p.label} className="px-3 py-4 text-center">
            <p className="font-display text-4xl uppercase leading-none tracking-wide sm:text-5xl">
              {p.value} <span className="text-rosa-300">{p.unit}</span>
            </p>
            <p className="mt-2 text-sm font-medium text-white/70 sm:text-base">{p.label}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
