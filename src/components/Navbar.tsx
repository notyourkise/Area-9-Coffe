"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "#menu", label: "Menu" },
  { href: "#tentang", label: "Tentang" },
  { href: "#testimoni", label: "Testimoni" },
  { href: "#lokasi", label: "Lokasi" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#pesan"
            className="btn-primary relative overflow-hidden h-11 px-6 text-[0.95rem] font-semibold tracking-wide"
          >
            <span className="absolute inset-0 opacity-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.45),transparent_60%)] transition-opacity duration-500 hover:opacity-100" />
            Pesan Sekarang
          </a>
        </div>
        <button
          aria-label="Toggle Menu"
          className="md:hidden text-neutral-200 hover:text-[#c48952] transition-colors"
          onClick={() => setOpen((o) => !o)}
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
      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#181310]/95 backdrop-blur-sm">
          <div className="container-responsive py-4 flex flex-col gap-3">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-neutral-300 text-[1.05rem] font-medium hover:text-[#c48952] transition-colors inline-flex items-center gap-2"
              >
                {l.label}
                <span className="pointer-events-none h-[2px] w-0 bg-gradient-to-r from-transparent via-[#c48952] to-transparent transition-all duration-500 group-hover:w-full" />
              </a>
            ))}
            <a
              href="#pesan"
              className="btn-primary w-fit mt-1 h-11 px-6 text-[0.95rem] font-semibold tracking-wide"
            >
              Pesan Sekarang
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
