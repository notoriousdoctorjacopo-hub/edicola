# Edicola Galli · Il tuo mondo in un chiosco

Sito marketing animato per Edicola Galli, Via Narni.
React + Vite, Tailwind, Framer Motion. Desktop-first (1440px), responsive fino a mobile.

## Avvio

```bash
npm install
npm run dev      # sviluppo su http://localhost:5173
npm run build    # build di produzione in dist/
npm run preview  # anteprima della build
```

## Sezioni

1. **Hero interattivo**: chiosco al centro che si inclina verso il cursore, cinque badge
   attorno. Al passaggio sul badge lo sfondo taglia di netto sul colore della categoria;
   al click si apre la scheda corrispondente nella griglia. In basso a sinistra, una piccola
   polaroid di Adriano e Roberto porta alla sezione "Chi siamo".
2. **Griglia categorie**: schede con espansione sul posto (`layout` + `layoutId` di
   Framer Motion). Chiusura con il pulsante (X) o con Esc.
3. **Servizi**: bollettini pagoPA, bollo auto, ricariche telefoniche e conto gioco,
   piccola cartolibreria, libri editoriali, libricini didattici per bambini.
4. **Chi siamo**: la foto di Adriano e Roberto accanto a una locandina da edicola.
5. **Dove siamo**: titolo, targa "Via Narni", orari con stato "Aperto ora / Chiuso ora"
   calcolato sull'ora di Roma, pulsante PORTAMI QUI, mappa incorniciata.
6. **Footer**: nastro a scorrimento ruotato di -2°, contatti (telefono e email cliccabili),
   marchio, copyright. I contatti si cambiano in `CONTATTI` dentro `src/data.js`.

## Orari

Lunedì–sabato 6:45–13:30 e 16:00–20:00, domenica 6:45–13:00.
Si cambiano in `ORARI` dentro `src/data.js` (minuti dalla mezzanotte). Il badge
"Aperto ora" non conosce le festività né le chiusure straordinarie.

## Asset

**Generati con Higgsfield** (z_image, scontornati con il background remover di Higgsfield,
rifilati e convertiti in WebP, ospitati sul CDN Higgsfield):

| File | Media ID Higgsfield |
|---|---|
| chiosco | 71ad1b54-06af-42a7-86e8-e5209e073d95 |
| giochi (blister) | 995c75c5-f03b-48f1-96f8-db4820218bd3 |
| riviste | 4ac2068f-c23d-403f-af5a-d6cc29122d99 |
| burst (esplosione fumetto) | f0f0373d-02d4-4267-bfbc-48d3762ba923 |
| carta (bordo strappato) | 1ade27da-326b-48ce-aba9-b12cfb467da7 |
| retino (halftone) | 48283ff3-71fa-496f-915a-c266af8438c9 |

Per servirli dal tuo dominio (consigliato in produzione):

```bash
npm run asset                         # scarica tutto in public/assets
echo "VITE_ASSET_BASE=/assets" > .env
npm run build
```

**Forniti dall'edicola** (già in `public/assets`, scontornati e ottimizzati):
`pokemon-box.webp`, `gratta-biglietti.webp`, `figurine-calciatori.webp`, `pagopa.webp`, `adriano-roberto.webp`.

## Dove modificare

- Testi e colori di categorie e servizi, orari: `src/data.js`
- Posizione dei badge nell'hero: `POSIZIONI` in `src/components/Hero.jsx`
- Stili, colori base, bordi e ombre: `src/index.css`

## Note

- Le animazioni rispettano l'impostazione di sistema "riduci movimento".
- La scheda Gratta e Vinci include l'avviso obbligatorio sul gioco vietato ai minori.
