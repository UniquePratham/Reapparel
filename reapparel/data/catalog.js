// data/catalog.js
// Seed catalogue for Reapparel. Each item is a real second-hand garment with
// the fields the UI needs: condition grade, size, fibre, price and impact.
// Images are generated locally (see scripts/generate-images.mjs) so the site
// has no external image dependency.

export const CATEGORIES = [
  { id: "outerwear", label: "Outerwear" },
  { id: "tops", label: "Tops" },
  { id: "bottoms", label: "Bottoms" },
  { id: "knitwear", label: "Knitwear" },
  { id: "dresses", label: "Dresses" },
];

export const CONDITIONS = [
  { id: "new", label: "New with tags", grade: "A+" },
  { id: "excellent", label: "Excellent", grade: "A" },
  { id: "good", label: "Good", grade: "B" },
  { id: "fair", label: "Fair", grade: "C" },
];

export const SIZES = ["XS", "S", "M", "L", "XL", "XXL"];

export const CATALOG = [
  {
    id: "rp-001",
    title: "Wool Overcoat",
    brand: "Harris Tweed",
    category: "outerwear",
    condition: "excellent",
    size: "M",
    colour: "Charcoal",
    fibre: "100% wool",
    price: 84,
    originalPrice: 420,
    seller: "Aparna R.",
    city: "Kolkata",
    description:
      "Single-breasted overcoat in a heavy charcoal tweed. Fully lined, horn buttons, two welt pockets. Worn one winter, no marks or repairs.",
    measurements: { chest: 108, length: 96, sleeve: 64 },
    co2Saved: 21.4,
    waterSaved: 5400,
    listedAt: "2026-11-12",
  },
  {
    id: "rp-002",
    title: "Selvedge Denim Jacket",
    brand: "Levi's",
    category: "outerwear",
    condition: "good",
    size: "L",
    colour: "Indigo",
    fibre: "100% cotton",
    price: 46,
    originalPrice: 180,
    seller: "Rohan M.",
    city: "Bengaluru",
    description:
      "Type III trucker in raw selvedge denim, faded honestly at the elbows and cuffs. All buttons intact, no rips.",
    measurements: { chest: 114, length: 62, sleeve: 61 },
    co2Saved: 12.8,
    waterSaved: 3200,
    listedAt: "2026-11-09",
  },
  {
    id: "rp-003",
    title: "Merino Crew Knit",
    brand: "Uniqlo",
    category: "knitwear",
    condition: "excellent",
    size: "S",
    colour: "Oatmeal",
    fibre: "100% merino wool",
    price: 28,
    originalPrice: 79,
    seller: "Ishita D.",
    city: "Mumbai",
    description:
      "Fine-gauge merino crew neck in oatmeal. No pilling, no moth damage. Dry-cleaned before listing.",
    measurements: { chest: 96, length: 64, sleeve: 58 },
    co2Saved: 8.2,
    waterSaved: 1900,
    listedAt: "2026-11-14",
  },
  {
    id: "rp-004",
    title: "Pleated Wool Trousers",
    brand: "COS",
    category: "bottoms",
    condition: "good",
    size: "M",
    colour: "Navy",
    fibre: "98% wool, 2% elastane",
    price: 34,
    originalPrice: 135,
    seller: "Meera K.",
    city: "Delhi",
    description:
      "High-rise pleated trousers with a tapered leg. Hemmed to 30in inseam; original hem included.",
    measurements: { waist: 78, inseam: 76, rise: 30 },
    co2Saved: 9.6,
    waterSaved: 2400,
    listedAt: "2026-11-07",
  },
  {
    id: "rp-005",
    title: "Linen Shirt",
    brand: "Muji",
    category: "tops",
    condition: "excellent",
    size: "M",
    colour: "White",
    fibre: "100% linen",
    price: 22,
    originalPrice: 65,
    seller: "Kabir S.",
    city: "Pune",
    description:
      "Relaxed-fit linen shirt, softened by a few washes. Slight natural creasing, no stains.",
    measurements: { chest: 106, length: 72, sleeve: 60 },
    co2Saved: 5.4,
    waterSaved: 1500,
    listedAt: "2026-11-15",
  },
  {
    id: "rp-006",
    title: "Silk Slip Dress",
    brand: "Zara",
    category: "dresses",
    condition: "good",
    size: "S",
    colour: "Sage",
    fibre: "100% silk",
    price: 38,
    originalPrice: 120,
    seller: "Nandini P.",
    city: "Chennai",
    description:
      "Bias-cut silk slip in sage green with adjustable straps. Worn twice, one tiny pull at the hem.",
    measurements: { bust: 88, waist: 72, length: 104 },
    co2Saved: 7.1,
    waterSaved: 2100,
    listedAt: "2026-11-11",
  },
  {
    id: "rp-007",
    title: "Corduroy Overshirt",
    brand: "Carhartt WIP",
    category: "outerwear",
    condition: "good",
    size: "L",
    colour: "Rust",
    fibre: "100% cotton corduroy",
    price: 52,
    originalPrice: 190,
    seller: "Aditya V.",
    city: "Hyderabad",
    description:
      "Heavy 8-wale corduroy overshirt in rust. Two chest pockets, brass snaps all working.",
    measurements: { chest: 118, length: 74, sleeve: 63 },
    co2Saved: 13.5,
    waterSaved: 3400,
    listedAt: "2026-11-06",
  },
  {
    id: "rp-008",
    title: "Cashmere Scarf",
    brand: "Johnstons of Elgin",
    category: "knitwear",
    condition: "new",
    size: "One size",
    colour: "Camel",
    fibre: "100% cashmere",
    price: 45,
    originalPrice: 165,
    seller: "Priya N.",
    city: "Kolkata",
    description:
      "Unworn cashmere scarf, still with tags. Fringed ends, 180 x 30 cm.",
    measurements: { length: 180, width: 30 },
    co2Saved: 6.8,
    waterSaved: 1200,
    listedAt: "2026-11-16",
  },
  {
    id: "rp-009",
    title: "Straight-Leg Jeans",
    brand: "Nudie Jeans",
    category: "bottoms",
    condition: "good",
    size: "M",
    colour: "Mid blue",
    fibre: "100% organic cotton",
    price: 40,
    originalPrice: 150,
    seller: "Tanvi B.",
    city: "Bengaluru",
    description:
      "Straight-leg jeans in mid-blue organic denim. Free repairs for life from Nudie; one patch at the knee.",
    measurements: { waist: 80, inseam: 78, rise: 28 },
    co2Saved: 11.2,
    waterSaved: 2900,
    listedAt: "2026-11-10",
  },
  {
    id: "rp-010",
    title: "Cotton Poplin Shirt",
    brand: "Arrow",
    category: "tops",
    condition: "fair",
    size: "XL",
    colour: "Sky",
    fibre: "100% cotton",
    price: 12,
    originalPrice: 45,
    seller: "Suresh G.",
    city: "Ahmedabad",
    description:
      "Classic poplin shirt in sky blue. Collar shows light wear; priced accordingly.",
    measurements: { chest: 122, length: 78, sleeve: 64 },
    co2Saved: 4.1,
    waterSaved: 1100,
    listedAt: "2026-11-05",
  },
  {
    id: "rp-011",
    title: "Quilted Gilet",
    brand: "Barbour",
    category: "outerwear",
    condition: "excellent",
    size: "M",
    colour: "Olive",
    fibre: "Polyamide shell, down fill",
    price: 68,
    originalPrice: 240,
    seller: "Farhan A.",
    city: "Delhi",
    description:
      "Lightweight quilted gilet in olive with a corduroy collar. No down leakage.",
    measurements: { chest: 110, length: 68 },
    co2Saved: 15.3,
    waterSaved: 2800,
    listedAt: "2026-11-13",
  },
  {
    id: "rp-012",
    title: "Ribbed Midi Dress",
    brand: "H&M",
    category: "dresses",
    condition: "good",
    size: "M",
    colour: "Black",
    fibre: "95% cotton, 5% elastane",
    price: 18,
    originalPrice: 55,
    seller: "Sneha J.",
    city: "Mumbai",
    description:
      "Ribbed jersey midi dress in black with a side slit. Stretches comfortably, no fading.",
    measurements: { bust: 92, waist: 76, length: 118 },
    co2Saved: 4.8,
    waterSaved: 1300,
    listedAt: "2026-11-08",
  },
];

export function getItem(id) {
  return CATALOG.find((item) => item.id === id) || null;
}

export function conditionLabel(id) {
  return CONDITIONS.find((c) => c.id === id)?.label ?? id;
}

export function conditionGrade(id) {
  return CONDITIONS.find((c) => c.id === id)?.grade ?? "—";
}

export function categoryLabel(id) {
  return CATEGORIES.find((c) => c.id === id)?.label ?? id;
}