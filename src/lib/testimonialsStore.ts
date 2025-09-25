"use client";
// Simple reactive store for testimonials using subscription pattern + localStorage persistence.
// NOTE: This is purely client-side; on refresh user-submitted testimonials remain (in same browser) but not shared across users.

export interface UserTestimonial {
  id: string;
  name: string;
  quote: string;
  createdAt: number;
}

type Listener = (all: UserTestimonial[]) => void;

const STORAGE_KEY = "area9_user_testimonials_v1";

let testimonials: UserTestimonial[] = [];
const listeners: Set<Listener> = new Set();

function load() {
  if (typeof window === "undefined") return;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as UserTestimonial[];
      if (Array.isArray(parsed)) testimonials = parsed.slice(0, 200); // safety cap
    }
  } catch (e) {
    console.warn("Failed to load testimonials", e);
  }
}

function persist() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(testimonials));
  } catch (e) {
    console.warn("Failed to persist testimonials", e);
  }
}

export function getTestimonials() {
  return testimonials.slice();
}

export function subscribe(fn: Listener) {
  listeners.add(fn);
  fn(getTestimonials());
  return () => listeners.delete(fn);
}

function emit() {
  const data = getTestimonials();
  listeners.forEach((l) => l(data));
}

export function addTestimonial(name: string, quote: string) {
  const trimmedName = name.trim();
  const trimmedQuote = quote.trim();
  if (!trimmedName || !trimmedQuote) {
    throw new Error("Nama dan kesan wajib diisi.");
  }
  if (trimmedName.length > 40)
    throw new Error("Nama terlalu panjang (maks 40).");
  if (trimmedQuote.length > 400)
    throw new Error("Kesan terlalu panjang (maks 400 karakter).");
  testimonials.unshift({
    id: crypto.randomUUID(),
    name: trimmedName,
    quote: trimmedQuote,
    createdAt: Date.now(),
  });
  testimonials = testimonials.slice(0, 120); // keep size bounded
  persist();
  emit();
}

// Initialize once on module load (client only)
if (typeof window !== "undefined") {
  if (!testimonials.length) load();
  // Optional: listen to storage events (multi-tab sync)
  window.addEventListener("storage", (e) => {
    if (e.key === STORAGE_KEY) {
      load();
      emit();
    }
  });
}
