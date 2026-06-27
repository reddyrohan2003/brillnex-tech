import { motion } from "framer-motion";

// Reliance Logo (Gold crest + serif text)
const RelianceLogo = () => (
  <svg viewBox="0 0 160 70" className="h-14 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="80" cy="22" r="16" fill="#AF923E" />
    {/* Stylized Flame cutout */}
    <path d="M80 10C83.5 14 86 19 83 23C80.5 26.5 76 27 74 24C72 21 73.5 15.5 77 12.5C78 11.5 79 10.5 80 10Z" fill="#FFF" />
    <path d="M80 8C81.5 11 80 17.5 77 19.5" stroke="#AF923E" strokeWidth="2.5" strokeLinecap="round" />
    <text x="80" y="58" textAnchor="middle" fill="#202020" fontSize="18" fontWeight="700" fontFamily="Georgia, serif" letterSpacing="0.5">Reliance</text>
  </svg>
);

// Tata Motors Logo (Blue bold sans-serif)
const TataMotorsLogo = () => (
  <svg viewBox="0 0 180 50" className="h-10 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="10" y="34" fill="#005A9C" fontSize="23" fontWeight="800" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" letterSpacing="1.5">TATA MOTORS</text>
  </svg>
);

// Mahindra Logo (Red oval + slanted lines + text below)
const MahindraLogo = () => (
  <svg viewBox="0 0 160 70" className="h-14 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Red Oval Swirl */}
    <ellipse cx="80" cy="20" rx="22" ry="12" fill="#E11925" />
    <path d="M68 13 L82 27 L88 27 L72 13 Z" fill="#FFF" />
    <path d="M76 13 L89 27 L95 27 L80 13 Z" fill="#FFF" />
    <path d="M65 17 L69 25 L73 25 L68 17 Z" fill="#FFF" />
    <text x="80" y="54" textAnchor="middle" fill="#404040" fontSize="17" fontWeight="800" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" letterSpacing="0.2">Mahindra</text>
  </svg>
);

// Airtel Logo (Red loop + lowercase red text)
const AirtelLogo = () => (
  <svg viewBox="0 0 160 50" className="h-10 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 14 C 29 18, 30 28, 24 33 C 18 38, 10 32, 10 25 C 10 16, 20 11, 27 15 C 36 20, 36 34, 27 41" stroke="#E1261C" strokeWidth="5.5" strokeLinecap="round" fill="none" />
    <text x="46" y="33" fill="#E1261C" fontSize="29" fontWeight="700" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" letterSpacing="-1.5">airtel</text>
  </svg>
);

// Kotak Logo (Blue-black circle + red stylized loop + red text)
const KotakLogo = () => (
  <svg viewBox="0 0 160 50" className="h-10 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="22" cy="24" r="18" fill="#0A2540" />
    <path d="M15 24 C15 19, 20 19, 22 24 C24 29, 29 29, 29 24 C29 19, 24 19, 22 24 C20 29, 15 29, 15 24 Z" stroke="#E61A22" strokeWidth="3" fill="none" />
    <path d="M22 24 C24 29, 29 29, 29 24 C29 19, 24 19, 22 24 Z" stroke="#FFF" strokeWidth="3" fill="none" />
    <text x="48" y="33" fill="#E61A22" fontSize="27" fontWeight="800" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" letterSpacing="-0.5">kotak</text>
  </svg>
);

// SBI Logo (Blue circle with cutout + text & tagline)
const SbiLogo = () => (
  <svg viewBox="0 0 200 55" className="h-11 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="20" fill="#00B1EC" />
    <circle cx="24" cy="24" r="7" fill="#FFF" />
    <rect x="22.5" y="24" width="3" height="20" fill="#FFF" />
    <text x="54" y="34" fill="#1C388C" fontSize="33" fontWeight="800" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif">SBI</text>
    <text x="54" y="45" fill="#707070" fontSize="7.5" fontWeight="600" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif">The banker to every Indian</text>
  </svg>
);

const COMPANY_LOGOS = [
  { name: "Reliance", component: <RelianceLogo /> },
  { name: "Tata Motors", component: <TataMotorsLogo /> },
  { name: "Mahindra", component: <MahindraLogo /> },
  { name: "Airtel", component: <AirtelLogo /> },
  { name: "Kotak", component: <KotakLogo /> },
  { name: "SBI", component: <SbiLogo /> },
];

export default function HiringPartners() {
  return (
    <section className="py-10 border-y border-gray-100 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 mb-8 text-center">
        <p className="text-gray-500 font-medium text-xs md:text-sm tracking-wider uppercase">
          Our Alumni Work At
        </p>
      </div>

      <div className="relative w-full flex overflow-hidden group">
        {/* Fade gradients */}
        <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex w-max items-center animate-infinite-scroll group-hover:[animation-play-state:paused]">
          {[...COMPANY_LOGOS, ...COMPANY_LOGOS, ...COMPANY_LOGOS, ...COMPANY_LOGOS].map((company, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-36 md:w-44 mx-6 md:mx-8 hover:scale-105 transition-transform duration-300"
              title={company.name}
            >
              {company.component}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
