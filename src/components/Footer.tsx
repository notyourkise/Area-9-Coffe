// Map embed removed per request

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
              <li>Jl. Sei Wain KM. 15</li>
              <li>Cluster D Carjoe No. A9</li>
              <li>Balikpapan</li>
              <li>WhatsApp: 0851-8319-0809</li>
              <li>
                <a
                  href="https://maps.app.goo.gl/R945EpuKHmfQx2jR9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c48952] hover:text-[#e0a873] transition-colors inline-flex items-center gap-1"
                >
                  <span className="inline-block h-[5px] w-[5px] rounded-full bg-[#c48952]" />
                  Lihat di Google Maps
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide mb-4 text-neutral-300">
              Jam Buka
            </h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>Sen–Sab: 13.00 – 22.00</li>
              <li>Minggu: Tutup</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide mb-4 text-neutral-300">
              Ikuti Kami
            </h4>
            <div className="flex items-center gap-5">
              <a
                href="https://www.instagram.com/areasembilan.kopi?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                aria-label="Instagram Area9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors text-xl"
              >
                <i className="fa-brands fa-instagram" />
              </a>
              <a
                href="http://wa.me/6285183190809"
                aria-label="WhatsApp Area9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors text-xl"
              >
                <i className="fa-brands fa-whatsapp" />
              </a>
              <span className="relative h-10 w-10 select-none opacity-80 hover:opacity-100 transition-opacity">
                <img
                  src="/logo.png"
                  alt="Logo Area9 Coffee"
                  className="h-full w-full object-contain"
                  draggable={false}
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                />
              </span>
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
