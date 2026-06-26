"use client";

import { motion } from "framer-motion";
import { UserCheck, BookOpen, Clock, Code, Award, Briefcase } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function WhyChooseUs() {
  const leftBenefits = [
    { icon: <UserCheck size={24} />, title: "Experienced Trainers", desc: "Learn from industry professionals." },
    { icon: <BookOpen size={24} />, title: "Personalized Learning", desc: "Adaptive curriculum for your pace." },
    { icon: <Clock size={24} />, title: "Flexible Schedule", desc: "Classes that fit your lifestyle." },
  ];

  const rightBenefits = [
    { icon: <Code size={24} />, title: "Industry Projects", desc: "Work on real-world case studies." },
    { icon: <Award size={24} />, title: "Certification Support", desc: "Global certification guidance." },
    { icon: <Briefcase size={24} />, title: "Placement Assistance", desc: "100% job placement support." },
  ];

  const BenefitCard = ({ icon, title, desc, align = "left" }: { icon: React.ReactNode, title: string, desc: string, align?: "left" | "right" }) => (
    <motion.div 
      whileHover={{ scale: 1.05, y: -5 }}
      className={cn(
        "flex items-start gap-5 p-5 rounded-2xl bg-white/5 backdrop-blur-xl shadow-2xl border border-white/10 transition-all hover:bg-white/10 hover:border-white/20",
        align === "left" ? "flex-row-reverse text-right" : "flex-row text-left"
      )}
    >
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 text-blue-400 flex items-center justify-center flex-shrink-0 shadow-inner">
        {icon}
      </div>
      <div>
        <h4 className="font-bold !text-white mb-1 font-heading text-lg">{title}</h4>
        <p className="text-sm !text-slate-300">{desc}</p>
      </div>
    </motion.div>
  );

  return (
    <section className="relative py-24 bg-slate-950 overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(14,165,233,0.1),transparent_50%)]" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] -z-10 translate-x-1/3 translate-y-1/3" />
      <div className="absolute top-40 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] -z-10 -translate-x-1/2" />

      <div className="container relative mx-auto px-4 md:px-6 z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 shadow-sm">
            <span className="!text-blue-400 font-semibold text-sm tracking-wider uppercase">Why Choose Us</span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold !text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 tracking-tight pb-2">The Brillnex Advantage</h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-0">
          
          {/* Left Benefits */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6 w-full lg:w-1/3 z-10"
          >
            {leftBenefits.map((benefit, i) => (
              <div key={i} className={cn("lg:relative", i === 1 ? "lg:-mr-12" : "")}>
                <BenefitCard {...benefit} align="left" />
              </div>
            ))}
          </motion.div>

          {/* Center Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/3 relative flex justify-center z-0 my-16 lg:my-0"
          >
            {/* Glowing rings around the central logo */}
            <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-[80px] scale-150 -z-10 animate-pulse" />
            <div className="absolute inset-0 border border-white/10 rounded-full scale-125 -z-10" />
            <div className="absolute inset-0 border border-white/5 rounded-full scale-150 -z-10" />
            
            <div className="relative w-48 h-48 md:w-56 md:h-56 lg:w-72 lg:h-72 flex items-center justify-center p-4">
              <Image 
                src="/logo.png" 
                alt="Brillnex Logo" 
                fill 
                className="object-contain drop-shadow-[0_0_30px_rgba(14,165,233,0.5)]"
              />
            </div>
          </motion.div>

          {/* Right Benefits */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6 w-full lg:w-1/3 z-10"
          >
            {rightBenefits.map((benefit, i) => (
              <div key={i} className={cn("lg:relative", i === 1 ? "lg:-ml-12" : "")}>
                <BenefitCard {...benefit} align="right" />
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
