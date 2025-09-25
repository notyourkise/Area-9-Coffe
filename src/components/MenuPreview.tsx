"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { fadeInUp, staggerContainer } from "./motion";

interface MenuItem {
  name: string;
  price: string;
  badge?: string;
  desc: string;
}

const items: MenuItem[] = [
  {
    name: "Espresso",
    price: "25K",
    badge: "Signature",
    desc: "Shot pekat dengan body penuh dan aftertaste manis.",
  },
  {
    name: "Latte",
    price: "35K",
    desc: "Perpaduan espresso dan susu creamy yang halus.",
  },
  {
    name: "Cappuccino",
    price: "35K",
    desc: "Tekstur microfoam lembut dengan keseimbangan rasa.",
  },
  {
    name: "Cold Brew",
    price: "38K",
    badge: "Favorit",
    desc: "Seduhan dingin 16 jam, rasa clean dan less acidic.",
  },
  {
    name: "Manual Brew V60",
    price: "40K",
    desc: "Diseduh presisi menonjolkan notes unik origin.",
  },
  {
    name: "Flat White",
    price: "37K",
    desc: "Kopi susu dengan rasio espresso lebih tinggi.",
  },
];

export function MenuPreview() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // Parallax translate for background image (subtle)
  const yBg = useTransform(scrollYProgress, [0, 1], ["-25%", "25%"]);
  return (
    <section
      className="section-padding relative overflow-hidden fade-bottom"
      id="menu"
      ref={ref}
    >
      <motion.div
        aria-hidden
        style={{ y: yBg }}
        className="pointer-events-none absolute inset-0 opacity-[0.28] [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
      >
        <div className="absolute inset-0 bg-[url('/beans-coffe.webp')] bg-cover bg-center" />
        {/* Overlay tint (lebih terang) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f0d0b]/50 via-[#0f0d0b]/35 to-[#0f0d0b]/55" />
      </motion.div>
      <motion.div
        className="container-responsive"
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
          variants={fadeInUp}
        >
          <div className="max-w-xl">
            <h2 className="mb-4">Menu Unggulan</h2>
            <p>
              Pilihan minuman kami dirancang untuk menemani fokus, relaksasi,
              atau sekadar menikmati momen.
            </p>
          </div>
          <a href="#menu" className="btn-secondary w-fit">
            Lihat Semua Menu
          </a>
        </motion.div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <motion.div
              key={item.name}
              variants={fadeInUp}
              whileHover={{
                y: -6,
                boxShadow: "0 8px 28px -6px rgba(0,0,0,0.55)",
                borderColor: "rgba(255,255,255,0.2)",
              }}
              className="card p-6 flex flex-col justify-between will-change-transform"
            >
              <div>
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold tracking-tight">
                    {item.name}
                  </h3>
                  <span className="text-sm text-neutral-400">{item.price}</span>
                </div>
                <p className="text-sm text-neutral-400 leading-relaxed mb-3">
                  {item.desc}
                </p>
                {item.badge && <span className="badge">{item.badge}</span>}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
