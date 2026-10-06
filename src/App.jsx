import { useState, useCallback } from 'react'
import { MotionConfig } from 'framer-motion'
import Hero from './components/Hero.jsx'
import CategoryGrid from './components/CategoryGrid.jsx'
import Servizi from './components/Servizi.jsx'
import ChiSiamo from './components/ChiSiamo.jsx'
import Location from './components/Location.jsx'
import Footer from './components/Footer.jsx'
import { ASSETS } from './assets.js'

export default function App() {
  const [aperta, setAperta] = useState(null)

  // Click su un badge dell'hero: apre la scheda e porta l'utente alla griglia
  const apriDaBadge = useCallback((id) => {
    setAperta(id)
    requestAnimationFrame(() => {
      document.getElementById('cosa-trovi')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }, [])

  return (
    <MotionConfig reducedMotion="user">
      <div style={{ '--retino': `url(${ASSETS.retino})` }}>
        <a href="#cosa-trovi" className="salta">Vai ai contenuti</a>
        <Hero onScegli={apriDaBadge} />
        <main>
          <CategoryGrid aperta={aperta} setAperta={setAperta} />
          <Servizi />
          <ChiSiamo />
          <Location />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  )
}
