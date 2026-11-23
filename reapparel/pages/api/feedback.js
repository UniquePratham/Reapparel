// pages/api/feedback.js
const REQUIRED = ["name", "email", "message"];

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
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(String(body.email))) {
    return res.status(400).json({ error: "Invalid email address" });
  }
  if (String(body.message).trim().length < 10) {
    return res.status(400).json({ error: "Message must be at least 10 characters" });
  }

  return res.status(201).json({ message: "Thanks — we read every message." });
}