import { ASSETS } from './assets.js'

// Le cinque categorie dell'edicola. Colori dal brief, testi in italiano.
export const CATEGORIE = [
  {
    id: 'pokemon',
    nome: 'Pokémon & TCG',
    colore: '#FFCC00',
    testo: '#000000',
    img: ASSETS.pokemonBox,
    alt: 'Confezione di buste del Gioco di Carte Collezionabili Pokémon, edizione 30° anniversario',
    breve: 'Buste, box e carte singole. Apri, scambia, ripeti.',
    lungo:
      'Le espansioni nuove arrivano qui appena escono. Bustine sciolte per tentare la fortuna, box per chi fa sul serio e tutto quello che serve per tenere la collezione al sicuro.',
    voci: [
      'Buste e box delle ultime espansioni',
      'Mazzi pronti per iniziare a giocare',
      'Bustine protettive, raccoglitori e deck box',
    ],
  },
  {
    id: 'giochi',
    nome: 'Giochi & Modellini',
    colore: '#FF3366',
    testo: '#000000',
    img: ASSETS.giochi,
    alt: 'Modellino di auto sportiva rossa in blister',
    breve: 'Macchinine die-cast, giochi e regali dell’ultimo minuto.',
    lungo:
      'Una parete di blister da guardare con il naso appiccicato al vetro. Modellini da collezione, giochi da tavolo e di carte, piccoli regali che salvano qualsiasi compleanno.',
    voci: [
      'Modellini die-cast da collezione',
      'Giochi di carte e da tavolo',
      'Idee regalo per grandi e piccoli',
    ],
  },
  {
    id: 'figurine',
    nome: 'Figurine & Collezioni',
    colore: '#00CCFF',
    testo: '#000000',
    img: ASSETS.figurineCalciatori,
    alt: 'Figurine e bustina Panini Calciatori 2025-2026',
    breve: 'Album, bustine e la caccia all’ultima mancante.',
    lungo:
      'Il rito di sempre: apri la bustina, controlli i numeri, celo, manca. Album e bustine delle collezioni in corso, più le uscite a puntate per chi colleziona tutto l’anno.',
    voci: [
      'Album e bustine delle collezioni in corso',
      'Box di bustine per chi non sa aspettare',
      'Collezioni a uscita periodica',
    ],
  },
  {
    id: 'riviste',
    nome: 'Riviste & Quotidiani',
    colore: '#000000',
    testo: '#FFFFFF',
    img: ASSETS.riviste,
    alt: 'Quotidiano arrotolato appoggiato su una rivista',
    breve: 'Il giornale del mattino e una rivista per ogni passione.',
    lungo:
      'Il quotidiano ti aspetta dall’alba. Accanto, settimanali e mensili, enigmistica per le pause e fumetti per chi non ha mai smesso di leggerli.',
    voci: [
      'Quotidiani nazionali e locali',
      'Settimanali, mensili e riviste di settore',
      'Enigmistica e fumetti',
    ],
  },
  {
    id: 'gratta',
    nome: 'Gratta e Vinci',
    colore: '#00FF66',
    testo: '#000000',
    img: ASSETS.grattaBiglietti,
    alt: 'Due biglietti Gratta e Vinci',
    breve: 'Un biglietto, una moneta, tre secondi di suspense.',
    lungo:
      'Tutti i biglietti disponibili, dal più semplice al più ambizioso. Scegli il tuo, gratta al banco o portalo a casa.',
    voci: ['Tutti i biglietti Gratta e Vinci in vendita'],
    nota: 'Questo gioco nuoce alla salute e può causare dipendenza patologica. Vietato ai minori di 18 anni.',
  },
]

export const MAPPA_URL =
  'https://www.google.com/maps/place/Edicola+Galli+Via+Narni/@42.5486878,12.6189901,734m/data=!3m2!1e3!4b1!4m6!3m5!1s0x132ee3f4be448bb1:0x802d491f87bf14d0!8m2!3d42.5486839!4d12.621565!16s%2Fg%2F11h07sbtv7'

export const MAPPA_EMBED =
  'https://www.google.com/maps?q=42.5486839,12.621565&z=17&hl=it&output=embed'

// Servizi al banco. `logo` sostituisce il pittogramma quando presente.
export const SERVIZI = [
  {
    id: 'pagopa',
    nome: 'Bollettini pagoPA',
    testo: 'Paghi al banco bollettini e avvisi pagoPA, senza code allo sportello.',
    colore: '#FFFFFF',
    logo: ASSETS.pagopa,
    largo: true,
  },
  {
    id: 'bollo',
    nome: 'Bollo auto',
    testo: 'Rinnovi il bollo auto mentre prendi il giornale.',
    colore: '#FFCC00',
    icona: 'auto',
  },
  {
    id: 'ricariche',
    nome: 'Ricariche telefoniche e conto gioco',
    testo: 'Ricarichi il telefono e il conto gioco in un minuto.',
    colore: '#00FF66',
    icona: 'telefono',
    nota: 'Gioco vietato ai minori di 18 anni.',
  },
  {
    id: 'cartolibreria',
    nome: 'Piccola cartolibreria',
    testo: 'Penne, quaderni e l’essenziale per la scuola e l’ufficio.',
    colore: '#00CCFF',
    icona: 'matita',
  },
  {
    id: 'libri',
    nome: 'Libri editoriali',
    testo: 'Libri e collane editoriali da leggere o da regalare.',
    colore: '#FF3366',
    icona: 'libro',
  },
  {
    id: 'libricini',
    nome: 'Libricini didattici per bambini',
    testo: 'Libretti per imparare giocando: lettere, numeri, colori e prime storie.',
    colore: '#FFFFFF',
    icona: 'abc',
    largo: true,
  },
]

// Orari in minuti dalla mezzanotte, ora di Roma. 0 = domenica.
export const ORARI = {
  feriali: [
    [405, 810],
    [960, 1200],
  ],
  domenica: [[405, 780]],
}

export const CONTATTI = {
  telefono: '0744 812566',
  telefonoLink: 'tel:+390744812566',
  email: 'edicola.fratelligalli@hotmail.it',
}
