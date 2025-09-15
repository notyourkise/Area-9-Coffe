export function Footer() {
  return (
    <footer className="pt-20 pb-12 bg-[#171310] mt-10" id="lokasi">
      <div className="container-responsive">
        <div className="grid gap-12 md:grid-cols-4 mb-16">
          <div>
            <h3 className="text-lg font-semibold mb-4 tracking-tight">
              Area9 Coffee
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Tempat bertemu kopi berkualitas dan atmosfer produktif untuk
              bekerja atau bersantai.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide mb-4 text-neutral-300">
              Kontak
            </h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>Jl. Contoh No. 123</li>
              <li>Jakarta</li>
              <li>WhatsApp: 0812‑3456‑7890</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide mb-4 text-neutral-300">
              Jam Buka
            </h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>Sen–Jum: 08.00–22.00</li>
              <li>Sab–Min: 09.00–23.00</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide mb-4 text-neutral-300">
              Ikuti Kami
            </h4>
            <div className="flex gap-3 text-sm">
              <a href="#" className="text-neutral-400 hover:text-white">
                Instagram
              </a>
              <a href="#" className="text-neutral-400 hover:text-white">
                TikTok
              </a>
              <a href="#" className="text-neutral-400 hover:text-white">
                X
              </a>
            </div>
          </div>
        </div>
        <div className="divider-line mb-8" />
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} Area9 Coffee. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-neutral-300">
              Kebijakan Privasi
            </a>
            <a href="#" className="hover:text-neutral-300">
              Syarat Layanan
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
