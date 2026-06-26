"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Send } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Do I need prior coding experience to join?",
    answer: "No prior experience is required for our beginner-friendly courses. We start from the basics and gradually move to advanced concepts. For specialized programs, prerequisites will be clearly mentioned."
  },
  {
    question: "How does the placement assistance work?",
    answer: "Our dedicated placement team helps with resume building, LinkedIn profile optimization, mock interviews, and connecting you directly with our network of 100+ hiring partners."
  },

  {
    question: "Are the classes live or pre-recorded?",
    answer: "We offer both! Our Self Paced programs are entirely pre-recorded, while our Skill, Career, and Mentor programs include live weekly sessions and real-time interaction with instructors."
  },
  {
    question: "Will I get a certificate upon completion?",
    answer: "Yes, all students who successfully complete their coursework and final projects will receive an industry-recognized certificate from Brillnex."
  },
  {
    question: "What kind of projects will I work on?",
    answer: "You will build real-world applications depending on your track. Web developers build full-stack apps, data scientists analyze real datasets, and cloud engineers deploy scalable infrastructure."
  }
];

export default function LeadFormFAQ() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left: Lead Generation Form */}
          <div id="contact" className="bg-background-alt p-8 md:p-10 rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] scroll-mt-24">
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-bold font-heading mb-2">Request a Callback</h3>
              <p className="text-text-secondary text-sm">Fill out the form below and our career counselor will get in touch with you shortly.</p>
            </div>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-semibold text-text-primary mb-1.5" htmlFor="name">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                  placeholder="John Doe"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    suppressHydrationWarning
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-text-primary mb-1.5" htmlFor="phone">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-text-primary mb-1.5" htmlFor="course">Interested Course</label>
                <select 
                  id="course" 
                  defaultValue=""
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white appearance-none"
                >
                  <option value="" disabled>Select a course</option>
                  <option value="web">Full Stack Web Development</option>
                  <option value="ai">Artificial Intelligence & ML</option>
                  <option value="cloud">AWS Cloud Computing</option>
                  <option value="data">Data Science Bootcamp</option>
                  <option value="other">Other / Not Sure</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-text-primary mb-1.5" htmlFor="message">Message (Optional)</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white resize-none"
                  placeholder="Any specific questions or goals?"
                />
              </div>

              <button type="submit" className="w-full btn-primary flex items-center justify-center gap-2 group mt-2">
                Send Message
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>

          {/* Right: FAQ Accordion */}
          <div className="flex flex-col justify-center">
            <div className="mb-8">
              <p className="text-primary font-semibold text-sm tracking-wider uppercase mb-3">Got Questions?</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-text-secondary leading-relaxed">Find answers to common questions about our courses, mentoring, and placement process.</p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className={cn(
                    "border rounded-xl transition-all duration-300 overflow-hidden",
                    openFaqIndex === index ? "border-primary bg-primary/5 shadow-sm" : "border-gray-200 bg-white hover:border-gray-300"
                  )}
                >
                  <button
                    className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
                    onClick={() => toggleFaq(index)}
                  >
                    <span className="font-heading font-semibold text-text-primary pr-4">{faq.question}</span>
                    <div className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300",
                      openFaqIndex === index ? "bg-primary text-white rotate-180" : "bg-gray-100 text-gray-500"
                    )}>
                      <ChevronDown size={18} />
                    </div>
                  </button>
                  <AnimatePresence>
                    {openFaqIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-5 pt-1 text-text-secondary text-sm leading-relaxed border-t border-primary/10 mt-2">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
