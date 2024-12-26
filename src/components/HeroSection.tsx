import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <motion.section 
      id="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-secondary via-primary to-accent"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px)] bg-[size:30px] bg-opacity-20" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center"
        >
          <span className="inline-block px-3 py-1 mb-6 text-sm font-medium bg-white/10 backdrop-blur-sm rounded-full text-white">
            Creative Designer
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
            Crafting Digital
            <br /> Experiences
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Transforming ideas into visually stunning realities through innovative design and creative solutions.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-white text-secondary rounded-full font-medium transition-all hover:shadow-lg hover:shadow-white/20"
          >
            View Portfolio
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;