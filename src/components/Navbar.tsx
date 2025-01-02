import { motion } from "framer-motion";
import { Home, Image, Brain } from "lucide-react";

const Navbar = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
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
      className="fixed top-0 left-0 right-0 z-50 bg-secondary/80 backdrop-blur-lg border-b border-white/10"
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <motion.span 
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
            }}
            className="text-xl font-bold text-white cursor-pointer transition-all duration-300"
            onClick={() => scrollToSection('hero')}
          >
            anjani
          </motion.span>
          
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
                  transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.id)}
                className="flex items-center space-x-2 text-white/70 hover:text-white transition-all duration-300"
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </motion.button>
            ))}
          </div>

          <div className="md:hidden flex items-center space-x-4">
            {[
              { id: 'hero', icon: Home },
              { id: 'portfolio', icon: Image },
              { id: 'skills', icon: Brain },
            ].map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.id)}
                className="text-white/70 hover:text-white transition-all duration-300 p-2"
              >
                <item.icon className="w-5 h-5" />
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
