"use client";
import { useState } from "react";

interface MapEmbedProps {
  src?: string; // fallback embed src (pb param)
  title?: string;
}

// Lightweight interactive map wrapper: click-to-activate + fullscreen modal
export function MapEmbed({
  src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15951.058074716338!2d116.836!3d-1.1905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df1472f905e5e4b%3A0x1234567890abcdef!2sArea9%20Coffee!5e0!3m2!1sid!2sid!4v0000000000001",
  title = "Area9 Coffee Map",
}: MapEmbedProps) {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <div className="group relative w-full h-48 rounded-md overflow-hidden ring-1 ring-neutral-800/60 bg-neutral-900/40">
      <iframe
        title={title}
        className={`absolute inset-0 w-full h-full transition-filter duration-300 ${
          active ? "grayscale-0" : "grayscale"
        }
        `}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        src={src}
        style={{ pointerEvents: active ? "auto" : "none" }}
      />
      {!active && (
        <button
          type="button"
          onClick={() => setActive(true)}
          className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-[#171310]/60 backdrop-blur-[2px] text-neutral-200 text-xs tracking-wide"
        >
          <span className="px-3 py-1 rounded-full bg-[#c48952]/20 text-[#c48952] font-medium">
            PETA NON-AKTIF
          </span>
          <span className="text-[11px]">Klik untuk interaksi & zoom</span>
        </button>
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#171310] via-transparent opacity-40" />
      <div className="absolute bottom-1 right-1 flex gap-1">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="text-[10px] px-2 py-1 rounded bg-black/50 hover:bg-black/70 text-neutral-200 border border-white/10 transition"
        >
          Perbesar
        </button>
        {active && (
          <button
            type="button"
            onClick={() => setActive(false)}
            className="text-[10px] px-2 py-1 rounded bg-black/50 hover:bg-black/70 text-neutral-300 border border-white/10 transition"
          >
            Nonaktif
          </button>
        )}
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-5xl h-[70vh] rounded-lg overflow-hidden ring-1 ring-neutral-700 bg-neutral-900">
            <iframe
              title={title + " Fullscreen"}
              className="absolute inset-0 w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              src={src}
            />
            <div className="absolute top-2 right-2 flex gap-2">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="text-xs px-3 py-1 rounded bg-black/60 hover:bg-black/80 text-neutral-200 border border-white/10 transition"
              >
                Tutup
              </button>
              <a
                href="https://maps.app.goo.gl/R945EpuKHmfQx2jR9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs px-3 py-1 rounded bg-[#c48952]/80 hover:bg-[#c48952] text-white transition font-medium"
              >
                Buka di Maps
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
