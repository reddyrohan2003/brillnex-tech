import Link from "next/link";
import Image from "next/image";
import { Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-text-primary text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-16">
          
          {/* Column 1: Company Information */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Image 
                src="/logo.png" 
                alt="Brillnex Logo" 
                width={48} 
                height={48} 
                className="w-12 h-12 object-contain" 
              />
              <div className="flex flex-col justify-center">
                <span className="font-heading font-bold text-[28px] tracking-[0.05em] text-white leading-none">
                  BRILLNEX
                </span>
                <span className="font-sans font-semibold text-[0.65rem] tracking-[0.35em] text-gray-400 leading-none mt-1.5 uppercase">
                  Technologies
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Empowering the next generation of tech leaders. Brillnex Technologies provides industry-grade upskilling programs and custom digital development solutions to accelerate your career and business growth.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-bold font-heading mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="#about" className="text-gray-400 hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><Link href="/courses" className="text-gray-400 hover:text-white transition-colors text-sm">All Courses</Link></li>
              <li><Link href="#pricing" className="text-gray-400 hover:text-white transition-colors text-sm">Pricing Plans</Link></li>
              <li><Link href="#testimonials" className="text-gray-400 hover:text-white transition-colors text-sm">Success Stories</Link></li>
              <li><Link href="#faq" className="text-gray-400 hover:text-white transition-colors text-sm">FAQ</Link></li>
              <li><Link href="#contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Courses */}
          <div>
            <h4 className="text-lg font-bold font-heading mb-6">Top Courses</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Full Stack Web Development</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Artificial Intelligence</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">AWS Cloud Computing</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Data Science Bootcamp</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Embedded Systems</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Advanced Medical Coding</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div>
            <h4 className="text-lg font-bold font-heading mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary flex-shrink-0" />
                <a 
                  href="https://wa.me/917204398855" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  +91 7204398855
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary flex-shrink-0" />
                <a 
                  href="mailto:support@brillnex.com" 
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  support@brillnex.com
                </a>
              </li>
            </ul>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-center md:text-left">
            <p className="text-gray-400 text-sm flex items-center gap-1.5 flex-wrap justify-center md:justify-start">
              <span>&copy; {new Date().getFullYear()} Brillnex. All rights reserved.</span>
              <span className="text-gray-600 hidden md:inline">|</span>
              <a 
                href="https://reddyrohan2003.github.io/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-500 hover:text-primary transition-colors text-xs font-semibold"
              >
                Crafted by Rohan Reddy
              </a>
            </p>
            <div className="flex items-center gap-4 text-xs">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <span className="text-gray-600">|</span>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
