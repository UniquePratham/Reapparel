// pages/api/listings.js
// Accepts a listing submission, validates it server-side and returns a
// reference. Persistence is intentionally out of scope for the demo build:
// the route proves the contract and the validation, and is the single place
// to add a database later.

const REQUIRED = [
  "title",
  "brand",
  "category",
  "condition",
  "size",
  "fibre",
  "description",
  "seller",
  "email",
];

const CATEGORIES = ["outerwear", "tops", "bottoms", "knitwear", "dresses"];
const CONDITIONS = ["new", "excellent", "good", "fair"];

export default function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const body = req.body || {};

  const missing = REQUIRED.filter((key) => !String(body[key] ?? "").trim());
  if (missing.length) {
    return res.status(400).json({ error: `Missing fields: ${missing.join(", ")}` });
  }

  if (!CATEGORIES.includes(body.category)) {
    return res.status(400).json({ error: "Unknown category" });
  }
  if (!CONDITIONS.includes(body.condition)) {
    return res.status(400).json({ error: "Unknown condition" });
  }
  if (String(body.description).trim().length < 30) {
    return res.status(400).json({ error: "Description must be at least 30 characters" });
  }
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(String(body.email))) {
    return res.status(400).json({ error: "Invalid email address" });
  }

  const price = Number(body.price);
  const originalPrice = Number(body.originalPrice);
  if (!Number.isFinite(price) || price <= 0) {
    return res.status(400).json({ error: "Price must be greater than zero" });
  }
  if (!Number.isFinite(originalPrice) || originalPrice <= 0) {
    return res.status(400).json({ error: "Original price must be greater than zero" });
  }
  if (price >= originalPrice) {
    return res.status(400).json({ error: "Resale price must be below the original retail price" });
  }

  const reference = `RP-${Date.now().toString(36).toUpperCase()}`;

  return res.status(201).json({
    reference,
    message: `Listing received. Your reference is ${reference} — we will email ${body.email} once it is graded.`,
  });
}