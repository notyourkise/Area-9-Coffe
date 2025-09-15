export function CtaBanner() {
  return (
    <section className="py-20" id="pesan">
      <div className="container-responsive">
        <div className="card p-10 md:p-14 flex flex-col md:flex-row md:items-center md:justify-between gap-10">
          <div className="max-w-xl">
            <h2 className="mb-4 text-gradient-coffee">
              Siap Mulai Hari Dengan Kopi Terbaik?
            </h2>
            <p className="text-neutral-400">
              Datang langsung atau lakukan pre-order untuk menghindari antre.
              Kami siapkan dengan penuh perhatian.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#menu" className="btn-secondary">
              Lihat Menu
            </a>
            <a href="#" className="btn-primary">
              Pre-Order
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
