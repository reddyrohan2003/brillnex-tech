"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Clock, BookOpen, Search, ArrowRight, Sparkles } from "lucide-react";

// Full catalog of courses
const courses = [
  {
    id: "web-dev",
    title: "Full Stack Web Development",
    type: "course",
    category: "Development",
    desc: "Master the MERN stack (MongoDB, Express, React, Node.js) with real-world projects and learn to deploy scalable, modern web applications.",
    rating: 4.9,
    reviews: 1240,
    duration: "6 Months",
    metaText: "24 Modules",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600&h=340&fit=crop",
    features: ["MERN Stack", "Next.js & Tailwind CSS", "REST APIs & Databases", "CI/CD & Cloud Deployment"],
    color: "from-blue-500 to-indigo-600"
  },
  {
    id: "ai-ml",
    title: "Artificial Intelligence & ML",
    type: "course",
    category: "Data Science",
    desc: "Learn Python programming, data analysis, neural networks, deep learning algorithms, and build intelligent machine learning models from scratch.",
    rating: 4.8,
    reviews: 980,
    duration: "8 Months",
    metaText: "32 Modules",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=340&fit=crop",
    features: ["Python & PyTorch", "Supervised/Unsupervised Learning", "Neural Networks & NLP", "Computer Vision Projects"],
    color: "from-purple-500 to-pink-600"
  },
  {
    id: "aws-cloud",
    title: "AWS Cloud Computing",
    type: "course",
    category: "Cloud & DevOps",
    desc: "Prepare for AWS Solutions Architect certification. Learn cloud architecture, security, scaling, and database integration with hands-on labs.",
    rating: 4.9,
    reviews: 1560,
    duration: "4 Months",
    metaText: "18 Modules",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=340&fit=crop",
    features: ["IAM & Cloud Security", "EC2, S3 & VPC Setup", "Serverless with Lambda", "DevOps & CloudFormation"],
    color: "from-orange-500 to-amber-600"
  },
  {
    id: "data-science",
    title: "Data Science Bootcamp",
    type: "course",
    category: "Data Science",
    desc: "Analyze complex datasets and extract business insights using Pandas, NumPy, data visualization libraries, SQL, and Tableau dashboards.",
    rating: 4.7,
    reviews: 840,
    duration: "6 Months",
    metaText: "20 Modules",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=340&fit=crop",
    features: ["Data Cleaning & EDA", "Statistical Inference", "SQL Databases", "Tableau & PowerBI Reports"],
    color: "from-emerald-500 to-teal-600"
  },
  {
    id: "embedded-iot",
    title: "Embedded Systems & IoT",
    type: "course",
    category: "Engineering",
    desc: "Learn microcontroller programming, C/C++ hardware interface, protocols, and build smart, interconnected IoT devices with sensors.",
    rating: 4.8,
    reviews: 620,
    duration: "5 Months",
    metaText: "22 Modules",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=340&fit=crop",
    features: ["Arduino & Raspberry Pi", "C/C++ Programming", "Sensor Interfacing", "Wireless Protocols (MQTT, BLE)"],
    color: "from-cyan-500 to-blue-600"
  },
  {
    id: "medical-coding",
    title: "Advanced Medical Coding",
    type: "course",
    category: "Healthcare",
    desc: "Comprehensive professional medical billing and coding training covering ICD-10, CPT, and HCPCS manuals for a successful healthcare career.",
    rating: 4.9,
    reviews: 1120,
    duration: "3 Months",
    metaText: "15 Modules",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=340&fit=crop",
    features: ["ICD-10-CM Coding", "CPT & HCPCS Level II", "HIPAA Regulations", "CPC Exam Preparation"],
    color: "from-rose-500 to-red-600"
  }
];

// Full catalog of services
const services = [
  {
    id: "web-building",
    title: "Website Building",
    type: "service",
    category: "Development",
    desc: "Custom responsive website design and development tailored to showcase your business or personal portfolio with premium animations.",
    rating: 4.9,
    reviews: 120,
    duration: "1-2 Weeks",
    metaText: "SEO Friendly",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=340&fit=crop",
    features: ["Responsive Design", "Premium Animations", "SEO Optimized Code", "Speed Optimization"],
    color: "from-sky-500 to-blue-600"
  },
  {
    id: "app-building",
    title: "App Building",
    type: "service",
    category: "Mobile",
    desc: "Cross-platform mobile application development for iOS and Android built with modern frameworks and highly responsive user interfaces.",
    rating: 4.8,
    reviews: 85,
    duration: "3-4 Weeks",
    metaText: "iOS & Android",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=340&fit=crop",
    features: ["React Native / Flutter", "App Store Publishing", "Push Notifications", "Cloud Integrations"],
    color: "from-violet-500 to-fuchsia-600"
  },
  {
    id: "ats-resume",
    title: "ATS Resume Support",
    type: "service",
    category: "Career Services",
    desc: "Craft an ATS-compliant resume and optimize your LinkedIn profile to get noticed by top tech recruiters and secure interview calls.",
    rating: 4.9,
    reviews: 340,
    duration: "2-3 Days",
    metaText: "Resume & LI",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=340&fit=crop",
    features: ["ATS Scanner Testing", "LinkedIn Profile Audit", "Keywords Optimization", "Cover Letter Template"],
    color: "from-emerald-500 to-green-600"
  },
  {
    id: "career-support",
    title: "Career Support",
    type: "service",
    category: "Mentorship",
    desc: "1-on-1 career path guidance, mock interviews, and job placement assistance with our hiring partners to launch your dream role.",
    rating: 4.9,
    reviews: 510,
    duration: "1 Month",
    metaText: "1-on-1 Sessions",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=340&fit=crop",
    features: ["Mock Coding Interviews", "Salary Negotiation", "Direct HR Referrals", "Portfolio Review"],
    color: "from-pink-500 to-rose-600"
  }
];

const allItems = [...courses, ...services];

export default function CoursesPage() {
  const [activeTab, setActiveTab] = useState<"all" | "courses" | "services">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const tab = params.get("tab");
      if (tab === "courses" || tab === "services") {
        setActiveTab(tab);
      }
    }
  }, []);

  // Get unique categories based on selected tab
  const categories = useMemo(() => {
    const items = activeTab === "all" 
      ? allItems 
      : activeTab === "courses" 
        ? courses 
        : services;
    const cats = new Set(items.map(item => item.category));
    return ["All", ...Array.from(cats)];
  }, [activeTab]);

  // Filter items by tab, search query, and category
  const filteredItems = useMemo(() => {
    let items = activeTab === "all" 
      ? allItems 
      : activeTab === "courses" 
        ? courses 
        : services;

    if (selectedCategory !== "All") {
      items = items.filter(item => item.category === selectedCategory);
    }

    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      items = items.filter(
        item => 
          item.title.toLowerCase().includes(query) ||
          item.desc.toLowerCase().includes(query) ||
          item.category.toLowerCase().includes(query)
      );
    }

    return items;
  }, [activeTab, selectedCategory, searchQuery]);

  // WhatsApp Link Helper
  const getWhatsAppLink = (item: typeof allItems[0]) => {
    const text = item.type === "course"
      ? `Hello! I want to enroll in the *${item.title}* course. Please share details on fees and batch schedules.`
      : `Hello! I would like to inquire about your *${item.title}* service. Please provide more details.`;
    return `https://wa.me/917204398855?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="pt-28 pb-20 bg-background min-h-screen">
      {/* Header Hero Section */}
      <section className="container mx-auto px-4 md:px-6 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4"
        >
          <Sparkles size={14} className="animate-pulse" />
          <span>Complete Catalog</span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6"
        >
          Explore Our Courses & Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-text-secondary text-base md:text-lg max-w-3xl mx-auto leading-relaxed"
        >
          Acquire in-demand technical skills through our live mentor-led courses, or leverage our professional development team to build your next custom digital product.
        </motion.p>
      </section>

      {/* Control bar: Tabs, Categories, and Search */}
      <section className="container mx-auto px-4 md:px-6 mb-12">
        <div className="bg-white/80 backdrop-blur-md border border-gray-100 rounded-3xl p-6 shadow-md flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          {/* Tab selector */}
          <div className="flex bg-gray-100 p-1.5 rounded-xl self-start">
            {(["all", "courses", "services"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setSelectedCategory("All"); // Reset category filter
                }}
                className={`px-4 sm:px-6 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all capitalize cursor-pointer ${
                  activeTab === tab
                    ? "bg-white text-primary shadow-sm"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {tab === "all" ? "All Catalog" : tab}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative flex-grow max-w-md lg:max-w-xs xl:max-w-md">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-400 pointer-events-none">
              <Search size={18} />
            </span>
            <input
              type="text"
              placeholder={`Search ${activeTab === "all" ? "courses & services" : activeTab}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all text-sm bg-white"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex gap-2.5 overflow-x-auto pb-2 mt-6 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all border cursor-pointer ${
                selectedCategory === cat
                  ? "bg-primary text-white border-primary shadow-sm"
                  : "bg-white text-text-secondary border-gray-100 hover:border-gray-300 hover:text-text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Main Grid display */}
      <section className="container mx-auto px-4 md:px-6">
        {filteredItems.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 bg-white border border-dashed rounded-3xl"
          >
            <p className="text-gray-400 text-lg mb-2">No matching items found</p>
            <p className="text-gray-500 text-sm">Try resetting your filters or search keywords.</p>
          </motion.div>
        ) : (
          <motion.div 
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -6 }}
                  className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group h-full"
                >
                  {/* Card Image */}
                  <div className="w-full aspect-[16/10] relative overflow-hidden bg-gray-50">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Badge for Course / Service Type */}
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3.5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-text-primary flex items-center gap-1.5 shadow-sm">
                      <span className={`w-2 h-2 rounded-full ${item.type === "course" ? "bg-primary" : "bg-emerald-500"}`} />
                      <span>{item.type}</span>
                    </div>

                    <div className="absolute bottom-4 right-4 bg-text-primary/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {item.category}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 md:p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-1 text-yellow-500 mb-3 text-xs font-semibold">
                      <Star size={14} className="fill-yellow-500" />
                      <span>{item.rating}</span>
                      <span className="text-gray-400 font-medium">({item.reviews} reviews)</span>
                    </div>

                    <h3 className="text-lg md:text-xl font-bold mb-3 font-heading group-hover:text-primary transition-colors line-clamp-1">
                      {item.title}
                    </h3>
                    
                    <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                      {item.desc}
                    </p>

                    {/* Features checklist */}
                    <div className="mb-6">
                      <p className="text-xs font-bold text-text-primary uppercase tracking-wide mb-2.5">Key Highlights</p>
                      <ul className="grid grid-cols-2 gap-2 text-xs text-text-secondary">
                        {item.features.map((feat, idx) => (
                          <li key={idx} className="flex items-center gap-1.5">
                            <span className="text-primary font-bold text-sm">✓</span>
                            <span className="truncate">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Card Footer Detail */}
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-6 pt-4 border-t border-gray-50">
                      <div className="flex items-center gap-1.5 font-medium">
                        <Clock size={14} className="text-gray-400" />
                        <span>{item.duration}</span>
                      </div>
                      <div className="flex items-center gap-1.5 font-medium">
                        <BookOpen size={14} className="text-gray-400" />
                        <span>{item.metaText}</span>
                      </div>
                    </div>

                    {/* WhatsApp CTA Link */}
                    <a
                      href={getWhatsAppLink(item)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full btn-secondary text-center py-3 text-sm font-semibold flex items-center justify-center gap-2 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300"
                    >
                      <span>{item.type === "course" ? "Enroll Now" : "Request Service"}</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </section>
    </div>
  );
}
