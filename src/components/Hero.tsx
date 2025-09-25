"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, fadeIn } from "./motion";

export function Hero() {
  return (
    <section className="relative pt-40 pb-28 md:pb-32 gradient-hero overflow-hidden">
      {/* Background gradient blobs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-28 -right-10 w-[560px] h-[560px] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(179,122,70,0.25),transparent_72%)] opacity-70" />
        <div className="absolute -bottom-40 -left-24 w-[620px] h-[620px] rounded-full bg-[radial-gradient(circle_at_70%_70%,rgba(139,90,43,0.15),transparent_70%)] opacity-60" />
        <div className="absolute inset-0 mix-blend-overlay opacity-[0.07] bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.05)_0px,rgba(255,255,255,0.05)_2px,transparent_2px,transparent_6px)]" />
      </div>
      {/* Subtle noise overlay */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'220\' height=\'220\' fill=\'none\'><filter id=\'n\'><feTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/></filter><rect width=\'100%\' height=\'100%\' filter=\'url(%23n)\' opacity=\'0.55\'/></svg>')]" />
      {/* Floating beans */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        {[
          { x: "8%", delay: 0 },
          { x: "78%", delay: 1.2 },
          { x: "55%", delay: 0.6 },
          { x: "25%", delay: 2.1 },
        ].map((b, i) => (
          <motion.div
            key={i}
            className="absolute top-[15%] w-10 h-14 rounded-full border border-white/5 bg-[radial-gradient(circle_at_30%_30%,#3a2a21,#1b140f)] shadow-[0_4px_14px_-4px_rgba(0,0,0,0.6)]"
            style={{ left: b.x }}
            initial={{ opacity: 0, y: 20, scale: 0.85, rotate: -8 }}
            animate={{
              opacity: [0, 0.9, 0.9, 0],
              y: [20, -20, -44, -60],
              rotate: [-8, 6, -4, 10],
              scale: [0.85, 1, 1, 0.9],
            }}
            transition={{
              duration: 12 + i * 1.5,
              repeat: Infinity,
              delay: b.delay,
              ease: "easeInOut",
            }}
          >
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.15),transparent_65%)]" />
          </motion.div>
        ))}
      </div>
      {/* Cup & steam cluster (refined for sharper look) */}
      <div
        className="pointer-events-none absolute right-[3%] top-[54%] -translate-y-1/2 hidden lg:block"
        aria-hidden
      >
        <div className="relative w-[210px] h-[250px]">
          {/* Cup body */}
          <div className="absolute bottom-0 inset-x-0 h-[150px] rounded-[40%_40%_26%_26%/50%_50%_18%_18%] bg-[radial-gradient(circle_at_50%_38%,#f6e9d7_0%,#e8d2b5_22%,#c08347_58%,#8e5d2d_88%)] shadow-[0_14px_40px_-12px_rgba(0,0,0,0.7)] border border-white/10 overflow-hidden">
            {/* Inner surface highlight */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[86%] h-10 rounded-full bg-[radial-gradient(circle_at_50%_55%,rgba(255,255,255,0.5),rgba(255,255,255,0)_70%)] opacity-40" />
            {/* Lip shading */}
            <div className="absolute top-[42%] left-1/2 -translate-x-1/2 w-[92%] h-10 rounded-full bg-[radial-gradient(circle_at_50%_40%,rgba(0,0,0,0.35),rgba(0,0,0,0)_70%)] opacity-30 blur-[2px]" />
            {/* Bottom glow */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[70%] h-6 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.35),rgba(255,255,255,0)_70%)] opacity-30" />
            {/* Overlay subtle texture */}
            <div className="absolute inset-0 opacity-[0.12] mix-blend-overlay bg-[repeating-linear-gradient(60deg,rgba(255,255,255,0.15)_0px,rgba(255,255,255,0.15)_1px,transparent_1px,transparent_5px)]" />
          </div>
          {/* Coffee surface (separate to appear sharper) */}
          <div className="absolute bottom-[116px] left-1/2 -translate-x-1/2 w-[78%] h-[54px] rounded-[50%] bg-[radial-gradient(circle_at_50%_60%,#201714,#17110e_55%,#0f0d0b_80%)] border border-white/5 shadow-[0_4px_18px_-6px_rgba(0,0,0,0.7)]" />
          {/* Steam trails refined */}
          {[
            { delay: 0, x: "-38%", size: 44 },
            { delay: 1.1, x: "-4%", size: 52 },
            { delay: 2.2, x: "30%", size: 40 },
          ].map((s, i) => (
            <motion.div
              key={i}
              className="absolute bottom-[150px]"
              initial={{ opacity: 0, y: 10, scale: 0.7 }}
              animate={{
                opacity: [0, 0.9, 0.6, 0],
                y: [10, -30, -60, -78],
                scale: [0.7, 1, 1.05, 0.95],
              }}
              transition={{
                duration: 6.5,
                delay: s.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                left: s.x,
                width: s.size,
                height: s.size * 1.4,
                filter: "blur(4px)",
              }}
            >
              <div className="w-full h-full rounded-full bg-[radial-gradient(circle_at_50%_45%,rgba(255,255,255,0.85),rgba(255,255,255,0.25)_55%,rgba(255,255,255,0)_75%)]" />
            </motion.div>
          ))}
        </div>
      </div>
      <motion.div
        className="container-responsive relative"
        variants={staggerContainer(0.15)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
      >
        <div className="max-w-2xl relative">
          {/* Accent underline behind heading */}
          <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(196,137,82,0.25),transparent_70%)] blur-xl opacity-70" />
          <motion.span variants={fadeInUp} className="badge mb-6">
            Kopi Spesialti
          </motion.span>
          <motion.h1 variants={fadeInUp} className="mb-6">
            Rasakan Kesempurnaan <br className="hidden md:block" /> Secangkir
            Kopi
          </motion.h1>
          <motion.p variants={fadeInUp} className="mb-8 max-w-xl">
            Kami memilih biji terbaik, disangrai presisi, dan diseduh oleh
            barista berpengalaman untuk menghadirkan rasa yang berkarakter,
            seimbang, dan konsisten di setiap cangkir.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="mb-10 flex flex-wrap gap-6 text-sm text-neutral-300"
          >
            {[
              { label: "Varietas Biji", value: "40+" },
              { label: "Signature Drink", value: "12" },
              { label: "Roasting Batch / minggu", value: "8" },
              { label: "Rating Pelanggan", value: "4.9★" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-gradient-coffee font-semibold text-lg leading-none mb-1">
                  {stat.value}
                </span>
                <span className="text-[11px] tracking-wide uppercase text-neutral-400">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#menu" className="btn-primary">
              Lihat Menu
            </a>
            {/* Removed Pesan Sekarang CTA for profile-only site */}
          </motion.div>
          {/* Barista signature card */}
          <motion.div
            variants={fadeInUp}
            className="mt-10 flex items-center gap-4 p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm w-fit shadow-[0_4px_24px_-8px_rgba(0,0,0,0.5)]"
          >
            <div className="relative w-12 h-12 rounded-full overflow-hidden">
              <Image
                src="/logo.png"
                alt="Head Barista"
                fill
                className="object-cover"
              />
            </div>
            <div className="text-sm">
              <p className="font-medium text-neutral-200 leading-tight">
                “Kami percaya setiap cangkir harus punya cerita.”
              </p>
              <p className="text-[11px] tracking-wide uppercase text-neutral-400 mt-1">
                Head Barista
              </p>
            </div>
          </motion.div>
        </div>
        <motion.div
          className="mt-24 md:mt-28 grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 relative"
          variants={staggerContainer(0.12, 0.2)}
        >
          {/* Decorative separator line */}
          <div className="absolute -top-10 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
          {["/vercel.svg", "/next.svg", "/globe.svg", "/file.svg"].map(
            (src, i) => (
              <motion.div
                variants={fadeIn}
                key={i}
                whileHover={{
                  y: -6,
                  rotate: 1,
                  boxShadow: "0 8px 28px -8px rgba(0,0,0,0.6)",
                }}
                className="card aspect-square flex items-center justify-center text-xs uppercase tracking-wide text-neutral-300 relative overflow-hidden"
              >
                <Image
                  src={src}
                  alt="Ilustrasi"
                  width={80}
                  height={80}
                  className="opacity-70"
                />
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.18),transparent_70%)]" />
              </motion.div>
            )
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}
