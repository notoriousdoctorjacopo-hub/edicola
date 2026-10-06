import { motion } from 'framer-motion'
import { ASSETS } from '../assets.js'

// La foto di Adriano e Roberto, presentata come una locandina da edicola
export default function ChiSiamo() {
  return (
    <section id="chi-siamo" className="chi-sezione" aria-labelledby="titolo-chi">
      <div className="strato-retino strato-retino--tenue" aria-hidden="true" />

      <div className="contenitore chi-griglia">
        <motion.figure
          className="chi-foto"
          initial={false}
          animate={{ rotate: -3 }}
          whileHover={{ rotate: -1, scale: 1.015 }}
          transition={{ type: 'spring', stiffness: 400, damping: 18 }}
        >
          <span className="nastro-adesivo nastro-adesivo--sx" aria-hidden="true" />
          <span className="nastro-adesivo nastro-adesivo--dx" aria-hidden="true" />
          <img
            src={ASSETS.foto}
            alt="Adriano e Roberto davanti all’edicola di Via Narni"
            loading="lazy"
            draggable="false"
          />
          <figcaption>Adriano e Roberto, davanti all’edicola</figcaption>
        </motion.figure>

        <motion.div
          className="locandina"
          initial={false}
          animate={{ rotate: 2 }}
          whileHover={{ rotate: 0.5 }}
          transition={{ type: 'spring', stiffness: 400, damping: 18 }}
        >
          <p className="locandina-testata display">Edicola Galli</p>
          <h2 id="titolo-chi" className="locandina-titolo">
            Adriano e Roberto,
            <span>i tuoi edicolanti di fiducia</span>
          </h2>
          <p className="locandina-testo">
            Li trovi dietro al banco ogni mattina dalle 6:45, domenica compresa. Chiedi pure: se una
            cosa c’è, sanno esattamente dove sta.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
