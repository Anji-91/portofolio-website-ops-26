import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const logos = [
  {
    id: 1,
    url: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    name: "React",
    color: "from-blue-400 to-cyan-400"
  },
  {
    id: 2,
    url: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
    name: "TypeScript",
    color: "from-blue-600 to-blue-400"
  },
  {
    id: 3,
    url: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
    name: "Vue",
    color: "from-green-500 to-emerald-400"
  },
  {
    id: 4,
    url: "https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg",
    name: "Sass",
    color: "from-pink-500 to-rose-400"
  },
  {
    id: 5,
    url: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    name: "Tailwind",
    color: "from-cyan-500 to-blue-400"
  }
];

const ImageSliderLogo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % logos.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-12 sm:py-16 bg-secondary overflow-hidden">
      {/* Acernity UI inspired background pattern */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute left-0 right-0 top-0 h-96 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary blur-3xl opacity-50" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent animate-pulse">
            Technologies We Use
          </h2>
          <p className="text-neutral max-w-2xl mx-auto text-sm sm:text-base">
            Powered by cutting-edge technologies
          </p>
        </motion.div>

        <div className="relative w-full max-w-4xl mx-auto">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 sm:gap-6 py-4 sm:py-6">
            {logos.map((logo, index) => (
              <motion.div
                key={logo.id}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  y: index === currentIndex ? -10 : 0
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.4, 0, 0.2, 1],
                  delay: index * 0.1
                }}
                className="relative group"
                onHoverStart={() => setIsHovered(index)}
                onHoverEnd={() => setIsHovered(null)}
              >
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 3 }}
                  className={`w-full aspect-square max-w-[100px] mx-auto bg-gradient-to-br ${logo.color} bg-opacity-10 backdrop-blur-sm rounded-xl p-3 flex items-center justify-center transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/20`}
                  style={{
                    boxShadow: isHovered === index ? "0 0 15px rgba(155, 135, 245, 0.2)" : "none"
                  }}
                >
                  <motion.img
                    src={logo.url}
                    alt={logo.name}
                    className="w-8 h-8 sm:w-10 sm:h-10 object-contain filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    animate={{
                      rotate: isHovered === index ? [0, -3, 3, -3, 0] : 0
                    }}
                    transition={{
                      duration: 0.5,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ 
                    opacity: isHovered === index ? 1 : 0,
                    y: isHovered === index ? 0 : 5
                  }}
                  transition={{ duration: 0.2 }}
                  className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs sm:text-sm font-medium bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent whitespace-nowrap"
                >
                  {logo.name}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageSliderLogo;