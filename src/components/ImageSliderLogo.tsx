import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const logos = [
  {
    id: 1,
    url: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    name: "React"
  },
  {
    id: 2,
    url: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
    name: "TypeScript"
  },
  {
    id: 3,
    url: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
    name: "Vue"
  },
  {
    id: 4,
    url: "https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg",
    name: "Sass"
  },
  {
    id: 5,
    url: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    name: "Tailwind"
  }
];

const ImageSliderLogo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % logos.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-secondary overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technologies We Use
          </h2>
          <p className="text-neutral max-w-2xl mx-auto">
            Powered by cutting-edge technologies
          </p>
        </motion.div>

        <div className="relative w-full max-w-5xl mx-auto">
          <div className="flex justify-center items-center gap-8 py-8">
            {logos.map((logo, index) => (
              <motion.div
                key={logo.id}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  y: index === currentIndex ? -20 : 0
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.4, 0, 0.2, 1],
                  delay: index * 0.1
                }}
                className="relative group"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-20 h-20 md:w-24 md:h-24 bg-white/5 backdrop-blur-sm rounded-2xl p-4 flex items-center justify-center transition-all duration-300 group-hover:bg-white/10"
                >
                  <img
                    src={logo.url}
                    alt={logo.name}
                    className="w-12 h-12 md:w-16 md:h-16 object-contain filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm text-white/70 whitespace-nowrap"
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