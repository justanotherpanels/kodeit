import SlideUp from "@/utils/animations/slideUp";
import Button from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faCheckCircle, faTachometerAlt, faShieldAlt, faBroom, faChartLine, faTools, faServer, faSync } from "@fortawesome/free-solid-svg-icons";

export const metadata = {
  title: "Jasa Maintenance & Optimasi Website Profesional - KodeIT",
  description: "Layanan maintenance, pengamanan, update konten, dan optimasi kecepatan website bulanan. Fokus pada bisnis Anda, biarkan kami yang mengurus teknis website.",
  alternates: {
    canonical: '/jasa-maintenance-website',
  },
};

export default function Maintenance() {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="pt-[150px] pb-[80px]">
        <div className="container">
          <SlideUp>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="font-bold lg:text-[60px] md:text-5xl text-[36px] leading-tight mb-5 text-foreground">
                Jasa <span className="text-primary">Maintenance</span> Website
              </h1>
              <p className="text-gray text-lg mb-10 max-w-2xl mx-auto">
                Website sering lambat, rawan diretas, atau Anda tidak punya waktu untuk update konten? Kami hadir memberikan layanan pemeliharaan website profesional agar Anda bisa 100% fokus menjalankan bisnis tanpa dipusingkan oleh masalah teknis.
              </p>
              <Button asLinked={true} path="https://wa.me/6289660081616?text=Halo,%20saya%20tertarik%20dengan%20layanan%20Maintenance%20Website">
                Konsultasikan Website Anda <FontAwesomeIcon icon={faAngleRight} className="ml-2" fontSize={14} />
              </Button>
            </div>
          </SlideUp>
        </div>
      </section>

      {/* CORE BENEFITS */}
      <section className="py-[60px] bg-[#111111]">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Apa Saja yang Akan Kami Lakukan?</h2>
            <p className="text-gray max-w-2xl mx-auto">Kami memastikan website Anda selalu dalam performa puncak, aman dari ancaman siber, dan terus relevan dengan pembaruan sistem.</p>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
            <SlideUp delay={1}>
              <div className="border border-border p-8 rounded-2xl h-full hover:border-primary transition-all duration-300">
                <FontAwesomeIcon icon={faShieldAlt} className="text-primary text-4xl mb-5" />
                <h3 className="text-2xl font-semibold mb-3">Keamanan Ekstra (Security)</h3>
                <p className="text-gray">Proteksi dari serangan DDoS, injeksi malware, update sistem keamanan mingguan, dan firewall yang diperketat.</p>
              </div>
            </SlideUp>
            <SlideUp delay={2}>
              <div className="border border-border p-8 rounded-2xl h-full hover:border-primary transition-all duration-300">
                <FontAwesomeIcon icon={faTachometerAlt} className="text-primary text-4xl mb-5" />
                <h3 className="text-2xl font-semibold mb-3">Optimasi Kecepatan</h3>
                <p className="text-gray">Kami memangkas file yang tidak perlu, mengatur ulang cache, dan mengompres aset gambar agar website loading kilat.</p>
              </div>
            </SlideUp>
            <SlideUp delay={3}>
              <div className="border border-border p-8 rounded-2xl h-full hover:border-primary transition-all duration-300">
                <FontAwesomeIcon icon={faServer} className="text-primary text-4xl mb-5" />
                <h3 className="text-2xl font-semibold mb-3">Backup Data Berkala</h3>
                <p className="text-gray">Cadangan (backup) otomatis database dan file setiap hari ke server eksternal cloud untuk mencegah kehilangan data.</p>
              </div>
            </SlideUp>
            <SlideUp delay={4}>
              <div className="border border-border p-8 rounded-2xl h-full hover:border-primary transition-all duration-300">
                <FontAwesomeIcon icon={faSync} className="text-primary text-4xl mb-5" />
                <h3 className="text-2xl font-semibold mb-3">Pembaruan Core & Plugin</h3>
                <p className="text-gray">Memperbarui versi CMS, bahasa pemrograman, hingga plugin tambahan dengan aman tanpa memicu crash sistem.</p>
              </div>
            </SlideUp>
            <SlideUp delay={5}>
              <div className="border border-border p-8 rounded-2xl h-full hover:border-primary transition-all duration-300">
                <FontAwesomeIcon icon={faChartLine} className="text-primary text-4xl mb-5" />
                <h3 className="text-2xl font-semibold mb-3">Laporan Analisis Performa</h3>
                <p className="text-gray">Setiap bulan kami akan mengirimkan report kinerja web, status uptime, kecepatan, dan daftar update teknis yang dikerjakan.</p>
              </div>
            </SlideUp>
            <SlideUp delay={6}>
              <div className="border border-border p-8 rounded-2xl h-full hover:border-primary transition-all duration-300">
                <FontAwesomeIcon icon={faBroom} className="text-primary text-4xl mb-5" />
                <h3 className="text-2xl font-semibold mb-3">Pembersihan Error (Bugs)</h3>
                <p className="text-gray">Jika ada link rusak, gambar hilang, atau error layout, tim kami siap memperbaikinya dalam waktu singkat.</p>
              </div>
            </SlideUp>
          </div>
        </div>
      </section>

      {/* WHY MAINTENANCE IS IMPORTANT */}
      <section className="py-[100px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center gap-15">
            <div className="lg:w-1/2">
              <SlideUp>
                <h2 className="text-4xl font-bold mb-6 leading-snug">Kenapa Bisnis Anda Butuh <span className="text-primary">Maintenance Website?</span></h2>
                <p className="text-gray mb-8">Membuat website hanyalah langkah awal. Sama seperti kendaraan bermotor, website yang online 24 jam memerlukan servis rutin agar tidak bermasalah. Mengabaikan maintenance berarti:</p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-4 text-lg">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary text-xl w-6" /> <span className="text-gray">Menurunkan reputasi merek Anda jika web sering *down* atau terkena peretasan.</span>
                  </li>
                  <li className="flex items-center gap-4 text-lg">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary text-xl w-6" /> <span className="text-gray">Ranking SEO Google akan hancur jika loading website sangat lambat.</span>
                  </li>
                  <li className="flex items-center gap-4 text-lg">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary text-xl w-6" /> <span className="text-gray">Pelanggan pergi ke kompetitor karena fitur seperti keranjang belanja yang bermasalah.</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <p className="text-white italic bg-[#222] p-5 border-l-4 border-primary">"Investasi pada pemeliharaan bulanan jauh lebih murah dibandingkan memperbaiki website yang sudah terlanjur diretas atau rusak parah."</p>
                </div>
              </SlideUp>
            </div>
            <div className="lg:w-1/2 w-full mt-10 lg:mt-0 relative">
              <SlideUp delay={2}>
                 <div className="border-[5px] border-border rounded-3xl overflow-hidden shadow-2xl relative z-10 bg-black p-10">
                    <div className="mb-8">
                       <h4 className="text-3xl font-bold text-white mb-2">Punya Masalah dengan Web Anda Saat Ini?</h4>
                       <p className="text-gray">Ceritakan keluhan Anda, dan biarkan kami mengaudit masalah teknis yang ada secara gratis!</p>
                    </div>
                    <Button asLinked={true} path="https://wa.me/6289660081616?text=Halo,%20saya%20butuh%20audit%20dan%20maintenance%20website%20saya" className="w-full">
                       Dapatkan Free Audit Website <FontAwesomeIcon icon={faAngleRight} className="ml-2" />
                    </Button>
                 </div>
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary opacity-20 blur-[100px] -z-10 rounded-full pointer-events-none"></div>
              </SlideUp>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
