"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function PricingPlans() {
  const plans = [
    {
      name: "Self Paced",
      price: "₹7,999",
      period: "/month",
      desc: "Learn independently at your own pace with recorded classes and support.",
      isRecommended: false,
      features: [
        { name: "Recorded Classes", included: true },
        { name: "3 Projects", included: true },
        { name: "1 year LMS Access", included: true },
        { name: "Fixed LOR", included: true },
        { name: "Mock Interview Practice", included: true },
        { name: "ATS- Resume Building", included: true },
        { name: "Master Class", included: false },
        { name: "Aptitude", included: false },
        { name: "Weekend Mock tests", included: false },
        { name: "Career Guidance with Top MNCs", included: false },
        { name: "GitHub portfolio building", included: false },
        { name: "Parent Portal", included: false },
        { name: "National level Hackathon", included: false },
        { name: "Letter Of Recommendation", included: false },
        { name: "5+ Placement Interviews", included: false },
        { name: "100% Job Assistance", included: false },
      ],
    },
    {
      name: "Mentor Lead",
      price: "₹9,999",
      period: "/month",
      desc: "Live guidance, projects, and active mentor mentorship support.",
      isRecommended: false,
      features: [
        { name: "4 Months Live classes", included: true },
        { name: "3 Projects", included: true },
        { name: "1 year LMS Access", included: true },
        { name: "Fixed LOR", included: true },
        { name: "Mock Interview Practice", included: true },
        { name: "ATS- Resume Building", included: true },
        { name: "Master Class", included: true },
        { name: "Aptitude", included: false },
        { name: "Weekend Mock tests", included: false },
        { name: "Career Guidance with Top MNCs", included: false },
        { name: "GitHub portfolio building", included: false },
        { name: "Parent Portal", included: false },
        { name: "National level Hackathon", included: false },
        { name: "Letter Of Recommendation", included: false },
        { name: "5+ Placement Interviews", included: false },
        { name: "100% Job Assistance", included: false },
      ],
    },
    {
      name: "Skill Focused",
      price: "₹14,999",
      period: "/month",
      desc: "Intense skill focus, weekly mock tests, and aptitude coaching.",
      isRecommended: false,
      features: [
        { name: "4 Months Live classes", included: true },
        { name: "3 Projects", included: true },
        { name: "Life time LMS Access", included: true },
        { name: "Fixed LOR", included: true },
        { name: "Mock Interview Practice", included: true },
        { name: "ATS- Resume Building", included: true },
        { name: "Master Class", included: true },
        { name: "Aptitude", included: true },
        { name: "Weekend Mock tests", included: true },
        { name: "Career Guidance with Top MNCs", included: false },
        { name: "GitHub portfolio building", included: false },
        { name: "Parent Portal", included: false },
        { name: "National level Hackathon", included: false },
        { name: "Letter Of Recommendation", included: false },
        { name: "5+ Placement Interviews", included: false },
        { name: "100% Job Assistance", included: false },
      ],
    },
    {
      name: "Career Focused",
      price: "₹19,999",
      period: "/month",
      desc: "Complete placement assurance, interviews, and hackathon participation.",
      isRecommended: true,
      features: [
        { name: "4 Months Live classes", included: true },
        { name: "3 Projects", included: true },
        { name: "Life time LMS Access", included: true },
        { name: "Fixed LOR", included: true },
        { name: "Mock Interview Practice", included: true },
        { name: "ATS- Resume Building", included: true },
        { name: "Master Class", included: true },
        { name: "Aptitude", included: true },
        { name: "Weekend Mock tests", included: true },
        { name: "Career Guidance with Top MNCs", included: true },
        { name: "GitHub portfolio building", included: true },
        { name: "Parent Portal", included: true },
        { name: "National level Hackathon", included: true },
        { name: "Letter Of Recommendation", included: true },
        { name: "5+ Placement Interviews", included: true },
        { name: "100% Job Assistance", included: true },
      ],
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-background-alt">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-semibold text-sm tracking-wider uppercase mb-3">Investment in your future</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Choose Your Learning Path</h2>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 max-w-7xl mx-auto items-start">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                "relative bg-white rounded-3xl p-8 transition-all duration-500 group",
                plan.isRecommended 
                  ? "border-2 border-primary shadow-2xl scale-100 xl:scale-105 z-10" 
                  : "border border-gray-100 shadow-md hover:shadow-xl"
              )}
            >
              {plan.isRecommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide">
                  Recommended
                </div>
              )}
              
              <h3 className="text-xl font-bold mb-2 font-heading">{plan.name}</h3>
              <p className="text-text-secondary text-sm mb-6 min-h-[40px]">{plan.desc}</p>
              
              <div className="mb-6">
                <span className="text-4xl font-bold font-heading">{plan.price}</span>
                <span className="text-gray-400 font-medium">{plan.period}</span>
              </div>
              
              <div className="relative mb-8">
                {/* Features list container - expands smoothly on hover */}
                <div className="max-h-[220px] group-hover:max-h-[600px] overflow-hidden transition-all duration-700 ease-in-out space-y-3.5 pr-1">
                  {plan.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-start gap-3">
                      {feature.included ? (
                        <div className="w-5 h-5 rounded-full bg-green-50 text-green-600 flex items-center justify-center flex-shrink-0 mt-0.5 border border-green-100">
                          <Check size={11} strokeWidth={3} />
                        </div>
                      ) : (
                        <div className="w-5 h-5 rounded-full bg-red-50 text-red-400 flex items-center justify-center flex-shrink-0 mt-0.5 border border-red-100">
                          <X size={11} strokeWidth={3} />
                        </div>
                      )}
                      <span className={cn(
                        "text-sm transition-colors duration-300",
                        feature.included ? "text-text-primary font-medium" : "text-gray-400 line-through decoration-gray-200"
                      )}>
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Fade effect at the bottom of the list when collapsed */}
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent pointer-events-none group-hover:opacity-0 transition-opacity duration-500" />
                
                {/* Interactive indicator to nudge user to hover */}
                <div className="mt-4 text-center group-hover:hidden transition-all duration-300">
                  <p className="text-[10px] font-bold text-primary tracking-wider uppercase bg-primary/5 rounded-full py-1.5 px-3 inline-block animate-pulse">
                    + {plan.features.length - 6} features (hover to see)
                  </p>
                </div>
              </div>
              
              <a 
                href={`https://wa.me/917204398855?text=${encodeURIComponent(`Hello! I am interested in the *${plan.name}* learning path. Please provide more details.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "w-full block text-center py-3 rounded-lg font-heading font-semibold transition-all cursor-pointer",
                  plan.isRecommended 
                    ? "bg-primary text-white hover:bg-blue-700 shadow-lg shadow-primary/25" 
                    : "bg-white border border-gray-200 text-text-primary hover:border-primary hover:text-primary"
                )}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
