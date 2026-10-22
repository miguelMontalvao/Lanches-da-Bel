/** Rótulo pequeno acima dos títulos de seção: "01 — Cardápio". */
export function SectionLabel({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-mostarda">
      <span className="font-display text-base tracking-wider text-creme/50">{index}</span>
      <span aria-hidden="true" className="h-px w-8 bg-mostarda/60" />
      {children}
    </p>
  )
}
