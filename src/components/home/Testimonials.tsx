"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Jenkins",
      designation: "Frontend Developer at Google",
      review: "The Career Focused program completely changed my life. The curriculum is perfectly aligned with what the industry demands, and the placement support is phenomenal. I landed my dream job within 2 months of graduation.",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      designation: "Data Scientist at Amazon",
      review: "The mentorship I received was invaluable. Having an industry expert review my code and guide my projects gave me the confidence to ace technical interviews. Highly recommend to anyone serious about their tech career.",
      rating: 5,
    },
    {
      id: 3,
      name: "Priya Patel",
      designation: "Cloud Architect at Microsoft",
      review: "Brillnex provided the structured learning path I was missing. The hands-on AWS labs and real-world case studies made complex cloud concepts easy to understand and apply.",
      rating: 5,
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-text-primary relative overflow-hidden">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 bg-primary/20 opacity-30 mix-blend-multiply" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/30 via-transparent to-transparent opacity-60" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left: Visual & Intro */}
          <div className="text-white">
            <p className="text-accent font-semibold text-sm tracking-wider uppercase mb-3">Student Success Stories</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Don&apos;t Just Take Our Word For It
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-md leading-relaxed">
              Discover how Brillnex has helped thousands of students achieve their career goals and land jobs at top tech companies worldwide.
            </p>
            
            <div className="flex items-center gap-4 mb-10 lg:mb-0">
              <div className="flex -space-x-4">
                <div className="w-12 h-12 rounded-full border-2 border-text-primary bg-gray-400" />
                <div className="w-12 h-12 rounded-full border-2 border-text-primary bg-gray-500" />
                <div className="w-12 h-12 rounded-full border-2 border-text-primary bg-gray-600" />
                <div className="w-12 h-12 rounded-full border-2 border-text-primary bg-primary flex items-center justify-center text-sm font-bold text-white">
                  +2k
                </div>
              </div>
              <div className="text-sm">
                <div className="flex items-center gap-1 text-yellow-400 mb-1">
                  <Star size={14} className="fill-yellow-400" />
                  <Star size={14} className="fill-yellow-400" />
                  <Star size={14} className="fill-yellow-400" />
                  <Star size={14} className="fill-yellow-400" />
                  <Star size={14} className="fill-yellow-400" />
                </div>
                <span className="font-medium text-white">4.9/5 from 2,000+ reviews</span>
              </div>
            </div>
          </div>

          {/* Right: Testimonial Carousel */}
          <div className="relative">
            <Quote className="absolute -top-10 -left-6 w-20 h-20 text-white/10 rotate-180" />
            
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl relative">
              <div className="min-h-[250px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-1 text-yellow-500 mb-6">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} size={18} className="fill-yellow-500" />
                      ))}
                    </div>
                    
                    <p className="text-text-primary text-lg md:text-xl font-medium leading-relaxed mb-8 italic">
                      &quot;{testimonials[currentIndex].review}&quot;
                    </p>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-gray-200 rounded-full flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-text-primary font-heading text-lg">{testimonials[currentIndex].name}</h4>
                        <p className="text-text-secondary text-sm">{testimonials[currentIndex].designation}</p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
              
              {/* Controls */}
              <div className="absolute -bottom-6 right-10 flex gap-2">
                <button 
                  onClick={prevTestimonial}
                  className="w-12 h-12 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center text-text-primary hover:bg-gray-50 hover:text-primary transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  onClick={nextTestimonial}
                  className="w-12 h-12 bg-primary rounded-full shadow-lg shadow-primary/30 flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
