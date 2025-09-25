"use client";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "./motion";

export function About() {
  return (
    <section
      id="about"
      className="section-padding relative overflow-hidden fade-top fade-bottom"
    >
      <motion.div
        className="container-responsive"
        variants={staggerContainer(0.12)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
      >
        <motion.div variants={fadeInUp} className="max-w-3xl mb-10 relative">
          <div className="absolute -top-8 -left-10 w-40 h-40 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(196,137,82,0.25),transparent_70%)] blur-xl opacity-70" />
          <span className="badge mb-5 inline-block">Tentang Kami</span>
          <h2 className="mb-5">Cerita & Filosofi</h2>
          <p className="text-neutral-300 leading-relaxed mb-4">
            Area9 Coffee dibangun dari kegelisahan sederhana: bagaimana
            menghadirkan secangkir kopi yang jujur, konsisten, namun tetap
            hangat secara manusiawi. Berawal dari garasi kecil pada 2019, kami
            bereksperimen dengan berbagai profil sangrai hingga menemukan
            keseimbangan rasa yang kami anggap mewakili karakter kami: bersih,
            manis alami, dan punya aftertaste yang membuat ingin kembali
            menyeruput.
          </p>
          <p className="text-neutral-300 leading-relaxed mb-4">
            Filosofi kami sederhana:{" "}
            <span className="text-gradient-coffee font-semibold">
              kopi adalah penghubung
            </span>
            . Antara petani yang merawat tanahnya, roaster yang menjaga reaksi
            maillard, barista yang fokus pada ekstraksi, dan kamu yang menikmati
            momen. Kami memilih bekerja dekat dengan roastery kecil dan produsen
            lokal agar rantai nilai tetap transparan.
          </p>
          <p className="text-neutral-300 leading-relaxed">
            Setiap cangkir yang keluar dari bar kami adalah kombinasi ilmu,
            pengalaman, dan rasa peduli. Jika kamu menemukan rasa yang
            mengingatkanmu pada tempat atau kenangan tertentu, berarti misi kami
            berjalan.
          </p>
        </motion.div>
        <motion.div
          variants={fadeInUp}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-4"
        >
          {[
            { label: "Mulai Diracik", value: "2019" },
            { label: "Batch Uji Rasa", value: "180+" },
            { label: "Kemitraan Petani", value: "12" },
            { label: "Coffee Sessions", value: "300+" },
          ].map((s) => (
            <div
              key={s.label}
              className="card p-5 flex flex-col gap-2 hover:translate-y-[-4px] transition will-change-transform"
            >
              <span className="text-gradient-coffee font-semibold text-xl leading-none">
                {s.value}
              </span>
              <span className="text-[11px] tracking-wide uppercase text-neutral-400">
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>
      {/* Subtle texture & vignette */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.12)_0px,rgba(255,255,255,0.12)_1px,transparent_1px,transparent_6px)]" />
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(circle_at_center,black_70%,transparent_100%)] bg-[#0f0d0b]/30" />
    </section>
  );
}
