import { motion } from "framer-motion";
import HeroSection from "../components/HeroSection";
import PortfolioGrid from "../components/PortfolioGrid";
import ContactSection from "../components/ContactSection";

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-secondary min-h-screen"
    >
      <HeroSection />
      <PortfolioGrid />
      <ContactSection />
    </motion.div>
  );
};

export default Index;