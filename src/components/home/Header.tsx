"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Courses", href: "/courses" },
  { name: "Pricing", href: "/#pricing" },
  { name: "About", href: "/#about" },
  { name: "FAQ", href: "/#faq" },
  { name: "Contact", href: "/#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-[#0A0F1C]/95 backdrop-blur-md shadow-lg py-3"
          : "bg-[#0A0F1C] py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link 
          href="/" 
          className="flex items-center gap-3"
          onClick={(e) => {
            if (window.location.pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          <Image 
            src="/logo.png" 
            alt="Brillnex Logo" 
            width={48} 
            height={48} 
            className="w-10 h-10 md:w-12 md:h-12 object-contain" 
          />
          <div className="flex flex-col justify-center">
            <span className="font-heading font-bold text-2xl md:text-[28px] tracking-[0.05em] text-white leading-none">
              BRILLNEX
            </span>
            <span className="font-sans font-semibold text-[0.6rem] md:text-[0.65rem] tracking-[0.35em] text-gray-400 leading-none mt-1.5 uppercase">
              Technologies
            </span>
          </div>
        </Link>

        {/* Desktop Navigation is handled by the floating NavBar */}

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-5">
          <a
            href={`https://wa.me/917204398855?text=${encodeURIComponent("Hello! I would like to make an enquiry about Brillnex Technologies and its services.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 font-heading font-semibold hover:text-white transition-colors text-sm bg-white/5 px-5 py-2 rounded-md border border-white/10"
          >
            Enquire Now
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#0A0F1C] border-t border-white/10 shadow-2xl py-4 px-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-white transition-colors font-medium py-3 border-b border-white/5 last:border-0"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex flex-col gap-3 pt-4">
            <a
              href={`https://wa.me/917204398855?text=${encodeURIComponent("Hello! I would like to make an enquiry about Brillnex Technologies and its services.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center text-white font-heading font-semibold border border-white/20 hover:bg-white/5 rounded-md py-3 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Enquire Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
