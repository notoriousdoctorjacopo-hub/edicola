import { motion } from 'framer-motion'
import { SERVIZI } from '../data.js'

// Pittogrammi disegnati a mano: tratto nero spesso, niente riempimenti sfumati
function Pittogramma({ tipo }) {
  const comune = {
    width: 64,
    height: 64,
    viewBox: '0 0 64 64',
    fill: 'none',
    stroke: '#000',
    strokeWidth: 5,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  }
  switch (tipo) {
    case 'auto':
      return (
        <svg {...comune}>
          <path d="M8 40v-9l6-11h30l8 11h4v9" fill="#fff" />
          <path d="M8 40h48" />
          <circle cx="19" cy="42" r="6" fill="#fff" />
          <circle cx="45" cy="42" r="6" fill="#fff" />
          <path d="M18 21l-3 9h29l-6-9" />
        </svg>
      )
    case 'telefono':
      return (
        <svg {...comune}>
          <rect x="18" y="6" width="28" height="52" rx="6" fill="#fff" />
          <path d="M28 49h8" />
          <path d="M33 18l-5 10h8l-5 10" strokeWidth="4" />
        </svg>
      )
    case 'matita':
      return (
        <svg {...comune}>
          <path d="M14 50l4-14 28-28 10 10-28 28z" fill="#fff" />
          <path d="M40 14l10 10" />
          <path d="M18 36l10 10" />
          <path d="M14 50l6-2" />
        </svg>
      )
    case 'libro':
      return (
        <svg {...comune}>
          <path d="M32 16c-6-5-15-6-24-5v36c9-1 18 0 24 5V16z" fill="#fff" />
          <path d="M32 16c6-5 15-6 24-5v36c-9-1-18 0-24 5" fill="#fff" />
        </svg>
      )
    case 'abc':
      return (
        <svg {...comune}>
          <rect x="6" y="18" width="24" height="24" rx="3" fill="#fff" transform="rotate(-8 18 30)" />
          <rect x="32" y="22" width="24" height="24" rx="3" fill="#fff" transform="rotate(7 44 34)" />
          <g fill="#000" stroke="none" fontFamily="'Bowlby One', Impact, sans-serif" fontSize="17" textAnchor="middle">
            <text x="18" y="37" transform="rotate(-8 18 30)">A</text>
            <text x="44" y="41" transform="rotate(7 44 34)">B</text>
          </g>
        </svg>
      )
    default:
      return null
  }
}

export default function Servizi() {
  return (
    <section id="servizi" className="servizi-sezione" aria-labelledby="titolo-servizi">
      <div className="strato-retino strato-retino--chiaro" aria-hidden="true" />

      <div className="contenitore">
        <div className="servizi-intro">
          <h2 id="titolo-servizi" className="display servizi-titolo">
            Altro che
            <br />
            giornali.
          </h2>
          <p className="servizi-sotto">
            Pagamenti, ricariche, libri e una piccola cartolibreria. Le commissioni di tutti i
            giorni, sbrigate al banco.
          </p>
        </div>

        <ul className="servizi-griglia">
          {SERVIZI.map((s) => (
            <motion.li
              key={s.id}
              className={`servizio ${s.largo ? 'servizio--largo' : ''}`}
              style={{ backgroundColor: s.colore, boxShadow: '8px 8px 0 0 #fff' }}
              whileHover={{ x: -4, y: -4, rotate: s.largo ? -0.6 : -1.2, boxShadow: '12px 12px 0 0 #fff' }}
              transition={{ type: 'spring', stiffness: 520, damping: 20 }}
            >
              <div className="servizio-segno">
                {s.logo ? (
                  <img src={s.logo} alt="pagoPA" className="servizio-logo" draggable="false" />
                ) : (
                  <Pittogramma tipo={s.icona} />
                )}
              </div>
              <div>
                <h3 className="display servizio-nome">{s.nome}</h3>
                <p className="servizio-testo">{s.testo}</p>
                {s.nota && <p className="servizio-nota">{s.nota}</p>}
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
