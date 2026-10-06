import { motion } from 'framer-motion'
import { MAPPA_URL, MAPPA_EMBED } from '../data.js'
import { ASSETS } from '../assets.js'
import Orari from './Orari.jsx'

export default function Location() {
  return (
    <section id="dove-siamo" className="dove-sezione" aria-labelledby="titolo-dove">
      <div className="strato-retino strato-retino--forte" aria-hidden="true" />

      <div className="contenitore dove-griglia">
        <div className="dove-testo">
          <h2 id="titolo-dove" className="display dove-titolo">
            Vieni a
            <br />
            trovarci.
          </h2>

          <p className="targa">Via Narni</p>

          <Orari />

          <motion.a
            href={MAPPA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta display"
            whileHover={{ x: -3, y: -3, boxShadow: '11px 11px 0 0 #000' }}
            whileTap={{ scale: 0.96, x: 0, y: 0, boxShadow: '4px 4px 0 0 #000' }}
            transition={{ type: 'spring', stiffness: 700, damping: 14 }}
            style={{ boxShadow: '8px 8px 0 0 #000' }}
          >
            Portami qui
          </motion.a>
        </div>

        <div className="dove-mappa">
          <div className="mappa">
            <iframe
              title="Mappa: Edicola Galli, Via Narni"
              src={MAPPA_EMBED}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <div className="adesivo" aria-hidden="true">
            <img src={ASSETS.burst} alt="" draggable="false" />
            <span className="display">Siamo qui</span>
          </div>
        </div>
      </div>
    </section>
  )
}
