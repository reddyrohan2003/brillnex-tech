"use client";

import { motion } from "framer-motion";
import { Eye, Target } from "lucide-react";

export default function VisionMission() {
  return (
    <section className="py-20 bg-text-primary text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Our Vision & Mission</h2>
          <p className="text-gray-300 text-lg">
            [Placeholder] We are driven by a strong purpose to transform the educational landscape and empower the next generation of tech leaders.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          
          {/* Vision Card */}
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-primary/50 group"
          >
            <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary transition-colors duration-300">
              <Eye className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-2xl font-bold mb-4 font-heading">Our Vision</h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              [Placeholder] To become the global standard for technology education, creating a world where anyone, anywhere can build a meaningful career in tech through accessible, high-quality, and industry-relevant training.
            </p>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-accent/50 group"
          >
            <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-accent transition-colors duration-300">
              <Target className="w-8 h-8 text-accent group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-2xl font-bold mb-4 font-heading">Our Mission</h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              [Placeholder] To equip learners with cutting-edge technical skills, foster innovation, and connect top talent with leading enterprises, ensuring our graduates are not just job-ready, but future-ready.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
