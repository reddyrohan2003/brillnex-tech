import React from "react";

// Inline Custom SVGs for companies without standard public logo SVGs or failed downloads
const RelianceLogo = () => (
  <svg viewBox="0 0 160 70" className="h-12 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="80" cy="22" r="16" fill="#AF923E" />
    <path d="M80 10C83.5 14 86 19 83 23C80.5 26.5 76 27 74 24C72 21 73.5 15.5 77 12.5C78 11.5 79 10.5 80 10Z" fill="#FFF" />
    <path d="M80 8C81.5 11 80 17.5 77 19.5" stroke="#AF923E" strokeWidth="2.5" strokeLinecap="round" />
    <text x="80" y="58" textAnchor="middle" fill="#202020" fontSize="18" fontWeight="700" fontFamily="Georgia, serif" letterSpacing="0.5">Reliance</text>
  </svg>
);

const AirtelLogo = () => (
  <svg viewBox="0 0 160 50" className="h-9 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 14 C 29 18, 30 28, 24 33 C 18 38, 10 32, 10 25 C 10 16, 20 11, 27 15 C 36 20, 36 34, 27 41" stroke="#E1261C" strokeWidth="5.5" strokeLinecap="round" fill="none" />
    <text x="46" y="33" fill="#E1261C" fontSize="29" fontWeight="700" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" letterSpacing="-1.5">airtel</text>
  </svg>
);

const KotakLogo = () => (
  <svg viewBox="0 0 160 50" className="h-9 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="22" cy="24" r="18" fill="#0A2540" />
    <path d="M15 24 C15 19, 20 19, 22 24 C24 29, 29 29, 29 24 C29 19, 24 19, 22 24 C20 29, 15 29, 15 24 Z" stroke="#E61A22" strokeWidth="3" fill="none" />
    <path d="M22 24 C24 29, 29 29, 29 24 C29 19, 24 19, 22 24 Z" stroke="#FFF" strokeWidth="3" fill="none" />
    <text x="48" y="33" fill="#E61A22" fontSize="27" fontWeight="800" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" letterSpacing="-0.5">kotak</text>
  </svg>
);

const SbiLogo = () => (
  <svg viewBox="0 0 200 55" className="h-10 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="20" fill="#00B1EC" />
    <circle cx="24" cy="24" r="7" fill="#FFF" />
    <rect x="22.5" y="24" width="3" height="20" fill="#FFF" />
    <text x="54" y="34" fill="#1C388C" fontSize="33" fontWeight="800" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif">SBI</text>
    <text x="54" y="45" fill="#707070" fontSize="7.5" fontWeight="600" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif">The banker to every Indian</text>
  </svg>
);

const WiproLogo = () => (
  <svg viewBox="0 0 160 50" className="h-9 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="25" r="3" fill="#E1261C" />
    <circle cx="28" cy="17" r="3" fill="#00B1EC" />
    <circle cx="36" cy="25" r="3" fill="#AF923E" />
    <circle cx="28" cy="33" r="3" fill="#E61A22" />
    <circle cx="20" cy="17" r="2.5" fill="#1C388C" />
    <circle cx="36" cy="17" r="2.5" fill="#0A2540" />
    <circle cx="20" cy="33" r="2.5" fill="#E11925" />
    <circle cx="36" cy="33" r="2.5" fill="#005A9C" />
    <circle cx="28" cy="25" r="5" fill="#AF923E" />
    <text x="48" y="33" fill="#1C388C" fontSize="26" fontWeight="700" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif">wipro</text>
  </svg>
);

const CapgeminiLogo = () => (
  <svg viewBox="0 0 180 50" className="h-9 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M25 10 C18 10, 10 18, 10 25 C10 32, 18 38, 25 38 C32 38, 40 32, 40 25 C40 18, 32 10, 25 10 Z" fill="#0070AD" opacity="0.15" />
    <path d="M25 12 C20 12, 14 18, 14 25 C14 30, 18 34, 25 34 C32 34, 36 30, 36 25 C36 18, 30 12, 25 12 Z" stroke="#0070AD" strokeWidth="2.5" fill="none" />
    <path d="M25 34 L25 40 M21 40 L29 40" stroke="#0070AD" strokeWidth="2" strokeLinecap="round" />
    <text x="48" y="32" fill="#0070AD" fontSize="21" fontWeight="700" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" letterSpacing="-0.5">Capgemini</text>
  </svg>
);

const TechMahindraLogo = () => (
  <svg viewBox="0 0 180 50" className="h-9 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="5" y="33" fill="#E11925" fontSize="22" fontWeight="800" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif">Tech</text>
    <text x="60" y="33" fill="#606060" fontSize="22" fontWeight="800" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif">Mahindra</text>
  </svg>
);

const AutodeskLogo = () => (
  <svg viewBox="0 0 180 50" className="h-9 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 36 L25 12 L38 36 M18 28 L32 28" stroke="#0696D7" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <text x="48" y="32" fill="#202020" fontSize="20" fontWeight="800" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" letterSpacing="1">AUTODESK</text>
  </svg>
);

const IntuitLogo = () => (
  <svg viewBox="0 0 160 50" className="h-9 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="10" y="34" fill="#0077C5" fontSize="29" fontWeight="800" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" letterSpacing="-1.5">intuit</text>
  </svg>
);

const DeloitteLogo = () => (
  <svg viewBox="0 0 160 50" className="h-9 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="10" y="34" fill="#000000" fontSize="28" fontWeight="800" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" letterSpacing="-0.5">Deloitte</text>
    <circle cx="120" cy="31" r="3.5" fill="#86BC25" />
  </svg>
);

const COMPANIES = [
  { name: "Google", type: "img", path: "/logos/google.svg" },
  { name: "Microsoft", type: "img", path: "/logos/microsoft.svg" },
  { name: "Amazon", type: "img", path: "/logos/amazon.svg" },
  { name: "Wipro", type: "component", component: <WiproLogo /> },
  { name: "IBM", type: "img", path: "/logos/ibm.svg" },
  { name: "Infosys", type: "img", path: "/logos/infosys.svg" },
  { name: "Capgemini", type: "component", component: <CapgeminiLogo /> },
  { name: "Tech Mahindra", type: "component", component: <TechMahindraLogo /> },
  { name: "Oracle", type: "img", path: "/logos/oracle.svg" },
  { name: "Meta", type: "img", path: "/logos/meta.svg" },
  { name: "Autodesk", type: "component", component: <AutodeskLogo /> },
  { name: "Cisco", type: "img", path: "/logos/cisco.svg" },
  { name: "Intuit", type: "component", component: <IntuitLogo /> },
  { name: "EY", type: "img", path: "/logos/ey.svg" },
  { name: "Accenture", type: "img", path: "/logos/accenture.svg" },
  { name: "Intel", type: "img", path: "/logos/intel.svg" },
  { name: "Dell", type: "img", path: "/logos/dell.svg" },
  { name: "Deloitte", type: "component", component: <DeloitteLogo /> },
  { name: "Reliance", type: "component", component: <RelianceLogo /> },
  { name: "Airtel", type: "component", component: <AirtelLogo /> },
  { name: "Kotak", type: "component", component: <KotakLogo /> },
  { name: "SBI", type: "component", component: <SbiLogo /> },
  { name: "Apple", type: "img", path: "/logos/apple.svg" },
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
          {[...COMPANIES, ...COMPANIES, ...COMPANIES].map((company, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-36 md:w-44 mx-6 md:mx-8 hover:scale-105 transition-transform duration-300"
              title={company.name}
            >
              {company.type === "component" ? (
                company.component
              ) : (
                <img
                  src={company.path}
                  alt={`${company.name} Logo`}
                  className="h-8 md:h-10 w-auto object-contain"
                  loading="lazy"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
