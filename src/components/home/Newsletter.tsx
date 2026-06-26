"use client";

import { motion } from "framer-motion";
import { MessageCircle, Users, ArrowRight } from "lucide-react";

export default function WhatsAppCommunity() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background Gradient - WhatsApp Green */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-green-800" />
          
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-300/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10 px-6 py-14 md:py-16 md:px-12 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-10">
            
            <div className="text-center lg:text-left max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 border border-white/20 mb-6 text-white text-sm font-semibold backdrop-blur-sm shadow-sm">
                <Users size={16} />
                <span>Join Our Growing Tech Community</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight">
                Join Our WhatsApp Community
              </h2>
              <p className="text-emerald-50 text-lg md:text-xl font-medium max-w-xl">
                Get instant access to free tech resources, career advice, exclusive course discounts, and real-time job updates directly on your phone.
              </p>
            </div>
            
            <div className="w-full lg:w-auto flex flex-col items-center lg:items-end">
              <a 
                href="#"
                className="group flex items-center justify-center gap-3 bg-white text-green-700 font-heading font-bold text-lg px-8 py-4 rounded-xl hover:bg-gray-50 hover:scale-105 transition-all shadow-xl w-full sm:w-auto"
              >
                <MessageCircle size={24} className="fill-green-600 text-green-600" />
                Join the Group
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <p className="text-center lg:text-right text-white/70 text-sm mt-4 font-medium">
                100% Free. No spam, ever.
              </p>
            </div>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
}
