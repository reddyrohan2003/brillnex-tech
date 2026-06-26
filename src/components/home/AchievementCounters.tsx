"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const Counter = ({ end, suffix = "", duration = 2000 }: { end: number, suffix?: string, duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Easing function: easeOutExpo
      const easeOut = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);
      
      setCount(Math.floor(end * easeOut));

      if (progress < duration) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isInView]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold font-heading text-white mb-2">
      {count}{suffix}
    </span>
  );
};

export default function AchievementCounters() {
  const stats = [
    { number: 100, suffix: "+", label: "Students Trained" },
    { number: 120, suffix: "+", label: "Hours Completed" },
    { number: 25, suffix: "+", label: "Professional Courses" },
    { number: 30, suffix: "+", label: "Hiring Partners" },
  ];

  return (
    <section className="py-20 bg-text-primary relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 text-center divide-x-0 md:divide-x divide-gray-700">
          
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center p-4"
            >
              <Counter end={stat.number} suffix={stat.suffix} />
              <p className="text-gray-400 font-medium">{stat.label}</p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
