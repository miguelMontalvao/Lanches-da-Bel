import { FloatingActions } from './components/FloatingActions'
import { Faq } from './components/Faq'
import { FinalCta, Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Highlights } from './components/Highlights'
import { HoursLocation } from './components/HoursLocation'
import { OrderMain } from './components/OrderMain'
import { OtherApps } from './components/OtherApps'
import { Proof } from './components/Proof'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Proof />
        <Highlights />
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
