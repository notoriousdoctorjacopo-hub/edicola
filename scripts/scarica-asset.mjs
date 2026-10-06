// Scarica gli asset Higgsfield in public/assets per servirli dal tuo dominio.
// Uso: npm run asset   poi crea .env con VITE_ASSET_BASE=/assets
import { mkdir, writeFile } from 'node:fs/promises'

const CDN = 'https://d2ol7oe51mr4n9.cloudfront.net/user_3Jm6LqKnULj74tXpB3Qe7ofeqIb'
const MEDIA_ID = {
  chiosco: '71ad1b54-06af-42a7-86e8-e5209e073d95',
  giochi: '995c75c5-f03b-48f1-96f8-db4820218bd3',
  riviste: '4ac2068f-c23d-403f-af5a-d6cc29122d99',
  burst: 'f0f0373d-02d4-4267-bfbc-48d3762ba923',
  carta: '1ade27da-326b-48ce-aba9-b12cfb467da7',
  retino: '48283ff3-71fa-496f-915a-c266af8438c9',
}

await mkdir('public/assets', { recursive: true })
for (const [nome, id] of Object.entries(MEDIA_ID)) {
  const res = await fetch(`${CDN}/${id}.webp`)
  if (!res.ok) throw new Error(`${nome}: HTTP ${res.status}`)
  await writeFile(`public/assets/${nome}.webp`, Buffer.from(await res.arrayBuffer()))
  console.log(`✓ ${nome}.webp`)
}
console.log('\nFatto. Ora crea .env con: VITE_ASSET_BASE=/assets')
