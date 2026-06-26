import HeroSection from "@/components/home/HeroSection";
import HiringPartners from "@/components/home/HiringPartners";
import TrendingCourses from "@/components/home/TrendingCourses";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import AchievementCounters from "@/components/home/AchievementCounters";
import PricingPlans from "@/components/home/PricingPlans";
import AboutSection from "@/components/home/AboutSection";
import LeadFormFAQ from "@/components/home/LeadFormFAQ";
import Newsletter from "@/components/home/Newsletter";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HiringPartners />
      <TrendingCourses />
      <WhyChooseUs />
      <AchievementCounters />
      <PricingPlans />
      <AboutSection />
      <LeadFormFAQ />
      <Newsletter />
    </>
  );
}

