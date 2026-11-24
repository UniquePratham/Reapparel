// lib/wishlist.js
// A tiny localStorage-backed wishlist. No account needed, survives reloads.

const KEY = "reapparel:wishlist";

export function readWishlist() {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function writeWishlist(ids) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(KEY, JSON.stringify(ids));
    window.dispatchEvent(new CustomEvent("reapparel:wishlist", { detail: ids }));
  } catch {
    /* storage may be full or blocked; the UI still works for this session */
  }
}

export function toggleWishlist(id) {
  const current = readWishlist();
  const next = current.includes(id)
    ? current.filter((x) => x !== id)
    : [...current, id];
  writeWishlist(next);
  return next;
}

export function isWishlisted(id) {
  return readWishlist().includes(id);
}