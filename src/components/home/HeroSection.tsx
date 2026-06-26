"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star, Award, Users } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-br from-blue-50 to-white">
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 rounded-bl-[100px] -z-10" />
      <div className="absolute top-20 left-10 w-24 h-24 bg-accent/10 rounded-full blur-2xl -z-10" />
      <div className="absolute bottom-10 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6">
              <Star size={16} className="fill-primary" />
              <span>Next-Gen Tech Education</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Empower Your Tech Journey With <span className="text-primary">Brillnex</span>
            </h1>
            
            <p className="text-lg text-text-secondary mb-8 leading-relaxed max-w-xl">
              Master the skills that drive the future. Join Brillnex to learn from industry leaders, build real-world projects, and accelerate your career in technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/courses" className="btn-primary flex items-center justify-center gap-2 group">
                Explore Courses
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/#contact" className="btn-secondary flex items-center justify-center">
                Contact Us
              </Link>
            </div>
            
            <div className="mt-10 flex items-center gap-6 text-sm text-text-secondary font-medium">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                  ✓
                </div>
                Placement Support
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-primary flex items-center justify-center">
                  ✓
                </div>
                Industry Projects
              </div>
            </div>
          </motion.div>

          {/* Right Content - Images and floating cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
            <div className="relative w-full max-w-[320px] md:max-w-[400px] flex items-center justify-center">
              <Image 
                src="/logo.png" 
                alt="Brillnex Logo" 
                width={400} 
                height={400} 
                className="w-full h-auto object-contain"
                priority
              />
            </div>

            {/* Floating Card 1 */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-10 -left-6 md:-left-12 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-4 z-10"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                <Award size={24} />
              </div>
              <div>
                <p className="font-bold text-text-primary">100%</p>
                <p className="text-xs text-text-secondary font-medium">Job Assistance</p>
              </div>
            </motion.div>

            {/* Floating Card 2 */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute bottom-20 -right-6 md:-right-8 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-4 z-10"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <Users size={24} />
              </div>
              <div>
                <p className="font-bold text-text-primary">Expert Mentors</p>
                <p className="text-xs text-text-secondary font-medium">Industry Leaders</p>
              </div>
            </motion.div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
