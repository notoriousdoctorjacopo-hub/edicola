import { useState } from 'react'
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from 'framer-motion'
import { CATEGORIE } from '../data.js'
import { ASSETS } from '../assets.js'

// Posizione di ogni badge attorno al chiosco (in % del palco)
const POSIZIONI = {
  pokemon: { top: '6%', left: '0%', rot: -8 },
  giochi: { top: '2%', right: '2%', rot: 6 },
  figurine: { top: '46%', left: '-6%', rot: 5 },
  riviste: { bottom: '4%', left: '8%', rot: -5 },
  gratta: { bottom: '12%', right: '-4%', rot: 7 },
}

const molla = { type: 'spring', stiffness: 520, damping: 22 }

export default function Hero({ onScegli }) {
  const [attiva, setAttiva] = useState(null)
  const ridotto = useReducedMotion()
  const cat = CATEGORIE.find((c) => c.id === attiva)

  // Colori del momento: lo sfondo taglia di netto sul colore della categoria
  const sfondo = cat ? cat.colore : 'var(--carta)'
  const testo = cat ? cat.testo : '#000000'
  const linea = testo === '#FFFFFF' ? '#FFFFFF' : '#000000'

  // Inclinazione del chiosco verso il cursore
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rotY = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), { stiffness: 220, damping: 18 })
  const rotX = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 220, damping: 18 })
  const burstX = useSpring(useTransform(mx, [-0.5, 0.5], [22, -22]), { stiffness: 160, damping: 20 })
  const burstY = useSpring(useTransform(my, [-0.5, 0.5], [16, -16]), { stiffness: 160, damping: 20 })

  const muovi = (e) => {
    if (ridotto) return
    const r = e.currentTarget.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width - 0.5)
    my.set((e.clientY - r.top) / r.height - 0.5)
  }
  const azzera = () => {
    mx.set(0)
    my.set(0)
  }

  return (
    <header
      className="hero"
      style={{ backgroundColor: sfondo, color: testo, '--line': linea }}
      onMouseMove={muovi}
      onMouseLeave={azzera}
    >
      <div className="strato-retino" aria-hidden="true" />

      <nav className="hero-nav" aria-label="Principale">
        <a href="#" className="wordmark display">Edicola Galli</a>
        <div className="flex gap-3">
          <a href="#cosa-trovi" className="pill">Cosa trovi</a>
          <a href="#servizi" className="pill">Servizi</a>
          <a href="#dove-siamo" className="pill">Dove siamo</a>
        </div>
      </nav>

      <h1 className="hero-titolo display">
        <span className="riga riga-1">
          <motion.span
            className="block"
            initial={{ y: '105%' }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 240, damping: 26 }}
          >
            Il tuo mondo
          </motion.span>
        </span>
        <span className="riga riga-2">
          <motion.span
            className="block"
            initial={{ y: '105%' }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 240, damping: 26, delay: 0.08 }}
          >
            in un chiosco.
          </motion.span>
        </span>
      </h1>

      <p className="hero-sotto">
        Non solo notizie. Carte, figurine, pagamenti pagoPA e il giornale del mattino. Aperti
        tutti i giorni dalle 6:45.
      </p>

      <div className="palco">
        {/* Esplosione fumetto dietro al chiosco, con un leggero parallasse */}
        <motion.img
          src={ASSETS.burst}
          alt=""
          aria-hidden="true"
          className="palco-burst"
          style={{ x: burstX, y: burstY }}
          initial={{ scale: 0.4, rotate: -40, opacity: 0 }}
          animate={{ scale: 1, rotate: -8, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 16, delay: 0.15 }}
          draggable="false"
        />

        <motion.div
          className="palco-chiosco"
          initial={{ scale: 0.6, y: 60, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.05 }}
        >
          <motion.img
            src={ASSETS.chiosco}
            alt="Chiosco dell'edicola con tenda a righe rosa e gialle e scaffali pieni di riviste"
            className="contorno-ombra chiosco-img"
            style={{ rotateX: rotX, rotateY: rotY }}
            draggable="false"
          />
        </motion.div>

        <ul className="badge-lista">
          {CATEGORIE.map((c, i) => {
            const p = POSIZIONI[c.id]
            return (
              <motion.li
                key={c.id}
                className="badge-posto"
                style={{
                  '--top': p.top ?? 'auto',
                  '--left': p.left ?? 'auto',
                  '--right': p.right ?? 'auto',
                  '--bottom': p.bottom ?? 'auto',
                  zIndex: attiva === c.id ? 30 : 20,
                }}
                initial={{ scale: 0, rotate: p.rot - 25 }}
                animate={{ scale: 1, rotate: p.rot }}
                transition={{ ...molla, delay: 0.35 + i * 0.07 }}
              >
                <motion.button
                  type="button"
                  className="badge"
                  style={{ backgroundColor: c.colore, color: c.testo }}
                  whileHover={{ scale: 1.18 }}
                  whileFocus={{ scale: 1.18 }}
                  whileTap={{ scale: 1.05 }}
                  transition={molla}
                  onMouseEnter={() => setAttiva(c.id)}
                  onMouseLeave={() => setAttiva(null)}
                  onFocus={() => setAttiva(c.id)}
                  onBlur={() => setAttiva(null)}
                  onClick={() => onScegli(c.id)}
                  aria-label={`${c.nome}: apri la scheda`}
                >
                  <img src={c.img} alt="" className="badge-img" draggable="false" />
                  <span className="display badge-nome">{c.nome}</span>
                </motion.button>
              </motion.li>
            )
          })}
        </ul>
      </div>
    </header>
  )
}
