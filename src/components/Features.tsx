"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { fadeInUp, staggerContainer, subtleHoverCard } from "./motion";

interface FeatureItem {
  title: string;
  desc: string;
  icon: string;
}

const features: FeatureItem[] = [
  {
    title: "Single Origin",
    desc: "Biji kopi pilihan dengan karakter rasa yang jelas dan jejak asal yang transparan.",
    icon: "🌱",
  },
  {
    title: "Roasted Fresh",
    desc: "Sangrai dalam batch kecil untuk memastikan aroma tetap hidup dan kompleks.",
    icon: "🔥",
  },
  {
    title: "Barista Berpengalaman",
    desc: "Tim kami terlatih menjaga konsistensi ekstraksi dan rasa.",
    icon: "👨‍🔧",
  },
  {
    title: "Cozy Workspace",
    desc: "Ruang nyaman dengan colokan & wifi stabil untuk bekerja atau diskusi santai.",
    icon: "💻",
  },
];

export function Features() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  // Parallax translations & depth layers
  const yBg = useTransform(scrollYProgress, [0, 1], ["-14%", "14%"]); // base image (sedikit lebih dinamis)
  const scaleBg = useTransform(scrollYProgress, [0, 1], [1.14, 1]);
  const yDeco = useTransform(scrollYProgress, [0, 1], ["-22%", "18%"]); // slower decorative highlight
  const yParticles = useTransform(scrollYProgress, [0, 1], ["-8%", "4%"]); // layer partikel
  const yContent = useTransform(scrollYProgress, [0, 1], ["0%", "6%"]); // subtle drift for content container
  const yHeading = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]); // slightly stronger for heading block

  return (
    <section
      ref={sectionRef}
      className="section-padding relative fade-top fade-bottom"
      id="tentang"
    >
      {/* Background image & layered parallax */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden
      >
        <motion.div
          style={{ y: yBg, scale: scaleBg }}
          className="absolute inset-0 bg-[url('/tentang-bg.png')] bg-cover bg-center opacity-[0.48] brightness-[1.18] contrast-110"
        />
        {/* Decorative soft light spot moving slower */}
        <motion.div
          style={{ y: yDeco }}
          className="absolute -inset-10 bg-radial from-[#c48952]/18 via-transparent to-transparent opacity-70 mix-blend-screen"
        />
        {/* Particle layer */}
        <motion.div
          style={{ y: yParticles }}
          className="absolute inset-0 pointer-events-none"
        >
          {Array.from({ length: 14 }).map((_, i) => {
            const size = Math.random() * 18 + 8; // 8 - 26px
            const left = Math.random() * 100; // %
            const top = Math.random() * 100; // %
            const delay = Math.random() * 4;
            const duration = 6 + Math.random() * 6; // 6 - 12s
            const drift = (Math.random() - 0.5) * 30; // -15 to 15
            return (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 0 }}
                animate={{
                  opacity: [0, 0.9, 0],
                  y: [0, drift, drift * 1.4],
                  rotate: [0, drift * 2, drift * 3],
                }}
                transition={{
                  duration,
                  delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute text-[10px] select-none will-change-transform"
                style={{
                  left: `${left}%`,
                  top: `${top}%`,
                  fontSize: `${size}px`,
                  color: "rgba(255,255,255,0.25)",
                  filter: "blur(0.3px)",
                }}
                aria-hidden
              >
                ☕
              </motion.span>
            );
          })}
        </motion.div>
        {/* Vignette diperingan & overlay lebih terang */}
        <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(circle_at_center,black_78%,transparent_100%)] bg-[#0f0d0b]/12" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f0d0b]/20 via-[#0f0d0b]/15 to-[#0f0d0b]/55" />
      </div>
      <motion.div
        style={{ y: yContent }}
        className="container-responsive relative"
        variants={staggerContainer(0.12)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          style={{ y: yHeading }}
          className="max-w-xl mb-14"
          variants={fadeInUp}
        >
          <h2 className="mb-4">Kenapa Area9 Coffee?</h2>
          <p>
            Kami mengedepankan kualitas, transparansi asal biji, dan pengalaman
            menyeluruh yang hangat namun modern.
          </p>
        </motion.div>
        <motion.div
          style={{ y: yContent }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 relative"
        >
          {features.map((f) => (
            <motion.div
              className="card p-6 flex flex-col will-change-transform backdrop-blur-[2px]"
              variants={fadeInUp}
              whileHover={subtleHoverCard.whileHover}
            >
              <div className="text-3xl mb-4" aria-hidden>
                {f.icon}
              </div>
              <h3 className="text-lg mb-2">{f.title}</h3>
              <p className="text-sm leading-relaxed text-neutral-300">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
