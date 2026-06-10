import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import ScrollToTop from "@/components/sections/scrollToTop";
import ThemeSwitch from "@/components/sections/themeSwitch";
import Loading from "@/components/ui/loading";


export const metadata: Metadata = {
  title: "KodeIT | Jasa Pembuatan Website dan Aplikasi Mobile",
  description: "Kami menyediakan jasa pembuatan website profesional, aplikasi mobile, UI/UX design, dan SEO untuk memajukan bisnis Anda ke era digital.",
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
