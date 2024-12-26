import { motion } from "framer-motion";
import HeroSection from "../components/HeroSection";
import ImagePortfolio from "../components/ImagePortfolio";
import SkillsSection from "../components/SkillsSection";
import Navbar from "../components/Navbar";
import SocialMedia from "../components/SocialMedia";

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-secondary min-h-screen"
    >
      <Navbar />
      <HeroSection />
      <ImagePortfolio />
      <SkillsSection />
      <SocialMedia />
    </motion.div>
  );
};

export default Index;