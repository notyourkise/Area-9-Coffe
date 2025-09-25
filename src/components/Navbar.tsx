"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

// Nav links: clarified duplicate meaning (About & Tentang) into distinct Indonesian labels
// #about  -> section "Tentang Kami" (company/story)
// #tentang -> features section, renamed in nav as "Keunggulan" for clarity
const navLinks = [
  { href: "#menu", label: "Menu" },
  { href: "#about", label: "Tentang Kami" },
  { href: "#tentang", label: "Keunggulan" },
  { href: "#testimoni", label: "Testimoni" },
  { href: "#lokasi", label: "Lokasi" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const toggleBtnRef = useRef<HTMLButtonElement | null>(null);

  // Close helper (memo) so we can reuse in events
  const closeMenu = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ESC key to close mobile menu
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, closeMenu]);

  // Outside click / touch close (mobile menu)
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent | TouchEvent) => {
      const panel = panelRef.current;
      const toggle = toggleBtnRef.current;
      if (!panel) return;
      const target = e.target as Node;
      if (panel.contains(target)) return; // click inside panel
      if (toggle && toggle.contains(target)) return; // on toggle button
      closeMenu();
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler, { passive: true });
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [open, closeMenu]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition backdrop-blur-md ${
        scrolled
          ? "bg-[#0f0d0b]/88 border-b border-white/10 shadow-[0_4px_18px_-6px_rgba(0,0,0,0.6)]"
          : "bg-transparent"
      }`}
    >
      <nav className="container-responsive flex items-center justify-between h-20 md:h-[5.25rem]">
        <Link
          href="#"
          className="group flex items-center gap-3 font-semibold tracking-tight text-xl md:text-2xl"
        >
          <Image
            src="/logo.png"
            alt="Logo Area9 Coffee"
            width={52}
            height={52}
            className="block w-10 h-10 md:w-[52px] md:h-[52px] object-contain select-none pointer-events-none [image-rendering:-webkit-optimize-contrast]"
            title="logo.png"
            priority
          />
          <span className="text-gradient-coffee">Area9 Coffee</span>
        </Link>
        <div className="hidden md:flex items-center gap-10 text-[0.95rem] md:text-[1.05rem] font-medium">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative text-neutral-300 hover:text-[#c48952] transition-colors duration-300"
            >
              <span>{l.label}</span>
              <span className="pointer-events-none absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-transparent via-[#c48952] to-transparent transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
        </div>
        {/* Removed ordering CTA (Pesan Sekarang) for profile-only site */}
        <button
          type="button"
          aria-label="Toggle Menu"
          aria-expanded={open}
          className="md:hidden text-neutral-200 hover:text-[#c48952] transition-colors"
          onClick={() => setOpen((o) => !o)}
          ref={toggleBtnRef}
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {open ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <>
            <motion.button
              key="nav-overlay"
              type="button"
              aria-label="Tutup menu navigasi"
              className="fixed inset-0 z-30 md:hidden bg-black/70"
              onClick={closeMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.55 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            />
            <motion.div
              key="nav-panel"
              initial={{ y: -32, opacity: 0, filter: "blur(6px)" }}
              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              exit={{ y: -20, opacity: 0, filter: "blur(6px)" }}
              transition={{ duration: 0.38, ease: [0.32, 0.72, 0, 1] }}
              className="md:hidden fixed top-20 inset-x-0 z-40 border-t border-white/10 bg-[#181310]/95 backdrop-blur-md shadow-[0_18px_38px_-10px_rgba(0,0,0,0.55)] origin-top"
              ref={panelRef}
            >
              <motion.ul
                initial="hidden"
                animate="show"
                exit="hidden"
                variants={{
                  hidden: {
                    transition: {
                      staggerChildren: 0.015,
                      staggerDirection: -1,
                    },
                  },
                  show: {
                    transition: { delayChildren: 0.05, staggerChildren: 0.05 },
                  },
                }}
                className="container-responsive py-4 flex flex-col"
              >
                {navLinks.map((l) => (
                  <motion.li
                    key={l.href}
                    variants={{
                      hidden: { opacity: 0, x: -8 },
                      show: { opacity: 1, x: 0 },
                    }}
                  >
                    <a
                      href={l.href}
                      onClick={closeMenu}
                      className="block px-1 py-2 text-neutral-300 text-[1.05rem] font-medium hover:text-[#c48952] transition-colors rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c48952]/40"
                    >
                      {l.label}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
