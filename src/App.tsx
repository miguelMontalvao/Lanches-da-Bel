import { useEffect } from 'react'
import { FloatingActions } from './components/FloatingActions'
import { Faq } from './components/Faq'
import { FinalCta, Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { HoursLocation } from './components/HoursLocation'
import { OrderMain } from './components/OrderMain'
import { OtherApps } from './components/OtherApps'
import { initReveal } from './lib/reveal'

export default function App() {
  useEffect(() => initReveal(), [])

  return (
    <>
      <Header />
      <main id="conteudo">
        <Hero />
        <OrderMain />
        <OtherApps />
        <HoursLocation />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}
