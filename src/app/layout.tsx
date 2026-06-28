import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/home/Header";
import { CinematicFooter } from "@/components/ui/motion-footer";
import { NavBar } from "@/components/ui/NavBar";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { SpeedInsights } from "@vercel/speed-insights/next";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Brillnex Technologies | Professional Upskilling & Digital Solutions",
  description: "Empowering the next generation of tech leaders. Learn in-demand engineering, management, and biotech skills with live mentor-led courses, or build custom digital products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navItems = [
    { name: "Home", url: "/#home", icon: "home" },
    { name: "Courses", url: "/courses", icon: "book-open" },
    { name: "Pricing", url: "/#pricing", icon: "credit-card" },
    { name: "About", url: "/#about", icon: "info" },
    { name: "FAQ", url: "/#faq", icon: "help-circle" },
    { name: "Contact", url: "/#contact", icon: "mail" },
  ];

  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable} scroll-smooth`}>
      <body className="min-h-full flex flex-col font-sans antialiased text-secondary bg-background">
        <Header />
        <NavBar items={navItems} />
        <main className="flex-grow relative z-10 bg-background shadow-lg rounded-b-[2.5rem] border-b border-border/10 pb-8">
          {children}
        </main>
        <FloatingWhatsApp />
        <CinematicFooter />
        <SpeedInsights />
      </body>
    </html>
  );
}
