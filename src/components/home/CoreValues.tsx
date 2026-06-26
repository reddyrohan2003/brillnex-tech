"use client";

import { motion } from "framer-motion";
import { Lightbulb, Award, TrendingUp, ShieldCheck } from "lucide-react";

export default function CoreValues() {
  const values = [
    {
      icon: <Lightbulb size={32} />,
      title: "Innovation",
      description: "[Placeholder] We embrace new technologies and forward-thinking methodologies to stay ahead of industry trends.",
      color: "text-blue-500",
      bgColor: "bg-blue-50",
    },
    {
      icon: <Award size={32} />,
      title: "Excellence",
      description: "[Placeholder] We strive for the highest quality in our curriculum, teaching methods, and student outcomes.",
      color: "text-orange-500",
      bgColor: "bg-orange-50",
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Persistence",
      description: "[Placeholder] We foster resilience and continuous learning, ensuring our students overcome challenges to succeed.",
      color: "text-green-500",
      bgColor: "bg-green-50",
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Integrity",
      description: "[Placeholder] We operate with transparency, honesty, and a commitment to delivering on our promises to students.",
      color: "text-purple-500",
      bgColor: "bg-purple-50",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-semibold text-sm tracking-wider uppercase mb-3">Our Principles</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Our Core Values</h2>
        </div>

        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white border border-gray-100 p-8 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(15,82,186,0.1)] transition-all duration-300"
            >
              <div className={`w-16 h-16 ${value.bgColor} ${value.color} rounded-2xl flex items-center justify-center mb-6`}>
                {value.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 font-heading">{value.title}</h3>
              <p className="text-text-secondary leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
