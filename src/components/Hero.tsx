"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, fadeIn } from "./motion";

export function Hero() {
  return (
    <section className="relative pt-40 pb-24 gradient-hero overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-10 -right-10 w-[520px] h-[520px] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(179,122,70,0.25),transparent_70%)] opacity-60" />
      </div>
      <motion.div
        className="container-responsive relative"
        variants={staggerContainer(0.15)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
      >
        <div className="max-w-2xl">
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
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#menu" className="btn-primary">
              Lihat Menu
            </a>
            <a href="#pesan" className="btn-secondary">
              Pesan Sekarang
            </a>
          </motion.div>
        </div>
        <motion.div
          className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6"
          variants={staggerContainer(0.12, 0.2)}
        >
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
                className="card aspect-square flex items-center justify-center text-xs uppercase tracking-wide text-neutral-300"
              >
                <Image
                  src={src}
                  alt="Ilustrasi"
                  width={80}
                  height={80}
                  className="opacity-70"
                />
              </motion.div>
            )
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}
