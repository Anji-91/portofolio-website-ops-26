import { motion } from "framer-motion";
import HeroSection from "../components/HeroSection";
import ImagePortfolio from "../components/ImagePortfolio";
import SkillsSection from "../components/SkillsSection";
import Navbar from "../components/Navbar";
import SocialMedia from "../components/SocialMedia";
import ImageSlider from "../components/ImageSlider";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Add smooth scroll behavior to all internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href) {
          document.querySelector(href)?.scrollInView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-secondary min-h-screen scroll-smooth"
    >
      <Navbar />
      <HeroSection />
      <ImageSlider />
      <ImagePortfolio />
      <SkillsSection />
      <SocialMedia />
    </motion.div>
  );
};

export default Index;