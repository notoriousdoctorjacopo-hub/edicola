import { useEffect, useRef } from 'react'
import { motion, LayoutGroup } from 'framer-motion'
import { CATEGORIE } from '../data.js'
import { ASSETS } from '../assets.js'

// Colonne occupate da ogni scheda chiusa (griglia a 6 colonne)
const SPAN = { pokemon: 3, giochi: 3, figurine: 2, riviste: 2, gratta: 2 }

const mollaLayout = { type: 'spring', stiffness: 380, damping: 34 }

function Scheda({ c, aperta, qualcunaAperta, onApri, onChiudi }) {
  const ref = useRef(null)
  const chiudiRef = useRef(null)
  const apriRef = useRef(null)
  const eraAperta = useRef(false)
  const chiudiFn = useRef(onChiudi)
  chiudiFn.current = onChiudi
  const linea = c.testo === '#FFFFFF' ? '#FFFFFF' : '#000000'
  // Con una scheda aperta, le altre occupano mezza riga: le righe restano sempre piene
  const span = aperta ? 6 : qualcunaAperta ? 3 : SPAN[c.id]

  useEffect(() => {
    if (aperta) {
      eraAperta.current = true
      chiudiRef.current?.focus({ preventScroll: true })
      const t = setTimeout(
        () => ref.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' }),
        380,
      )
      const esc = (e) => e.key === 'Escape' && chiudiFn.current()
      window.addEventListener('keydown', esc)
      return () => {
        clearTimeout(t)
        window.removeEventListener('keydown', esc)
      }
    }
    if (eraAperta.current) {
      eraAperta.current = false
      apriRef.current?.focus({ preventScroll: true })
    }
  }, [aperta])

  return (
    <motion.article
      ref={ref}
      layout
      transition={{ layout: mollaLayout }}
      className={`scheda scheda--${c.id} ${aperta ? 'is-aperta' : ''}`}
      style={{
        gridColumn: `span ${span} / span ${span}`,
        backgroundColor: c.colore,
        color: c.testo,
        borderRadius: 22,
        boxShadow: '10px 10px 0 0 #000',
        '--line': linea,
      }}
      whileHover={aperta ? undefined : { x: -4, y: -4, boxShadow: '14px 14px 0 0 #000' }}
    >
      {!aperta ? (
        <button
          ref={apriRef}
          type="button"
          className="scheda-chiusa"
          onClick={onApri}
          aria-expanded="false"
          aria-controls={`dettaglio-${c.id}`}
        >
          <div className="scheda-media">
            <div className="strato-retino" aria-hidden="true" />
            <motion.img
              layoutId={`img-${c.id}`}
              src={c.img}
              alt={c.alt}
              className="contorno-ombra scheda-img"
              draggable="false"
            />
          </div>
          <div className="scheda-testo">
            <motion.h3 layoutId={`titolo-${c.id}`} className="display scheda-titolo">
              {c.nome}
            </motion.h3>
            <motion.p
              className="scheda-breve"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.15, duration: 0.15 } }}
            >
              {c.breve}
            </motion.p>
            <span className="scheda-apri">
              <span className="scheda-piu" aria-hidden="true">+</span>
              Apri la scheda
            </span>
          </div>
        </button>
      ) : (
        <div id={`dettaglio-${c.id}`} className="scheda-aperta" role="region" aria-label={c.nome}>
          <button
            ref={chiudiRef}
            type="button"
            className="chiudi"
            onClick={onChiudi}
            aria-label={`Chiudi la scheda ${c.nome}`}
          >
            <span aria-hidden="true">X</span>
          </button>

          <div className="aperta-media">
            <motion.img
              src={ASSETS.burst}
              alt=""
              aria-hidden="true"
              className="aperta-burst"
              initial={{ scale: 0.3, rotate: -60, opacity: 0 }}
              animate={{ scale: 1, rotate: 8, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 220, damping: 14, delay: 0.1 }}
            />
            <motion.img
              layoutId={`img-${c.id}`}
              src={c.img}
              alt={c.alt}
              className="contorno-ombra aperta-img"
              draggable="false"
            />
          </div>

          <div className="aperta-testo">
            <motion.h3 layoutId={`titolo-${c.id}`} className="display aperta-titolo">
              {c.nome}
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18, type: 'spring', stiffness: 300, damping: 26 }}
            >
              <p className="aperta-lungo">{c.lungo}</p>
              <ul className="aperta-voci">
                {c.voci.map((v) => (
                  <li key={v}>{v}</li>
                ))}
              </ul>
              {c.nota && <p className="aperta-nota">{c.nota}</p>}
              <a href="#dove-siamo" className="btn-secondario">
                Vieni a vederli in edicola
              </a>
            </motion.div>
          </div>
        </div>
      )}
    </motion.article>
  )
}

export default function CategoryGrid({ aperta, setAperta }) {
  return (
    <section id="cosa-trovi" className="griglia-sezione" aria-labelledby="titolo-griglia">
      <img src={ASSETS.carta} alt="" aria-hidden="true" className="strappo" draggable="false" />
      <div className="strato-retino strato-retino--tenue" aria-hidden="true" />

      <div className="contenitore">
        <div className="griglia-intro">
          <h2 id="titolo-griglia" className="display griglia-titolo">
            Cosa trovi
            <br />
            in edicola
          </h2>
          <p className="griglia-sotto">
            Cinque reparti in pochi metri quadri. Apri una scheda per vedere cosa c’è sugli
            scaffali.
          </p>
        </div>

        <LayoutGroup>
          <motion.div layout className="griglia">
            {CATEGORIE.map((c) => (
              <Scheda
                key={c.id}
                c={c}
                aperta={aperta === c.id}
                qualcunaAperta={aperta !== null}
                onApri={() => setAperta(c.id)}
                onChiudi={() => setAperta(null)}
              />
            ))}
          </motion.div>
        </LayoutGroup>
      </div>
    </section>
  )
}
