"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export default function PricingPlans() {
  const plans = [
    {
      name: "Self Paced",
      price: "$299",
      period: "/course",
      desc: "Learn independently at your own pace with full course access.",
      features: [
        "Lifetime access to materials",
        "Pre-recorded video lectures",
        "Community forum access",
        "Certificate of completion",
      ],
      isRecommended: false,
    },
    {
      name: "Skill Focused",
      price: "$499",
      period: "/course",
      desc: "Deep dive into specific technical skills with expert feedback.",
      features: [
        "Everything in Self Paced",
        "Weekly live Q&A sessions",
        "Code reviews & feedback",
        "2 Real-world projects",
      ],
      isRecommended: false,
    },
    {
      name: "Career Focused",
      price: "$899",
      period: "/program",
      desc: "Comprehensive training designed to get you hired quickly.",
      features: [
        "Everything in Skill Focused",
        "1-on-1 Career mentoring",
        "Resume & Interview prep",
        "Placement assistance guarantee",
        "5+ Real-world projects",
      ],
      isRecommended: true,
    },
    {
      name: "Mentor Led",
      price: "$1,499",
      period: "/program",
      desc: "Premium 1-on-1 mentorship throughout your learning journey.",
      features: [
        "Everything in Career Focused",
        "Weekly 1-on-1 mentoring",
        "Personalized curriculum",
        "Priority support access",
        "Mock technical interviews",
      ],
      isRecommended: false,
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
                "relative bg-white rounded-3xl p-8 transition-all duration-300",
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
              
              <div className="mb-8">
                <span className="text-4xl font-bold font-heading">{plan.price}</span>
                <span className="text-gray-400 font-medium">{plan.period}</span>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span className="text-sm text-text-secondary">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href={`https://wa.me/917204398855?text=${encodeURIComponent(`Hello! I am interested in the *${plan.name}* learning path. Please provide more details.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "w-full block text-center py-3 rounded-lg font-heading font-semibold transition-all",
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
