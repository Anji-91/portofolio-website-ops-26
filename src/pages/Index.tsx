import { motion } from "framer-motion";
import HeroSection from "../components/HeroSection";
import ImagePortfolio from "../components/ImagePortfolio";
import SkillsSection from "../components/SkillsSection";

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-secondary min-h-screen"
    >
      <HeroSection />
      <ImagePortfolio />
      <SkillsSection />
    </motion.div>
  );
};

export default Index;