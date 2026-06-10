import SlideUp from "@/utils/animations/slideUp";
import Button from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faCheckCircle, faCode, faTags, faHeadset, faCogs, faPlusCircle, faRocket } from "@fortawesome/free-solid-svg-icons";

export const metadata = {
  title: "Jasa Pembuatan Website SMM Panel Profesional - KodeIT",
  description: "Jasa pembuatan website SMM Panel murah Rp. 850.000. Tersedia teknologi Laravel, WordPress, dan React. Full support & Free Maintenance 12 Bulan.",
  alternates: {
    canonical: '/jasa-website-smm',
  },
  openGraph: {
    images: ['/logo.png'],
  }
};

export default function SMMPanel() {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="pt-[150px] pb-[80px]">
        <div className="container">
          <SlideUp>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="font-bold lg:text-[60px] md:text-5xl text-[36px] leading-tight mb-5 text-foreground">
                Jasa Pembuatan <span className="text-primary">Website SMM Panel</span>
              </h1>
              <p className="text-gray text-lg mb-10 max-w-2xl mx-auto">
                Kembangkan bisnis layanan media sosial Anda dengan website SMM (Social Media Marketing) Panel milik sendiri. Kami siap membangun platform yang cepat, aman, dan siap digunakan untuk menerima pesanan otomatis dari pelanggan Anda.
              </p>
              <div className="inline-block bg-[#111111] px-8 py-4 rounded-full border border-primary mb-10">
                <span className="text-2xl font-bold text-white">Mulai dari <span className="text-primary">Rp 850.000</span></span>
              </div>
              <br/>
              <Button asLinked={true} path="https://wa.me/6289660081616?text=Halo,%20saya%20tertarik%20dengan%20Jasa%20Pembuatan%20Website%20SMM%20Panel%20Rp%20850.000">
                Pesan Sekarang <FontAwesomeIcon icon={faAngleRight} className="ml-2" fontSize={14} />
              </Button>
            </div>
          </SlideUp>
        </div>
      </section>

      {/* CORE BENEFITS */}
      <section className="py-[60px] bg-[#111111]">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Fitur & Keuntungan Utama</h2>
            <p className="text-gray max-w-2xl mx-auto">Dapatkan paket lengkap pembuatan website SMM Panel dengan dukungan teknologi terkini dan layanan purna jual terbaik di kelasnya.</p>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
            <SlideUp delay={1}>
              <div className="border border-border p-8 rounded-2xl h-full hover:border-primary transition-all duration-300">
                <FontAwesomeIcon icon={faCode} className="text-primary text-4xl mb-5" />
                <h3 className="text-2xl font-semibold mb-3">Pilihan Teknologi</h3>
                <p className="text-gray">Anda dapat memilih framework pengembangan sesuai selera: <strong className="text-white">PHP Laravel</strong>, <strong className="text-white">PHP WordPress</strong>, atau <strong className="text-white">React.js</strong>.</p>
              </div>
            </SlideUp>
            <SlideUp delay={2}>
              <div className="border border-border p-8 rounded-2xl h-full hover:border-primary transition-all duration-300">
                <FontAwesomeIcon icon={faHeadset} className="text-primary text-4xl mb-5" />
                <h3 className="text-2xl font-semibold mb-3">Full Support 12 Bulan</h3>
                <p className="text-gray">Tidak perlu khawatir jika terjadi error teknis. Kami memberikan Free Maintenance & Full Support selama 12 bulan penuh.</p>
              </div>
            </SlideUp>
            <SlideUp delay={3}>
              <div className="border border-border p-8 rounded-2xl h-full hover:border-primary transition-all duration-300">
                <FontAwesomeIcon icon={faCogs} className="text-primary text-4xl mb-5" />
                <h3 className="text-2xl font-semibold mb-3">Custom Request Fitur</h3>
                <p className="text-gray">Ingin integrasi API spesifik atau metode pembayaran khusus? Anda bisa request fitur sesuai dengan kebutuhan unik Anda.</p>
              </div>
            </SlideUp>
          </div>
        </div>
      </section>

      {/* PRICING & ADD-ONS */}
      <section className="py-[100px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center gap-15">
            <div className="lg:w-1/2">
              <SlideUp>
                <h2 className="text-4xl font-bold mb-6 leading-snug">Harga Transparan & <span className="text-primary">Terjangkau</span></h2>
                <p className="text-gray mb-8">Kami percaya bahwa memiliki bisnis SMM Panel tidak harus mahal. Dengan investasi yang ringan, Anda sudah mendapatkan platform lengkap yang siap menghasilkan profit.</p>
                
                <div className="bg-[#1a1a1a] p-6 rounded-2xl border-l-4 border-primary mb-6">
                  <h4 className="text-xl font-bold text-white mb-2"><FontAwesomeIcon icon={faTags} className="mr-2 text-primary" /> Paket Dasar: Rp 850.000</h4>
                  <ul className="space-y-2 mt-4">
                    <li className="flex items-center gap-3 text-gray"><FontAwesomeIcon icon={faCheckCircle} className="text-primary" /> Desain UI/UX Modern & Responsif</li>
                    <li className="flex items-center gap-3 text-gray"><FontAwesomeIcon icon={faCheckCircle} className="text-primary" /> Pilihan: Laravel, WordPress, atau React</li>
                    <li className="flex items-center gap-3 text-gray"><FontAwesomeIcon icon={faCheckCircle} className="text-primary" /> Free Maintenance 12 Bulan</li>
                    <li className="flex items-center gap-3 text-gray"><FontAwesomeIcon icon={faCheckCircle} className="text-primary" /> Setup Server & Database</li>
                  </ul>
                </div>

                <div className="bg-[#1a1a1a] p-6 rounded-2xl border-l-4 border-yellow-500">
                  <h4 className="text-xl font-bold text-white mb-2"><FontAwesomeIcon icon={faPlusCircle} className="mr-2 text-yellow-500" /> Penambahan Fitur: Rp 150.000 / Fitur</h4>
                  <p className="text-gray text-sm mt-2">Jika setelah rilis (live) Anda ingin menambahkan fitur ekstra yang belum disepakati sebelumnya, biayanya sangat terjangkau hanya Rp 150.000 per penambahan fitur.</p>
                </div>
              </SlideUp>
            </div>
            
            <div className="lg:w-1/2 w-full mt-10 lg:mt-0 relative">
              <SlideUp delay={2}>
                 <div className="border-[5px] border-border rounded-3xl overflow-hidden shadow-2xl relative z-10 bg-black p-10 text-center">
                    <div className="mb-8">
                       <FontAwesomeIcon icon={faRocket} className="text-6xl text-primary mb-6" />
                       <h4 className="text-3xl font-bold text-white mb-4">Siap Membuka Bisnis SMM Panel Anda?</h4>
                       <p className="text-gray">Hubungi kami hari ini untuk berdiskusi mengenai arsitektur dan sistem yang Anda inginkan.</p>
                    </div>
                    <Button asLinked={true} path="https://wa.me/6289660081616?text=Halo,%20saya%20ingin%20memesan%20Website%20SMM%20Panel%20seharga%20Rp%20850.000" className="w-full">
                       Hubungi via WhatsApp <FontAwesomeIcon icon={faAngleRight} className="ml-2" />
                    </Button>
                 </div>
                 {/* Decorative background circle */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary opacity-20 blur-[100px] -z-10 rounded-full pointer-events-none"></div>
              </SlideUp>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
