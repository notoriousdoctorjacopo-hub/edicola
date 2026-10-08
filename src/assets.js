// Asset generati con Higgsfield (z_image), scontornati con il background remover
// di Higgsfield, rifilati e ottimizzati in WebP, ospitati sul CDN Higgsfield.
// Per servirli dal tuo dominio: `npm run asset`, poi .env con VITE_ASSET_BASE=/assets
//
// Le foto e i loghi forniti dall'edicola stanno invece in public/assets.

const CDN = 'https://d2ol7oe51mr4n9.cloudfront.net/user_3Jm6LqKnULj74tXpB3Qe7ofeqIb'
const BASE = import.meta.env.VITE_ASSET_BASE

// nome file locale -> media ID Higgsfield
export const MEDIA_ID = {
  chiosco: '3365e3be-895c-47bd-abcb-a11a228b6dcb',
  giochi: '995c75c5-f03b-48f1-96f8-db4820218bd3',
  riviste: '4ac2068f-c23d-403f-af5a-d6cc29122d99',
  burst: 'f0f0373d-02d4-4267-bfbc-48d3762ba923',
  carta: '1ade27da-326b-48ce-aba9-b12cfb467da7',
  retino: '48283ff3-71fa-496f-915a-c266af8438c9',
}

const higgsfield = (nome) =>
  BASE ? `${BASE}/${nome}.webp` : `${CDN}/${MEDIA_ID[nome]}.webp`

export const ASSETS = {
  ...Object.fromEntries(Object.keys(MEDIA_ID).map((n) => [n, higgsfield(n)])),
  // Immagini fornite dall'edicola (public/assets)
  pokemonBox: '/assets/pokemon-box.webp',
  grattaBiglietti: '/assets/gratta-biglietti.webp',
  figurineCalciatori: '/assets/figurine-calciatori.webp',
  pagopa: '/assets/pagopa.webp',
  foto: '/assets/adriano-roberto.webp',
}
