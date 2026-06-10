import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import ScrollToTop from "@/components/sections/scrollToTop";
import ThemeSwitch from "@/components/sections/themeSwitch";
import Loading from "@/components/ui/loading";


export const metadata: Metadata = {
  metadataBase: new URL('https://kodeit.my.id'),
  title: "Jasa Pembuatan Website Terpercaya & Profesional - KodeIT",
  description: "Tingkatkan omset bisnis Anda dengan Jasa Pembuatan Website Custom, Toko Online, dan Company Profile. Desain premium, SEO friendly, dan bergaransi.",
  keywords: ["Jasa Pembuatan Website", "Bikin Website Murah", "Web Developer Indonesia", "Jasa SEO", "Jasa Toko Online", "Website Perusahaan", "KodeIT"],
  authors: [{ name: "KodeIT" }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Jasa Pembuatan Website Terpercaya & Profesional - KodeIT",
    description: "Tingkatkan omset bisnis Anda dengan Jasa Pembuatan Website Custom, Toko Online, dan Company Profile. Desain premium, SEO friendly, dan bergaransi.",
    url: "/",
    siteName: "KodeIT",
    locale: "id_ID",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>
        <Loading/>
        <Header/>
        {children}
        <Footer/>
        <ThemeSwitch/>
        <ScrollToTop/>
      </body>
    </html>
  );
}
