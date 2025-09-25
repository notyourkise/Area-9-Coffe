"use client";
import { motion } from "framer-motion";

// Divider transisi antara Hero dan Menu: bayangan hitam lembut + sedikit depth
export function DividerHeroMenu() {
  return (
    <div
      aria-hidden
      className="relative -mt-10 mb-0 h-16 overflow-hidden select-none"
    >
      {/* Lapisan gradient utama */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0f0d0b]/85 to-[#0f0d0b]" />
      {/* Soft top shadow yang menekan konten sebelumnya (lebih halus) */}
      <div className="absolute top-0 inset-x-0 h-8 bg-[radial-gradient(circle_at_50%_0%,rgba(0,0,0,0.38),rgba(0,0,0,0)_68%)] opacity-60" />
      {/* Subtle noise/texture supaya tidak flat */}
      <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.15)_0px,rgba(255,255,255,0.15)_1px,transparent_1px,transparent_6px)]" />
      {/* Decorative soft vignette ring */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 0.35, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="absolute inset-x-0 top-1 h-12 bg-[radial-gradient(circle_at_50%_0%,rgba(0,0,0,0.5),transparent_75%)]"
      />
    </div>
  );
}
