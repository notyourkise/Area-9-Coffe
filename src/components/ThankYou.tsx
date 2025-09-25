"use client";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "./motion";

export function ThankYou() {
  return (
    <section id="thanks" className="relative py-28 fade-top">
      {/* Subtle radial glow background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[780px] h-[780px] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(196,137,82,0.18),transparent_70%)] blur-3xl opacity-70" />
        <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.35)_0px,rgba(255,255,255,0.35)_1px,transparent_1px,transparent_6px)]" />
      </div>
      <motion.div
        className="container-responsive relative"
        variants={staggerContainer(0.12)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
      >
        <motion.div
          variants={fadeInUp}
          className="max-w-3xl mx-auto text-center flex flex-col items-center"
        >
          <span className="badge mb-6">Terima Kasih</span>
          <h2 className="mb-6 leading-tight">
            Terima Kasih Sudah
            <br className="hidden sm:block" /> Menyempatkan Hadir & Menikmati
            Kopi Kami
          </h2>
          <p className="text-neutral-300 leading-relaxed max-w-2xl mx-auto mb-10 text-sm sm:text-base">
            Kami terus meracik dan belajar agar setiap cangkir punya karakter
            jujur, hangat, dan meninggalkan kesan. Kehadiranmu—untuk bekerja,
            berdiskusi, atau sekadar rehat—membuat ruang ini hidup. Sampai jumpa
            lagi di kunjungan berikutnya.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs uppercase tracking-wide text-neutral-400">
            {[
              "Quality Roast",
              "Handcrafted",
              "Cozy Space",
              "Local Support",
            ].map((t) => (
              <motion.span
                key={t}
                variants={fadeInUp}
                whileHover={{ y: -4, color: "#c48952" }}
                className="px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_4px_18px_-8px_rgba(0,0,0,0.5)]"
              >
                {t}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
