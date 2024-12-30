import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <motion.section 
      id="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-secondary via-primary to-accent py-16 sm:py-20"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px)] bg-[size:30px] bg-opacity-20" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="inline-block px-3 py-1 mb-4 sm:mb-6 text-xs sm:text-sm font-medium bg-white/10 backdrop-blur-sm rounded-full text-white">
            Creative Designer
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6">
            <span className="inline-flex flex-col h-[calc(theme(fontSize.7xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.7xl)*theme(lineHeight.tight))] overflow-hidden">
              <span className="animate-gradient-text-slide text-transparent bg-clip-text bg-[linear-gradient(to_right,theme(colors.purple.400),theme(colors.purple.600),theme(colors.blue.400),theme(colors.purple.400))] bg-[length:200%_auto] motion-reduce:animate-none">
                Crafting Digital
              </span>
            </span>
            <br />
            <span className="inline-flex flex-col h-[calc(theme(fontSize.7xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.7xl)*theme(lineHeight.tight))] overflow-hidden">
              <span className="animate-gradient-text-slide text-transparent bg-clip-text bg-[linear-gradient(to_right,theme(colors.purple.400),theme(colors.purple.600),theme(colors.blue.400),theme(colors.purple.400))] bg-[length:200%_auto] motion-reduce:animate-none">
                Experiences
              </span>
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/80 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Transforming ideas into visually stunning realities through innovative design and creative solutions.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 sm:px-8 py-2.5 sm:py-3 bg-white text-secondary rounded-full font-medium transition-all hover:shadow-lg hover:shadow-white/20 text-sm sm:text-base"
          >
            View Portfolio
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;