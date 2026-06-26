import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import { NavBar } from "@/components/ui/NavBar";

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
  title: "Brillnex",
  description: "Upskill for Tomorrow's Career Today",
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
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
