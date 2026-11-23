# Reapparel

A marketplace for pre-owned clothing that is graded, measured and honestly
described. Buy less, choose better, keep it in circulation.

**Live:** <https://reapparel.vercel.app>

## What it does

- **Shop** — filter by category, condition, size and price; sort by newest,
  price or biggest saving.
- **Item pages** — condition grade, fibre, colour, measurements, estimated
  CO₂ and water saved, seller and city, plus related items.
- **Sell** — a validated listing form (client and server side) that returns a
  reference number.
- **How it works** — the grading scale and the rules the marketplace holds
  itself to.
- **Feedback** — a working contact form.

## Stack

- Next.js 14 (pages router, static generation for every item page)
- Chakra UI with a custom green brand theme
- Framer Motion
- No external API: the catalogue lives in `data/catalog.js` and every garment
  illustration is generated locally

## Getting started

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Project layout

```
data/catalog.js          the catalogue: 12 garments with full attributes
components/
  Layout.js              header, nav, footer
  ItemCard.js            catalogue card
  SubmitForm.js          validated listing form
  FeedbackForm.js        validated feedback form
pages/
  index.js               landing page
  apparel/index.js       shop with filters and sorting
  apparel/[id].js        item detail (statically generated per item)
  submit.js              sell an item
  feedback.js            feedback
  faq.js                 how it works
  api/listings.js        POST /api/listings — validates and returns a reference
  api/feedback.js        POST /api/feedback
scripts/
  generate-images.mjs    regenerates the garment illustrations
public/items/*.svg       generated illustrations
```

## Regenerating the illustrations

```bash
node scripts/generate-images.mjs
```

## API

`POST /api/listings` accepts a listing and validates it server-side:

```json
{
  "title": "Wool Overcoat",
  "brand": "Harris Tweed",
  "category": "outerwear",
  "condition": "excellent",
  "size": "M",
  "fibre": "100% wool",
  "description": "Single-breasted overcoat in heavy charcoal tweed...",
  "seller": "Aparna R.",
  "email": "aparna@example.com",
  "price": 84,
  "originalPrice": 420
}
```

Returns `201` with a reference, or `400` with the specific fields that failed.

## License

MIT — see [LICENSE](../LICENSE).