"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Home, Info, BookOpen, CreditCard, HelpCircle, Mail, type LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: string
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

const IconMap: Record<string, LucideIcon> = {
  "home": Home,
  "info": Info,
  "book-open": BookOpen,
  "credit-card": CreditCard,
  "help-circle": HelpCircle,
  "mail": Mail,
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name)

  // Scrollspy logic to automatically update active tab when scrolling
  useEffect(() => {
    const handleScroll = () => {
      // If we are on a custom route page (like /courses), set that item active
      if (typeof window !== "undefined") {
        const pathname = window.location.pathname;
        const currentItem = items.find(item => item.url === pathname);
        if (currentItem) {
          setActiveTab(currentItem.name);
          return;
        }
      }

      // Find all sections corresponding to nav urls
      const sectionElements = items
        .map((item) => {
          const hashIndex = item.url.indexOf("#");
          const id = hashIndex !== -1 ? item.url.substring(hashIndex + 1) : null;
          if (!id) return null;
          return { name: item.name, element: document.getElementById(id) };
        })
        .filter((item): item is { name: string; element: HTMLElement } => item !== null && item.element !== null);

      if (sectionElements.length === 0) return;

      let currentSection = sectionElements[0].name;

      for (const section of sectionElements) {
        const top = section.element.offsetTop;
        
        if (window.scrollY >= top - 150) {
          currentSection = section.name;
        }
      }

      // If we are at the very bottom, set active tab to Contact
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
        const contactItem = items.find(item => item.url.toLowerCase().includes("contact"));
        if (contactItem) {
          currentSection = contactItem.name;
        }
      }

      setActiveTab(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    // Run once on mount
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [items]);

  return (
    <div
      className={cn(
        "fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-6 sm:pt-6",
        className,
      )}
    >
      <div className="flex items-center gap-1 sm:gap-3 bg-[#0A0F1C]/90 border border-white/10 backdrop-blur-md py-1 px-1.5 rounded-full shadow-2xl">
        {items.map((item) => {
          const Icon = IconMap[item.icon] || Home
          const isActive = activeTab === item.name

          return (
            <Link
              key={item.name}
              href={item.url}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                "relative cursor-pointer text-xs sm:text-sm font-semibold px-4 sm:px-6 py-2 rounded-full transition-colors duration-300",
                "text-gray-400 hover:text-white",
                isActive && "text-white",
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden flex items-center justify-center">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-white/10 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  {/* Glowing lamp matching primary blue color */}
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                    <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
