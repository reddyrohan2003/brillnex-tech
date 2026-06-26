import HeroSection from "@/components/home/HeroSection";
import HiringPartners from "@/components/home/HiringPartners";
import AboutSection from "@/components/home/AboutSection";
import CoreValues from "@/components/home/CoreValues";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import AchievementCounters from "@/components/home/AchievementCounters";
import TrendingCourses from "@/components/home/TrendingCourses";
import PricingPlans from "@/components/home/PricingPlans";
import LeadFormFAQ from "@/components/home/LeadFormFAQ";
import Newsletter from "@/components/home/Newsletter";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HiringPartners />
      <TrendingCourses />
      <PricingPlans />
      <AboutSection />
      <AchievementCounters />
      <CoreValues />
      <WhyChooseUs />
      <LeadFormFAQ />
      <Newsletter />
    </>
  );
}
