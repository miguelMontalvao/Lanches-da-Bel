import { useState } from 'react'

type Props = React.ImgHTMLAttributes<HTMLImageElement> & {
  src: string
  alt: string
  /** Exibido se o arquivo ainda não existir em /public/images. */
  fallbackLabel?: string
}

export function SafeImage({ fallbackLabel, className, ...img }: Props) {
  const [failed, setFailed] = useState(false)
  if (failed) {
    return (
      <div className={`grid place-items-center bg-grafite-2 p-4 text-center font-display text-xl uppercase tracking-wide text-creme/40 ${className ?? ''}`}>
        {fallbackLabel ?? img.alt}
      </div>
    )
  }
  return <img loading="lazy" decoding="async" {...img} className={className} onError={() => setFailed(true)} />
}
