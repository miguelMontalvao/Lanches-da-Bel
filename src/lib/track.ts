// Registra cliques de conversão. Funciona automaticamente se o
// Google Tag Manager / GA4 (gtag) ou Meta Pixel forem adicionados ao index.html.
type Win = Window & {
  dataLayer?: unknown[]
  gtag?: (...args: unknown[]) => void
  fbq?: (...args: unknown[]) => void
}

export function track(event: string, params: Record<string, string> = {}) {
  const w = window as Win
  w.dataLayer?.push({ event, ...params })
  w.gtag?.('event', event, params)
  w.fbq?.('trackCustom', event, params)
}
