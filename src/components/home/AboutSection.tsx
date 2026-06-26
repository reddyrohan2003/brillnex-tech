"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Monitor, BookOpen, Briefcase, GraduationCap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AboutSection() {
  const features = [
    { icon: <Monitor className="w-5 h-5" />, title: "IT Courses" },
    { icon: <BookOpen className="w-5 h-5" />, title: "Practical Training" },
    { icon: <Briefcase className="w-5 h-5" />, title: "Career Guidance" },
    { icon: <GraduationCap className="w-5 h-5" />, title: "Industry Experts" },
  ];

  return (
    <section id="about" className="py-20 bg-background-alt">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square max-w-lg mx-auto rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image 
                src="/about-student.png" 
                alt="Confident Indian student holding a laptop" 
                fill 
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent/10 rounded-full blur-lg -z-10" />
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-semibold text-sm tracking-wider uppercase mb-3">About Brillnex</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Transform Your Potential Into Expertise
            </h2>
            
            <p className="text-text-secondary mb-8 leading-relaxed text-lg">
              Join a thriving community of passionate learners. At Brillnex, we provide the personalized mentorship, hands-on industry projects, and real-world skills you need to land your dream job in tech. Your success story starts right here.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-primary flex-shrink-0">
                    {feature.icon}
                  </div>
                  <span className="font-heading font-semibold text-text-primary">{feature.title}</span>
                </div>
              ))}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
