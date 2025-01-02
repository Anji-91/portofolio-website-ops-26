import { motion, AnimatePresence } from "framer-motion";
import { Home, Image, Brain, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);

      // Update active section based on scroll position
      const sections = ['hero', 'portfolio', 'skills'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    setIsMobileMenuOpen(false);
    element?.scrollIntoView({ 
      behavior: "smooth",
      block: "start"
    });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-secondary/80 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <motion.span 
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
            }}
            className="text-xl font-bold cursor-pointer transition-all duration-300"
            onClick={() => scrollToSection('hero')}
          >
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-text-slide">
              anjani
            </span>
          </motion.span>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { id: 'hero', label: 'Home', icon: Home },
              { id: 'portfolio', label: 'Portfolio', icon: Image },
              { id: 'skills', label: 'Skills', icon: Brain },
            ].map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ 
                  scale: 1.05,
                  y: -2,
                  transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center space-x-2 transition-all duration-300 relative ${
                  activeSection === item.id 
                    ? "text-primary" 
                    : "text-white/70 hover:text-white"
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white/70 hover:text-white transition-colors p-2"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden bg-secondary/95 backdrop-blur-lg rounded-b-2xl shadow-lg"
            >
              <div className="px-4 py-6 space-y-4">
                {[
                  { id: 'hero', label: 'Home', icon: Home },
                  { id: 'portfolio', label: 'Portfolio', icon: Image },
                  { id: 'skills', label: 'Skills', icon: Brain },
                ].map((item) => (
                  <motion.button
                    key={item.id}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center space-x-3 w-full px-4 py-2 rounded-lg transition-all duration-300 ${
                      activeSection === item.id
                        ? "bg-primary/20 text-primary"
                        : "text-white/70 hover:text-white"
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;