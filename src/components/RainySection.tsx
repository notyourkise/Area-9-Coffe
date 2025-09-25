'use client';
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "./motion";

// Section menampilkan animasi video (AnimasiHangat.mp4) full screen edge-to-edge.
// Sekarang hanya satu layer video object-cover (tanpa letterbox kiri-kanan). Akan sedikit crop jika aspect ratio berbeda.
export function RainySection() {
  return (
    <section
      id="rainy"
      // h-screen: tinggi penuh viewport; *[100svh]* jika ingin lebih akurat di mobile modern bisa ditambahkan via custom class.
      className="relative w-full h-screen flex items-center justify-center overflow-hidden fade-top"
    >
      {/* Single cover video background */}
      <div className="absolute inset-0 -z-10 bg-black">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        >
          <source src="/AnimasiHangat.mp4" type="video/mp4" />
        </video>
        {/* Overlays kontras */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/55 to-black/85" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_60%,transparent,rgba(0,0,0,0.65))]" />
      </div>

      {/* Konten teks */}
      <motion.div
        variants={staggerContainer(0.12)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
        className="relative px-6 sm:px-8 text-center max-w-4xl mx-auto"
      >
        <motion.span variants={fadeInUp} className="badge mb-6 inline-block">
          Senja & Aroma
        </motion.span>
        <motion.h2
          variants={fadeInUp}
          className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight mb-6"
        >
          Detik Pelan Sebelum Malam.
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="text-neutral-300/90 leading-relaxed max-w-2xl mx-auto text-sm sm:text-base mb-8"
        >
          Di meja ini waktu serasa dilembutkan: uap hangat naik, lampu temaram
          menggambar siluet, dan obrolan jadi lebih jujur. Nikmati jedaâ€”biar
          pikiran mendingin, rasa meresap, dan senja selesai tanpa tergesa.
        </motion.p>
      </motion.div>
    </section>
  );
}
