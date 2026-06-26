"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Star, Clock, BookOpen, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function TrendingCourses() {
  const coursesRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  const courses = [
    {
      title: "Full Stack Web Development",
      category: "Development",
      desc: "Master MERN stack with real-world projects and deploy scalable web applications.",
      rating: 4.9,
      reviews: 1240,
      duration: "6 Months",
      modules: 24,
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600&h=340&fit=crop",
    },
    {
      title: "Artificial Intelligence & ML",
      category: "Data Science",
      desc: "Learn Python, neural networks, and build AI models from scratch.",
      rating: 4.8,
      reviews: 980,
      duration: "8 Months",
      modules: 32,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=340&fit=crop",
    },
    {
      title: "AWS Cloud Computing",
      category: "Cloud & DevOps",
      desc: "Prepare for AWS Solutions Architect certification with hands-on labs.",
      rating: 4.9,
      reviews: 1560,
      duration: "4 Months",
      modules: 18,
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=340&fit=crop",
    },
    {
      title: "Data Science Bootcamp",
      category: "Data Science",
      desc: "Analyze complex datasets using Pandas, NumPy, and Tableau.",
      rating: 4.7,
      reviews: 840,
      duration: "6 Months",
      modules: 20,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=340&fit=crop",
    },
    {
      title: "Embedded Systems & IoT",
      category: "Engineering",
      desc: "Learn microcontrollers, C programming, and build smart devices.",
      rating: 4.8,
      reviews: 620,
      duration: "5 Months",
      modules: 22,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=340&fit=crop",
    },
    {
      title: "Advanced Medical Coding",
      category: "Healthcare",
      desc: "Comprehensive ICD-10, CPT training for a rewarding healthcare career.",
      rating: 4.9,
      reviews: 1120,
      duration: "3 Months",
      modules: 15,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=340&fit=crop",
    },
  ];

  const services = [
    {
      title: "Website Building",
      category: "Development",
      desc: "Custom responsive website design and development tailored to showcase your business or personal portfolio.",
      rating: 4.9,
      reviews: 120,
      duration: "1-2 Weeks",
      modulesText: "SEO Friendly",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=340&fit=crop",
    },
    {
      title: "App Building",
      category: "Mobile",
      desc: "Cross-platform mobile application development for iOS and Android built with modern frameworks.",
      rating: 4.8,
      reviews: 85,
      duration: "3-4 Weeks",
      modulesText: "iOS & Android",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=340&fit=crop",
    },
    {
      title: "ATS Resume Support",
      category: "Career Services",
      desc: "Craft an ATS-compliant resume and optimize your LinkedIn profile to get noticed by top tech recruiters.",
      rating: 4.9,
      reviews: 340,
      duration: "2-3 Days",
      modulesText: "Resume & LI Optimization",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=340&fit=crop",
    },
    {
      title: "Career Support",
      category: "Mentorship",
      desc: "1-on-1 career path guidance, mock interviews, and placement assistance with our hiring partners.",
      rating: 4.9,
      reviews: 510,
      duration: "1 Month",
      modulesText: "1-on-1 Sessions",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=340&fit=crop",
    },
  ];

  const handleScroll = (ref: React.RefObject<HTMLDivElement | null>, direction: "left" | "right") => {
    if (ref.current) {
      const { scrollLeft } = ref.current;
      const cardWidth = ref.current.firstElementChild 
        ? (ref.current.firstElementChild as HTMLElement).offsetWidth + 24 
        : 320;
      ref.current.scrollTo({
        left: direction === "left" ? scrollLeft - cardWidth : scrollLeft + cardWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="courses" className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* ROW 1: OUR SPECIAL SERVICES */}
        <div className="mb-20">
          <div className="flex flex-row items-center justify-between mb-10 gap-6">
            <div>
              <p className="text-primary font-semibold text-sm tracking-wider uppercase mb-3">Brillnex Support</p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Our Special Services</h2>
            </div>
            
            {/* Scroll buttons for Services */}
            <div className="flex items-center gap-3">
              <button 
                onClick={() => handleScroll(servicesRef, "left")}
                aria-label="Previous Services"
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white hover:border-primary transition-all active:scale-95 cursor-pointer"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={() => handleScroll(servicesRef, "right")}
                aria-label="Next Services"
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white hover:border-primary transition-all active:scale-95 cursor-pointer"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Services horizontal slider container */}
          <div 
            ref={servicesRef}
            className="flex gap-6 overflow-x-auto scrollbar-none scroll-smooth pb-6 -mx-4 px-4 md:-mx-6 md:px-6"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="flex-shrink-0 w-full sm:w-[calc((100%-24px)/2)] md:w-[calc((100%-48px)/3)] lg:w-[calc((100%-72px)/4)] bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                {/* Service Image */}
                <div className="w-full aspect-[16/9] relative overflow-hidden bg-gray-100">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-text-primary">
                    {service.category}
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex items-center gap-1 text-yellow-500 mb-2.5 text-xs font-medium">
                    <Star size={14} className="fill-yellow-500" />
                    <span>{service.rating}</span>
                    <span className="text-gray-400">({service.reviews})</span>
                  </div>
                  
                  <h3 className="text-sm sm:text-base font-bold mb-2 font-heading group-hover:text-primary transition-colors line-clamp-1">{service.title}</h3>
                  <p className="text-text-secondary text-xs sm:text-[13px] leading-relaxed mb-4 flex-grow line-clamp-2">
                    {service.desc}
                  </p>

                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4 pb-4 border-b border-gray-100">
                    <div className="flex items-center gap-1.5">
                      <Clock size={14} />
                      <span>{service.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <BookOpen size={14} />
                      <span>{service.modulesText}</span>
                    </div>
                  </div>

                  <Link href="#contact" className="w-full btn-secondary text-center py-2 text-xs sm:text-sm font-semibold">
                    Contact Us
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ROW 2: TRENDING COURSES */}
        <div>
          <div className="flex flex-row items-center justify-between mb-10 gap-6">
            <div>
              <p className="text-primary font-semibold text-sm tracking-wider uppercase mb-3">Top Programs</p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Trending Courses</h2>
            </div>
            
            {/* Scroll buttons for Courses */}
            <div className="flex items-center gap-3">
              <button 
                onClick={() => handleScroll(coursesRef, "left")}
                aria-label="Previous Courses"
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white hover:border-primary transition-all active:scale-95 cursor-pointer"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={() => handleScroll(coursesRef, "right")}
                aria-label="Next Courses"
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white hover:border-primary transition-all active:scale-95 cursor-pointer"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Courses horizontal slider container */}
          <div 
            ref={coursesRef}
            className="flex gap-6 overflow-x-auto scrollbar-none scroll-smooth pb-6 -mx-4 px-4 md:-mx-6 md:px-6"
          >
            {courses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="flex-shrink-0 w-full sm:w-[calc((100%-24px)/2)] md:w-[calc((100%-48px)/3)] lg:w-[calc((100%-72px)/4)] bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                {/* Course Image */}
                <div className="w-full aspect-[16/9] relative overflow-hidden bg-gray-100">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-text-primary">
                    {course.category}
                  </div>
                </div>

                {/* Course Content */}
                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex items-center gap-1 text-yellow-500 mb-2.5 text-xs font-medium">
                    <Star size={14} className="fill-yellow-500" />
                    <span>{course.rating}</span>
                    <span className="text-gray-400">({course.reviews})</span>
                  </div>
                  
                  <h3 className="text-sm sm:text-base font-bold mb-4 font-heading group-hover:text-primary transition-colors line-clamp-1">{course.title}</h3>
                  
                  <ul className="space-y-2 text-xs text-text-secondary mb-6 flex-grow">
                    <li className="flex items-center gap-2">
                      <span className="text-primary font-bold text-sm">✓</span>
                      <span>4 Months</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary font-bold text-sm">✓</span>
                      <span>Online Interactive</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary font-bold text-sm">✓</span>
                      <span>Expert mentors</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary font-bold text-sm">✓</span>
                      <span>100% Placement Support</span>
                    </li>
                  </ul>

                  <Link href="#contact" className="w-full btn-secondary text-center py-2 text-xs sm:text-sm font-semibold">
                    Enroll Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
