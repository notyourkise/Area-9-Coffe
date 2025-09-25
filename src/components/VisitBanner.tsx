"use client";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "./motion";
// Informational banner only (form dihapus sesuai permintaan)

export function VisitBanner() {
  return (
    <section className="py-20" id="visit">
      <motion.div
        className="container-responsive"
        variants={staggerContainer(0.12)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={fadeInUp} className="max-w-2xl relative">
          <h2 className="mb-5 text-gradient-coffee">Kunjungi Area9 Coffee</h2>
          <p className="text-neutral-300 leading-relaxed mb-4">
            Nikmati suasana hangat, pencahayaan nyaman, dan racikan kopi yang
            konsisten. Cocok untuk kerja fokus, diskusi kreatif, atau sekadar
            rehat.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 mt-6">
            {[
              { label: "Alamat", value: "Jl. Contoh No. 123, Jakarta" },
              {
                label: "Jam Buka",
                value: "Sen–Jum 08.00–22.00\nSab–Min 09.00–23.00",
              },
              { label: "Kontak", value: "WhatsApp 0812‑3456‑7890" },
            ].map((item) => (
              <div key={item.label} className="card p-5 text-sm">
                <span className="text-[11px] tracking-wide uppercase text-neutral-500">
                  {item.label}
                </span>
                <p className="mt-2 whitespace-pre-line text-neutral-300 leading-relaxed">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="https://maps.google.com/?q=Jl.+Contoh+No.+123+Jakarta"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Lihat di Maps
            </a>
            <a href="#lokasi" className="btn-secondary">
              Detail Lokasi
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
