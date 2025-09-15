"use client";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "./motion";

interface Testimonial {
  name: string;
  quote: string;
  role?: string;
}

const data: Testimonial[] = [
  {
    name: "Rina",
    role: "Freelancer",
    quote:
      "Suasana tenang dan kopinya konsisten—tempat favorit untuk kerja remote.",
  },
  {
    name: "Dimas",
    role: "Desainer",
    quote: "Cold brew-nya clean banget, aftertaste floral ringan. Love it.",
  },
  {
    name: "Alya",
    role: "Mahasiswa",
    quote: "Baristanya ramah dan mau jelasin origin kopi. Edukatif!",
  },
];

export function Testimonials() {
  return (
    <section className="section-padding" id="testimoni">
      <motion.div
        className="container-responsive"
        variants={staggerContainer(0.14)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="max-w-xl mb-12" variants={fadeInUp}>
          <h2 className="mb-4">Apa Kata Mereka</h2>
          <p>
            Beberapa pengalaman pelanggan yang menikmati waktu dan kopi bersama
            kami.
          </p>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-3">
          {data.map((t) => (
            <motion.figure
              key={t.name}
              variants={fadeInUp}
              whileHover={{
                y: -8,
                boxShadow: "0 12px 34px -10px rgba(0,0,0,0.55)",
              }}
              className="card p-6 flex flex-col justify-between will-change-transform"
            >
              <blockquote className="mb-4 text-sm text-neutral-300 leading-relaxed">
                “{t.quote}”
              </blockquote>
              <figcaption className="text-xs uppercase tracking-wide text-neutral-400">
                {t.name}{" "}
                {t.role && <span className="text-neutral-500">• {t.role}</span>}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
