import SlideUp from "@/utils/animations/slideUp";
import Button from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faCheckCircle, faCode, faCogs, faBolt, faLifeRing, faPuzzlePiece, faSearchPlus, faLock, faCreditCard, faSync, faUsers, faRobot } from "@fortawesome/free-solid-svg-icons";

export const metadata = {
  title: "Jasa Pembuatan Plugin WordPress Custom & Profesional - KodeIT",
  description: "Jasa pembuatan plugin WordPress custom sesuai kebutuhan bisnis Anda. Garansi bebas bug, teknologi terbaru, dan support semua versi WordPress.",
  alternates: {
    canonical: '/jasa-plugin-wordpress',
  },
};

export default function PluginWP() {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="pt-[150px] pb-[80px]">
        <div className="container">
          <SlideUp>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="font-bold lg:text-[60px] md:text-5xl text-[36px] leading-tight mb-5 text-foreground">
                Jasa Pembuatan <span className="text-primary">Plugin WordPress</span>
              </h1>
              <p className="text-gray text-lg mb-10 max-w-2xl mx-auto">
                Kembangkan website WordPress Anda tanpa batas. Jika plugin yang ada di pasaran tidak memenuhi kebutuhan spesifik Anda, kami siap membuatkan plugin custom dari nol yang 100% dirancang khusus untuk alur bisnis Anda.
              </p>
              <Button asLinked={true} path="https://wa.me/6289660081616?text=Halo,%20saya%20ingin%20konsultasi%20pembuatan%20plugin%20WordPress%20Custom">
                Konsultasi Kebutuhan Plugin <FontAwesomeIcon icon={faAngleRight} className="ml-2" fontSize={14} />
              </Button>
            </div>
          </SlideUp>
        </div>
      </section>

      {/* CORE BENEFITS */}
      <section className="py-[60px] bg-[#111111]">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Mengapa Memilih Layanan Kami?</h2>
            <p className="text-gray max-w-2xl mx-auto">Kami memastikan setiap baris kode yang ditulis mengikuti standar kualitas internasional (WordPress Coding Standards).</p>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
            <SlideUp delay={1}>
              <div className="border border-border p-8 rounded-2xl h-full hover:border-primary transition-all duration-300">
                <FontAwesomeIcon icon={faCode} className="text-primary text-4xl mb-5" />
                <h3 className="text-2xl font-semibold mb-3">Teknologi & Standar WP</h3>
                <p className="text-gray">Plugin dikembangkan dengan standar kode WordPress terbaru, memastikan performa ringan, terstruktur rapi, dan efisien.</p>
              </div>
            </SlideUp>
            <SlideUp delay={2}>
              <div className="border border-border p-8 rounded-2xl h-full hover:border-primary transition-all duration-300">
                <FontAwesomeIcon icon={faCogs} className="text-primary text-4xl mb-5" />
                <h3 className="text-2xl font-semibold mb-3">Support Semua Versi</h3>
                <p className="text-gray">Kompatibel penuh dengan berbagai versi WordPress terbaru maupun klasik tanpa masalah konflik dengan tema (theme) Anda.</p>
              </div>
            </SlideUp>
            <SlideUp delay={3}>
              <div className="border border-border p-8 rounded-2xl h-full hover:border-primary transition-all duration-300">
                <FontAwesomeIcon icon={faCheckCircle} className="text-primary text-4xl mb-5" />
                <h3 className="text-2xl font-semibold mb-3">Garansi Bebas Bug</h3>
                <p className="text-gray">Kami menguji setiap plugin secara mendalam (QA Testing) dan memberikan jaminan perbaikan jika ditemukan masalah teknis.</p>
              </div>
            </SlideUp>
            <SlideUp delay={4}>
              <div className="border border-border p-8 rounded-2xl h-full hover:border-primary transition-all duration-300">
                <FontAwesomeIcon icon={faBolt} className="text-primary text-4xl mb-5" />
                <h3 className="text-2xl font-semibold mb-3">Performa Sangat Cepat</h3>
                <p className="text-gray">Kami mengoptimalkan pemanggilan database agar plugin tidak membuat loading website menjadi lambat.</p>
              </div>
            </SlideUp>
            <SlideUp delay={5}>
              <div className="border border-border p-8 rounded-2xl h-full hover:border-primary transition-all duration-300">
                <FontAwesomeIcon icon={faLock} className="text-primary text-4xl mb-5" />
                <h3 className="text-2xl font-semibold mb-3">Keamanan Terjamin</h3>
                <p className="text-gray">Sistem sanitasi input dan validasi data yang ketat untuk mencegah serangan injeksi SQL dan celah keamanan lainnya.</p>
              </div>
            </SlideUp>
            <SlideUp delay={6}>
              <div className="border border-border p-8 rounded-2xl h-full hover:border-primary transition-all duration-300">
                <FontAwesomeIcon icon={faLifeRing} className="text-primary text-4xl mb-5" />
                <h3 className="text-2xl font-semibold mb-3">Maintenance & Support</h3>
                <p className="text-gray">Tidak hanya membuat, kami juga siap memberikan layanan dukungan teknis berkelanjutan jika Anda ingin menambah fitur.</p>
              </div>
            </SlideUp>
          </div>
        </div>
      </section>

      {/* USE CASES / KEBUTUHAN PLUGIN */}
      <section className="py-[100px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center gap-15">
            <div className="lg:w-1/2">
              <SlideUp>
                <h2 className="text-4xl font-bold mb-6 leading-snug">Jenis Plugin Apa Saja yang <span className="text-primary">Bisa Kami Buat?</span></h2>
                <p className="text-gray mb-8">Tidak ada batasan untuk ide Anda. Apapun kebutuhan sistemnya, tim kami siap menerjemahkannya ke dalam barisan kode plugin yang fungsional. Berikut adalah contoh plugin yang paling sering direquest oleh klien kami:</p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-4 text-lg">
                    <FontAwesomeIcon icon={faCreditCard} className="text-primary text-xl w-6" /> Integrasi Payment Gateway (Midtrans, Xendit, dll)
                  </li>
                  <li className="flex items-center gap-4 text-lg">
                    <FontAwesomeIcon icon={faSync} className="text-primary text-xl w-6" /> Sync Data API Eksternal (ERP, RajaOngkir, CRM)
                  </li>
                  <li className="flex items-center gap-4 text-lg">
                    <FontAwesomeIcon icon={faUsers} className="text-primary text-xl w-6" /> Sistem Membership & E-Learning Custom
                  </li>
                  <li className="flex items-center gap-4 text-lg">
                    <FontAwesomeIcon icon={faRobot} className="text-primary text-xl w-6" /> Bot Otomatisasi & Penjadwalan Tugas (Cron Jobs)
                  </li>
                  <li className="flex items-center gap-4 text-lg">
                    <FontAwesomeIcon icon={faSearchPlus} className="text-primary text-xl w-6" /> Custom Post Types & Filter Pencarian Lanjut
                  </li>
                  <li className="flex items-center gap-4 text-lg">
                    <FontAwesomeIcon icon={faPuzzlePiece} className="text-primary text-xl w-6" /> Add-on Kustom untuk WooCommerce / Elementor
                  </li>
                </ul>
              </SlideUp>
            </div>
            <div className="lg:w-1/2 w-full mt-10 lg:mt-0 relative">
              <SlideUp delay={2}>
                 <div className="border-[5px] border-border rounded-3xl overflow-hidden shadow-2xl relative z-10 bg-black p-10">
                    <div className="mb-8">
                       <h4 className="text-3xl font-bold text-white mb-2">Punya ide plugin yang unik?</h4>
                       <p className="text-gray">Ceritakan pada kami bagaimana sistem yang Anda inginkan bekerja.</p>
                    </div>
                    <Button asLinked={true} path="https://wa.me/6289660081616?text=Halo,%20saya%20punya%20ide%20pembuatan%20plugin%20WordPress" className="w-full">
                       Konsultasi Ide Anda Sekarang <FontAwesomeIcon icon={faAngleRight} className="ml-2" />
                    </Button>
                 </div>
                 {/* Decorative background circle */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary opacity-20 blur-[100px] -z-10 rounded-full pointer-events-none"></div>
              </SlideUp>
            </div>
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="py-[80px] bg-[#111111]">
        <div className="container">
           <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Cara Kerja Kami</h2>
              <p className="text-gray max-w-2xl mx-auto">Proses transparan dan terstruktur memastikan plugin selesai tepat waktu sesuai spesifikasi.</p>
           </div>
           
           <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 relative">
              {/* Line connector for large screens */}
              <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-border z-0"></div>
              
              {[
                { step: "1", title: "Diskusi & Perencanaan", desc: "Menganalisa logika fitur dan flow bisnis Anda secara mendetail." },
                { step: "2", title: "Desain Arsitektur", desc: "Menyusun kerangka database dan alur program (logic flow) plugin." },
                { step: "3", title: "Coding & Development", desc: "Proses penulisan kode sesuai standar keamanan WordPress." },
                { step: "4", title: "Testing & Instalasi", desc: "Uji coba bebas bug, peluncuran, dan garansi maintenance." },
              ].map((item, idx) => (
                <SlideUp delay={idx+1} key={idx}>
                   <div className="relative z-10 text-center px-4">
                      <div className="w-24 h-24 mx-auto bg-black border-4 border-primary rounded-full flex items-center justify-center text-3xl font-bold mb-6 text-white shadow-xl shadow-primary/20">
                         {item.step}
                      </div>
                      <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                      <p className="text-gray text-sm">{item.desc}</p>
                   </div>
                </SlideUp>
              ))}
           </div>
        </div>
      </section>
    </main>
  );
}
