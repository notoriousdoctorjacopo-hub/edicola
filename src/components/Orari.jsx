import { useEffect, useState } from 'react'
import { ORARI } from '../data.js'

const GIORNI = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 }
const fmt = (m) => `${Math.floor(m / 60)}:${String(m % 60).padStart(2, '0')}`

// Stato attuale calcolato sull'ora di Roma, ovunque si trovi chi visita il sito
function statoAdesso(data = new Date()) {
  const parti = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Europe/Rome',
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(data)
  const v = Object.fromEntries(parti.map((p) => [p.type, p.value]))
  const giorno = GIORNI[v.weekday]
  const minuti = Number(v.hour) * 60 + Number(v.minute)
  const fasce = giorno === 0 ? ORARI.domenica : ORARI.feriali

  const inCorso = fasce.find(([a, c]) => minuti >= a && minuti < c)
  if (inCorso) return { aperto: true, testo: `Aperto ora · chiude alle ${fmt(inCorso[1])}` }

  const prossima = fasce.find(([a]) => a > minuti)
  if (prossima) return { aperto: false, testo: `Chiuso ora · riapre alle ${fmt(prossima[0])}` }
  return { aperto: false, testo: 'Chiuso ora · riapre domani alle 6:45' }
}

export default function Orari() {
  const [stato, setStato] = useState(() => statoAdesso())

  useEffect(() => {
    const id = setInterval(() => setStato(statoAdesso()), 30_000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="orari">
      <div className="orari-testa">
        <h3 className="display orari-titolo">Orari</h3>
        <p className={`orari-stato ${stato.aperto ? 'is-aperto' : 'is-chiuso'}`} aria-live="polite">
          <span className="orari-pallino" aria-hidden="true" />
          {stato.testo}
        </p>
      </div>
      <dl className="orari-lista">
        <div>
          <dt>Lunedì – Sabato</dt>
          <dd>6:45 – 13:30 · 16:00 – 20:00</dd>
        </div>
        <div>
          <dt>Domenica</dt>
          <dd>6:45 – 13:00</dd>
        </div>
      </dl>
    </div>
  )
}
