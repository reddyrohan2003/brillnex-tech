import { motion } from "framer-motion";

const COMPANIES = [
  { name: "Google", domain: "google.com" },
  { name: "Microsoft", domain: "microsoft.com" },
  { name: "Amazon", domain: "amazon.com" },
  { name: "Wipro", domain: "wipro.com" },
  { name: "IBM", domain: "ibm.com" },
  { name: "Infosys", domain: "infosys.com" },
  { name: "Capgemini", domain: "capgemini.com" },
  { name: "Tech Mahindra", domain: "techmahindra.com" },
  { name: "Oracle", domain: "oracle.com" },
  { name: "Meta", domain: "meta.com" },
  { name: "Autodesk", domain: "autodesk.com" },
  { name: "Cisco", domain: "cisco.com" },
  { name: "Intuit", domain: "intuit.com" },
  { name: "EY", domain: "ey.com" },
  { name: "Accenture", domain: "accenture.com" },
  { name: "Intel", domain: "intel.com" },
  { name: "Dell", domain: "dell.com" },
  { name: "Deloitte", domain: "deloitte.com" },
  { name: "Reliance", domain: "ril.com" },
  { name: "Airtel", domain: "airtel.in" },
  { name: "Apple", domain: "apple.com" },
];

export default function HiringPartners() {
  return (
    <section className="py-8 border-y border-gray-100 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 mb-6 text-center">
        <p className="text-gray-500 font-medium text-sm tracking-wider uppercase">
          Our Alumni Works At
        </p>
      </div>

      <div className="relative w-full flex overflow-hidden group">
        {/* Fade gradients */}
        <div className="absolute top-0 bottom-0 left-0 w-16 md:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 md:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-infinite-scroll group-hover:[animation-play-state:paused]">
          {[...COMPANIES, ...COMPANIES, ...COMPANIES].map((company, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-24 md:w-32 mx-3 md:mx-4 hover:scale-110 transition-transform duration-300"
              title={company.name}
            >
              <img 
                src={`https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://${company.domain}&size=128`} 
                alt={`${company.name} Logo`} 
                className="w-12 h-12 object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
