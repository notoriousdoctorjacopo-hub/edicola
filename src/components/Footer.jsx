import { CONTATTI } from '../data.js'

// Parole del nastro: ogni parola prende il colore della sua categoria
const PAROLE = [
  { t: 'Edicola', c: '#FFFFFF' },
  { t: 'Giochi', c: '#FF3366' },
  { t: 'Pokémon', c: '#FFCC00' },
  { t: 'Figurine', c: '#00CCFF' },
  { t: 'Riviste', c: '#00FF66' },
]

function Nastro() {
  return (
    <span className="nastro-gruppo">
      {PAROLE.map((p) => (
        <span key={p.t} className="nastro-parola">
          <span style={{ color: p.c }}>{p.t}</span>
          <span className="nastro-punto">·</span>
        </span>
      ))}
    </span>
  )
}

export default function Footer() {
  return (
    <footer className="piede">
      <div className="nastro" aria-label="Edicola, giochi, Pokémon, figurine, riviste">
        <div className="nastro-binario" aria-hidden="true">
          <Nastro />
          <Nastro />
          <Nastro />
          <Nastro />
        </div>
      </div>

      <div className="contenitore piede-corpo">
        <div className="contatti">
          <h2 className="display contatti-titolo">Chiamaci o scrivici</h2>
          <div className="contatti-lista">
            <a href={CONTATTI.telefonoLink} className="contatto contatto--tel">
              <span className="contatto-etichetta">Telefono</span>
              <span className="display contatto-valore">{CONTATTI.telefono}</span>
            </a>
            <a href={`mailto:${CONTATTI.email}`} className="contatto contatto--mail">
              <span className="contatto-etichetta">Email</span>
              <span className="contatto-valore contatto-valore--mail">{CONTATTI.email}</span>
            </a>
          </div>
        </div>

        <p className="display piede-marchio">Edicola Galli</p>
        <div className="piede-riga">
          <p>© 2026 Edicola Galli Via Narni</p>
          <nav aria-label="Piè di pagina" className="piede-link">
            <a href="#cosa-trovi">Cosa trovi</a>
            <a href="#servizi">Servizi</a>
            <a href="#dove-siamo">Dove siamo</a>
            <a href="#">Torna su</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
