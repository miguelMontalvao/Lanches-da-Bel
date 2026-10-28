import { useEffect, useState } from 'react'
import { notice } from '../config'
import { todayDateBrasilia } from '../lib/hours'

// Aviso fino acima do cabeçalho, ligado em config.notice
export function Notice() {
  const [expired, setExpired] = useState(false)
  // A data só é conferida no navegador: o HTML pré-renderizado não sabe o dia de hoje
  useEffect(() => setExpired(Boolean(notice.until) && todayDateBrasilia() > notice.until), [])
  if (!notice.text || expired) return null
  return (
    <p role="status" className="bg-mostarda px-4 pb-1.5 pt-2 text-center text-sm font-semibold text-carvao">
      {notice.text}
    </p>
  )
}
