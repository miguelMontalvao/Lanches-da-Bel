import { useEffect } from 'react'
import { FloatingActions } from './components/FloatingActions'
import { Faq } from './components/Faq'
import { FinalCta, Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { HoursLocation } from './components/HoursLocation'
import { Marquee } from './components/Marquee'
import { OrderMain } from './components/OrderMain'
import { OtherApps } from './components/OtherApps'
import { initRipple, initSpotlight } from './lib/effects'
import { initReveal } from './lib/reveal'

export default function App() {
  useEffect(() => {
    const cleanups = [initReveal(), initSpotlight(), initRipple()]
    return () => cleanups.forEach((fn) => fn())
  }, [])

  return (
    <>
      <Header />
      <main id="conteudo">
        <Hero />
        <Marquee />
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
