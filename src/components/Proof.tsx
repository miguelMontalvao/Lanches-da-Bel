import { proof } from '../config'

export function Proof() {
  return (
    <section aria-label="Por que a Bel" className="bg-rosa-700 text-white">
      <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-px px-4 py-10 lg:grid-cols-4">
        {proof.map((p) => (
          <li key={p.label} className="px-2 py-3 text-center">
            <p className="font-display text-3xl font-extrabold leading-none sm:text-4xl">
              {p.value} <span className="text-rosa-200">{p.unit}</span>
            </p>
            <p className="mt-2 text-sm font-semibold text-rosa-100 sm:text-base">{p.label}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
