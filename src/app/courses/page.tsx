"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Clock, BookOpen, Search, ArrowRight, Sparkles } from "lucide-react";

// Full catalog of courses (36 courses categorized according to their type)
const courses = [
  // 1. CSE
  {
    id: "python-specialization",
    title: "Python Programming Specialization",
    type: "course",
    category: "CSE",
    desc: "Go from basics to advanced Python scripts, automation, data structures, and building web scrapers and scripts.",
    rating: 4.8,
    reviews: 890,
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=340&fit=crop",
    features: ["Syntax & Basic Structures", "File Handling & Modules", "Web Scraping & Automation", "Flask & Django Basics"],
    color: "from-yellow-500 to-amber-600"
  },
  {
    id: "java-prog",
    title: "Java Programming Masterclass",
    type: "course",
    category: "CSE",
    desc: "Master core Java, Object-Oriented Programming, multithreading, databases (JDBC), and building Spring Boot backend applications.",
    rating: 4.7,
    reviews: 420,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=340&fit=crop",
    features: ["OOP Core Concepts", "Multithreading & Collections", "JDBC & Database Connectivity", "Spring Boot Framework"],
    color: "from-blue-600 to-cyan-500"
  },
  {
    id: "web-dev",
    title: "Full Stack Web Development",
    type: "course",
    category: "CSE",
    desc: "Master the MERN stack (MongoDB, Express, React, Node.js) with real-world projects and learn to deploy scalable, modern web applications.",
    rating: 4.9,
    reviews: 1240,
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600&h=340&fit=crop",
    features: ["MERN Stack", "Next.js & Tailwind CSS", "REST APIs & Databases", "CI/CD & Cloud Deployment"],
    color: "from-blue-500 to-indigo-600"
  },
  {
    id: "ai-ml",
    title: "Artificial Intelligence",
    type: "course",
    category: "CSE",
    desc: "Explore neural networks, computer vision, natural language processing, transformers, and generative AI systems.",
    rating: 4.9,
    reviews: 980,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=340&fit=crop",
    features: ["Deep Neural Networks", "Natural Language Processing", "Computer Vision", "Transformers & LLMs"],
    color: "from-purple-500 to-pink-600"
  },
  {
    id: "ml-bootcamp",
    title: "Machine Learning",
    type: "course",
    category: "CSE",
    desc: "Learn Python, data prep, regression, classification, clustering, ensemble methods, and deploying ML pipelines.",
    rating: 4.8,
    reviews: 720,
    image: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=600&h=340&fit=crop",
    features: ["Supervised Learning", "Regression & Classification", "Scikit-Learn & Pandas", "Model Deployment"],
    color: "from-purple-500 to-indigo-600"
  },
  {
    id: "data-science",
    title: "Data Science",
    type: "course",
    category: "CSE",
    desc: "Master SQL, Pandas, NumPy, data cleaning, exploratory data analysis, and creating business dashboards in Tableau.",
    rating: 4.7,
    reviews: 840,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=340&fit=crop",
    features: ["Data Cleaning & EDA", "Statistical Inference", "SQL & Database Queries", "Tableau & PowerBI Reports"],
    color: "from-emerald-500 to-teal-600"
  },
  {
    id: "data-analytics",
    title: "Data Analytics",
    type: "course",
    category: "CSE",
    desc: "Analyze complex business datasets using SQL databases, Excel spreadsheets, PowerBI interactive reports, and statistical analytics.",
    rating: 4.8,
    reviews: 490,
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=340&fit=crop",
    features: ["Data Cleaning & Prepping", "Excel Advanced Analytics", "PowerBI & Dashboards", "Statistical Modeling"],
    color: "from-teal-500 to-emerald-600"
  },
  {
    id: "cyber-security",
    title: "Cyber Security",
    type: "course",
    category: "CSE",
    desc: "Learn system penetration testing, network defense, threat assessment, cryptography, and safety audits.",
    rating: 4.8,
    reviews: 650,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=340&fit=crop",
    features: ["Ethical Hacking", "Network Vulnerability", "Penetration Testing", "Security Audits & Compliance"],
    color: "from-red-500 to-rose-600"
  },
  {
    id: "app-development",
    title: "App Development",
    type: "course",
    category: "CSE",
    desc: "Create high-performance cross-platform iOS and Android apps using React Native, Flutter, and cloud backends.",
    rating: 4.8,
    reviews: 580,
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=340&fit=crop",
    features: ["React Native & Flutter", "iOS & Android Builds", "State Management", "App Store Publishing"],
    color: "from-violet-500 to-fuchsia-600"
  },
  {
    id: "aws-cloud",
    title: "Amazon Web Services (AWS)",
    type: "course",
    category: "CSE",
    desc: "Prepare for AWS Certification. Learn cloud infrastructure design, virtual networks, scaling, and database setups.",
    rating: 4.9,
    reviews: 1560,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=340&fit=crop",
    features: ["EC2, S3 & VPC Setup", "Cloud Security & IAM", "Serverless with Lambda", "DevOps & CloudFormation"],
    color: "from-orange-500 to-amber-600"
  },
  {
    id: "cloud-computing",
    title: "Cloud Computing",
    type: "course",
    category: "CSE",
    desc: "Master cloud environments across AWS, Azure, and Google Cloud, covering virtualization, architecture, and network configuration.",
    rating: 4.9,
    reviews: 680,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=340&fit=crop",
    features: ["Multi-Cloud Setup", "Virtualization & Networks", "Cloud Storage & Databases", "Security & Compliance"],
    color: "from-blue-500 to-sky-600"
  },
  {
    id: "ar-vr",
    title: "Augmented Reality & Virtual Reality (AR & VR)",
    type: "course",
    category: "CSE",
    desc: "Build immersive virtual and augmented reality experiences using Unity, Unreal Engine, C# scripting, and 3D assets.",
    rating: 4.8,
    reviews: 290,
    image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=600&h=340&fit=crop",
    features: ["Unity & C# Scripting", "3D Modeling & Assets", "Oculus & WebXR SDKs", "Interactive VR Projects"],
    color: "from-fuchsia-500 to-purple-600"
  },
  {
    id: "dsa",
    title: "Data Structures & Algorithms",
    type: "course",
    category: "CSE",
    desc: "Ace technical coding interviews. Master arrays, lists, trees, graphs, sorting, searching, and dynamic programming in C++/Java.",
    rating: 4.9,
    reviews: 1140,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=340&fit=crop",
    features: ["Complex Data Structures", "Sorting & Searching Algos", "Dynamic Programming", "Mock Interview Practice"],
    color: "from-indigo-600 to-violet-500"
  },
  {
    id: "devops",
    title: "DevOps",
    type: "course",
    category: "CSE",
    desc: "Automate system deployments. Master Docker containerization, Kubernetes orchestration, Jenkins pipelines, and IaC using Terraform.",
    rating: 4.8,
    reviews: 750,
    image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=600&h=340&fit=crop",
    features: ["Docker & Kubernetes", "Jenkins CI/CD Pipelines", "Terraform Infrastructure", "Monitoring & Logging Tools"],
    color: "from-orange-500 to-red-600"
  },
  {
    id: "gen-ai",
    title: "Gen AI",
    type: "course",
    category: "CSE",
    desc: "Master Generative AI pipelines, LangChain orchestration, RAG architectures, model fine-tuning, and building complex AI Agents.",
    rating: 4.9,
    reviews: 310,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=340&fit=crop",
    features: ["Prompt Engineering", "LangChain & RAG Stack", "Fine-Tuning LLMs", "Autonomous AI Agents"],
    color: "from-pink-500 to-rose-600"
  },

  // 2. ECE & EEE
  {
    id: "vlsi-design",
    title: "VLSI",
    type: "course",
    category: "ECE & EEE",
    desc: "Master VLSI design methodologies, digital design principles, CMOS circuits, and Verilog HDL modeling.",
    rating: 4.9,
    reviews: 310,
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=600&h=340&fit=crop",
    features: ["Verilog HDL Programming", "CMOS Circuits & Layout", "FPGA Architecture & Prototyping", "ASIC Design Workflows"],
    color: "from-cyan-500 to-blue-600"
  },
  {
    id: "iot-systems",
    title: "Internet of Things (IoT)",
    type: "course",
    category: "ECE & EEE",
    desc: "Build smart interconnected systems using Arduino, Raspberry Pi, various sensor modules, and IoT cloud platforms.",
    rating: 4.8,
    reviews: 430,
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=600&h=340&fit=crop",
    features: ["Hardware Interfaces", "MQTT & HTTP Protocols", "Sensors & Actuators Integration", "IoT Cloud Platforms"],
    color: "from-teal-500 to-cyan-600"
  },
  {
    id: "robotics-eng",
    title: "Robotics",
    type: "course",
    category: "ECE & EEE",
    desc: "Understand robot kinematics, dynamics, sensor fusion, actuator controls, and programming using ROS.",
    rating: 4.8,
    reviews: 290,
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=340&fit=crop",
    features: ["ROS (Robot Operating System)", "Kinematics & Control Systems", "Actuator & Motor Control", "Sensor Fusion Algorithms"],
    color: "from-indigo-500 to-purple-600"
  },
  {
    id: "embedded-system",
    title: "Embedded Systems",
    type: "course",
    category: "ECE & EEE",
    desc: "Program microcontrollers using Embedded C, configure GPIOs, timers, interrupts, and serial communication protocols (I2C, SPI).",
    rating: 4.9,
    reviews: 520,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=340&fit=crop",
    features: ["Microcontroller Architecture", "Embedded C Programming", "GPIO, Timers & Interrupts", "I2C, SPI & UART Protocols"],
    color: "from-blue-500 to-indigo-600"
  },

  // 3. MECHANICAL & AUTOMOBILES
  {
    id: "autocad-mech",
    title: "Auto CAD",
    type: "course",
    category: "Mechanical & Automobiles",
    desc: "Master 2D drafting and 3D modeling of mechanical components, assembly drawings, and blueprint interpretation.",
    rating: 4.8,
    reviews: 610,
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&h=340&fit=crop",
    features: ["2D Orthographic Drafting", "3D Solid & Surface Modeling", "Assembly Design Sheets", "Mechanical Standards & Tolerances"],
    color: "from-orange-500 to-red-600"
  },
  {
    id: "hev-tech",
    title: "Hybrid Electric Vehicle",
    type: "course",
    category: "Mechanical & Automobiles",
    desc: "Explore battery management systems, electric drivetrains, regenerative braking, and powertrain architecture.",
    rating: 4.9,
    reviews: 380,
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?w=600&h=340&fit=crop",
    features: ["Battery Management Systems", "Electric Motors & Inverters", "HEV Architecture", "Regenerative Braking Systems"],
    color: "from-emerald-500 to-teal-600"
  },
  {
    id: "ic-engine",
    title: "IC Engine",
    type: "course",
    category: "Mechanical & Automobiles",
    desc: "Study thermodynamics, fuel injection systems, combustion dynamics, and emission control systems of modern IC engines.",
    rating: 4.7,
    reviews: 240,
    image: "https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?w=600&h=340&fit=crop",
    features: ["Thermodynamic Cycles", "Fuel Injection & Induction", "Combustion Dynamics & CFD", "Emission Testing & Controls"],
    color: "from-amber-500 to-orange-600"
  },
  {
    id: "car-designing",
    title: "Car Designing",
    type: "course",
    category: "Mechanical & Automobiles",
    desc: "Learn automotive exterior design, surface modeling in CATIA/SolidWorks, and wind tunnel simulation (CFD).",
    rating: 4.9,
    reviews: 470,
    image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=600&h=340&fit=crop",
    features: ["Class-A Surface Modeling", "Chassis & Frame Design", "CFD Aerodynamic Simulations", "CATIA / SolidWorks Assembly"],
    color: "from-rose-500 to-red-600"
  },
  {
    id: "stad-pro",
    title: "Stad Pro",
    type: "course",
    category: "Mechanical & Automobiles",
    desc: "Learn structural loading, mechanical structural frame simulations, stress distribution, and support reactions.",
    rating: 4.8,
    reviews: 320,
    image: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?w=600&h=340&fit=crop",
    features: ["Structural Finite Element Analysis", "Loading Calculations", "Stress & Shear Diagrams", "Frame Support Reactions"],
    color: "from-blue-600 to-indigo-600"
  },

  // 4. CIVIL
  {
    id: "autocad-civil",
    title: "Auto CAD",
    type: "course",
    category: "Civil",
    desc: "Create 2D floor plans, building elevation sheets, structural framing drawings, and architectural layouts.",
    rating: 4.8,
    reviews: 530,
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&h=340&fit=crop",
    features: ["2D Building Floor Plans", "3D Elevation Renderings", "Structural Column Layouts", "Civil Standard Drawing Codes"],
    color: "from-orange-500 to-amber-600"
  },
  {
    id: "construction-planning",
    title: "Construction Planning",
    type: "course",
    category: "Civil",
    desc: "Learn project estimating, scheduling, resource management using Primavera/MS Project, and site quality control standards.",
    rating: 4.9,
    reviews: 620,
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=340&fit=crop",
    features: ["Project Estimation Sheets", "CPM/PERT Scheduling Method", "Primavera P6 / MS Project", "Site Quality & Safety Audits"],
    color: "from-teal-500 to-green-600"
  },

  // 5. MANAGEMENT
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    type: "course",
    category: "Management",
    desc: "Master SEO, search engine marketing, social media ads, email automation, analytics, and content marketing strategies.",
    rating: 4.9,
    reviews: 1150,
    image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=600&h=340&fit=crop",
    features: ["Search Engine Optimization", "Meta & Google Ads Manager", "Email Marketing Automation", "Web Analytics & Reporting"],
    color: "from-sky-500 to-blue-600"
  },
  {
    id: "marketing-management",
    title: "Marketing Management",
    type: "course",
    category: "Management",
    desc: "Explore consumer behavior, product positioning, marketing research, brand management, and pricing strategies.",
    rating: 4.8,
    reviews: 640,
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&h=340&fit=crop",
    features: ["Market Research Methods", "Brand Building & Equity", "Product Lifecycle Strategy", "Competitive Pricing Models"],
    color: "from-violet-500 to-fuchsia-600"
  },
  {
    id: "finance-accounting",
    title: "Finance",
    type: "course",
    category: "Management",
    desc: "Analyze financial statements, capital budgeting, corporate evaluation, cost auditing, and financial risk management.",
    rating: 4.9,
    reviews: 820,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=340&fit=crop",
    features: ["Balance Sheet Analysis", "Capital Budgeting Models", "Corporate Valuation", "Financial Risk Assessment"],
    color: "from-emerald-500 to-green-600"
  },
  {
    id: "business-analytics",
    title: "Business Analytics",
    type: "course",
    category: "Management",
    desc: "Convert data to actionable decisions using Excel formulas, SQL databases, PowerBI reports, and predictive analysis.",
    rating: 4.8,
    reviews: 910,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=340&fit=crop",
    features: ["SQL & Data Querying", "Excel Model Analytics", "PowerBI & Dashboards", "Predictive Analytics Models"],
    color: "from-pink-500 to-rose-600"
  },
  {
    id: "stock-marketing",
    title: "Stock Marketing",
    type: "course",
    category: "Management",
    desc: "Learn candlestick patterns, charts, technical indicators, portfolio construction, options, and derivatives risk management.",
    rating: 4.8,
    reviews: 1350,
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=600&h=340&fit=crop",
    features: ["Technical Indicator Systems", "Candlestick Pattern Trading", "Portfolio Asset Allocation", "Options Trading Strategies"],
    color: "from-teal-500 to-cyan-600"
  },
  {
    id: "hr-management",
    title: "HR",
    type: "course",
    category: "Management",
    desc: "Master talent acquisition, employee engagement programs, labor law regulations, payroll operations, and conflict resolution.",
    rating: 4.7,
    reviews: 410,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=340&fit=crop",
    features: ["Talent Acquisition & Hiring", "Performance Management Systems", "Labor Compliance & Laws", "Payroll Processing Methods"],
    color: "from-orange-500 to-amber-600"
  },

  // 6. BIOTECHNOLOGY
  {
    id: "bioinformatics",
    title: "Bio Informatics",
    type: "course",
    category: "Biotechnology",
    desc: "Analyze biological sequence data (DNA, RNA, proteins), structure models, sequence alignment, and NCBI resources.",
    rating: 4.8,
    reviews: 210,
    image: "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?w=600&h=340&fit=crop",
    features: ["Sequence Alignment Methods", "Genomic Database Tools", "Phylogenetic Tree Modeling", "Protein Structure Prediction"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: "nano-science",
    title: "Nano Science",
    type: "course",
    category: "Biotechnology",
    desc: "Study nanomaterials at the atomic scale, synthesis, characterization tools (SEM, TEM), and chemical/physical properties.",
    rating: 4.8,
    reviews: 180,
    image: "https://images.unsplash.com/photo-1562408590-e32931084e23?w=600&h=340&fit=crop",
    features: ["Nanomaterial Synthesis", "SEM & TEM Microscopy", "Quantum Scale Properties", "Characterization Techniques"],
    color: "from-indigo-500 to-teal-500"
  },
  {
    id: "nanotechnology",
    title: "Nano Technology",
    type: "course",
    category: "Biotechnology",
    desc: "Explore carbon nanotubes, medical drug delivery systems, sensors, and electronic devices utilizing nanotechnology.",
    rating: 4.9,
    reviews: 320,
    image: "https://images.unsplash.com/photo-1507668077129-56e32842fceb?w=600&h=340&fit=crop",
    features: ["Drug Delivery Systems", "Carbon Nanotubes & Graphene", "Nanosensor Device Design", "Nanoelectronics Fabrication"],
    color: "from-cyan-500 to-blue-600"
  },
  {
    id: "genetic-engineering",
    title: "Genetic Engineering",
    type: "course",
    category: "Biotechnology",
    desc: "Master DNA cloning, recombinant DNA methods, PCR testing, CRISPR-Cas9 genome editing, and biosafety guidelines.",
    rating: 4.9,
    reviews: 440,
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=600&h=340&fit=crop",
    features: ["Recombinant DNA Technology", "CRISPR-Cas9 Editing", "PCR & Gel Electrophoresis", "Gene Cloning Protocols"],
    color: "from-emerald-500 to-teal-600"
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
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&h=340&fit=crop",
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
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=340&fit=crop",
    features: ["Mock Coding Interviews", "Salary Negotiation", "Direct HR Referrals", "Portfolio Review"],
    color: "from-pink-500 to-rose-600"
  }
];

const allItems = [...courses, ...services];

// Card Sub-component
function CourseCard({ item, getWhatsAppLink }: { item: typeof allItems[0]; getWhatsAppLink: (item: any) => string }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col group h-full"
    >
      {/* Card Image */}
      <div className="w-full aspect-[16/9] relative overflow-hidden bg-gray-50">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Badge for Course / Service Type */}
        <div className="absolute top-2 left-2 bg-white/95 backdrop-blur-sm px-2 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider text-text-primary flex items-center gap-1 shadow-sm">
          <span className={`w-1.5 h-1.5 rounded-full ${item.type === "course" ? "bg-primary" : "bg-emerald-500"}`} />
          <span>{item.type}</span>
        </div>

        <div className="absolute bottom-2 right-2 bg-text-primary/80 backdrop-blur-sm text-white px-2 py-0.5 rounded-full text-[10px] font-semibold">
          {item.category}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex items-center gap-1 text-yellow-500 mb-1.5 text-[10px] font-semibold">
          <Star size={11} className="fill-yellow-500" />
          <span>{item.rating}</span>
          <span className="text-gray-400 font-medium">({item.reviews})</span>
        </div>

        <h3 className="text-xs sm:text-sm font-bold mb-1.5 font-heading group-hover:text-primary transition-colors line-clamp-1">
          {item.title}
        </h3>
        
        <p className="text-text-secondary text-[11px] leading-relaxed mb-3 flex-grow line-clamp-2">
          {item.desc}
        </p>

        {/* Features - compact 2 col */}
        <ul className="grid grid-cols-2 gap-x-1.5 gap-y-1 text-[10px] text-text-secondary mb-4">
          {item.features.slice(0, 4).map((feat, idx) => (
            <li key={idx} className="flex items-center gap-1">
              <span className="text-primary font-bold text-[10px]">✓</span>
              <span className="truncate">{feat}</span>
            </li>
          ))}
        </ul>

        {/* WhatsApp CTA Link */}
        <a
          href={getWhatsAppLink(item)}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full text-center py-2 text-[11px] sm:text-xs font-semibold rounded-lg border border-primary text-primary bg-white hover:bg-primary hover:text-white transition-all duration-300 relative z-10 block mt-auto"
        >
          {item.type === "course" ? "Enroll Now" : "Request Service"}
        </a>
      </div>
    </motion.div>
  );
}

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

  // Determine if we should group items visually under category sections
  const shouldGroup = useMemo(() => {
    return selectedCategory === "All" && searchQuery.trim() === "";
  }, [selectedCategory, searchQuery]);

  // Categories list to iterate for grouped rendering
  const categoriesList = useMemo(() => {
    return categories.filter(c => c !== "All");
  }, [categories]);

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
          /* Render grouped layout or flat layout */
          shouldGroup ? (
            <div className="space-y-16">
              {categoriesList.map((categoryName) => {
                const categoryItems = filteredItems.filter(item => item.category === categoryName);
                if (categoryItems.length === 0) return null;
                return (
                  <div key={categoryName} className="space-y-6">
                    {/* Category Title Header */}
                    <div className="flex items-center gap-3 border-b border-gray-100 pb-3">
                      <h2 className="text-lg md:text-xl font-bold font-heading text-text-primary uppercase tracking-wide">
                        {categoryName}
                      </h2>
                      <span className="bg-primary/10 text-primary text-[10px] md:text-xs font-bold px-2.5 py-0.5 rounded-full">
                        {categoryItems.length} {categoryItems.length === 1 ? 'Item' : 'Items'}
                      </span>
                    </div>
                    {/* Category Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
                      <AnimatePresence mode="popLayout">
                        {categoryItems.map((item) => (
                          <CourseCard key={item.id} item={item} getWhatsAppLink={getWhatsAppLink} />
                        ))}
                      </AnimatePresence>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
              <AnimatePresence mode="popLayout">
                {filteredItems.map((item) => (
                  <CourseCard key={item.id} item={item} getWhatsAppLink={getWhatsAppLink} />
                ))}
              </AnimatePresence>
            </div>
          )
        )}
      </section>
    </div>
  );
}
