import { useState } from 'react'

type Props = {
  src: string
  alt: string
  className?: string
  fallback: React.ReactNode
  loading?: 'lazy' | 'eager'
}

// Mostra a imagem real quando ela existir em /public; senão, a arte provisória.
export function SafeImage({ src, alt, className, fallback, loading = 'lazy' }: Props) {
  const [failed, setFailed] = useState(false)
  if (failed) return <>{fallback}</>
  return <img src={src} alt={alt} className={className} loading={loading} onError={() => setFailed(true)} />
}
