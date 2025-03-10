import { motion } from "framer-motion";
import HeroSection from "../components/HeroSection";
import ImagePortfolio from "../components/ImagePortfolio";
import SkillsSection from "../components/SkillsSection";
import Navbar from "../components/Navbar";
import SocialMedia from "../components/SocialMedia";
import ImageSliderLogo from "../components/ImageSliderLogo";
import ContactSection from "../components/ContactSection";
import BackToTop from "../components/BackToTop";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Smooth scroll behavior for all internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href) {
          const target = document.querySelector(href);
          if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }
      });
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-[#000000] min-h-screen scroll-smooth"
    >
      <Navbar />
      <HeroSection />
      <ImageSliderLogo />
      <ImagePortfolio />
      <SkillsSection />
      <ContactSection />
      <SocialMedia />
      <BackToTop />
    </motion.div>
  );
};

export default Index;