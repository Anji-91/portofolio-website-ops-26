import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const logos = [
  {
    id: 1,
    url: "https://www.svgrepo.com/show/354113/nextjs-icon.svg",
    name: "HTML",
    color: "from-orange-500 to-red-500",
    shape: "rounded-tr-3xl rounded-bl-3xl"
  },
  {
    id: 2,
    url: "https://www.svgrepo.com/show/452091/python.svg",
    name: "CapCut",
    color: "from-purple-600 to-pink-400",
    shape: "rounded-tl-3xl rounded-br-3xl"
  },
  {
    id: 3,
    url: "https://www.svgrepo.com/show/354478/css-3.svg",
    name: "CSS",
    color: "from-blue-500 to-cyan-400",
    shape: "rounded-l-3xl"
  },
  {
    id: 4,
    url: "https://www.svgrepo.com/show/354113/nextjs-icon.svg",
    name: "Next.js",
    color: "from-gray-600 to-gray-400",
    shape: "rounded-r-3xl"
  },
  {
    id: 5,
    url: "https://www.svgrepo.com/show/452091/python.svg",
    name: "Python",
    color: "from-blue-500 to-yellow-400",
    shape: "rounded-full"
  },
  {
    id: 6,
    url: "https://www.svgrepo.com/show/373595/firebase.svg",
    name: "Firebase",
    color: "from-yellow-500 to-orange-500",
    shape: "rounded-xl"
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
    <section className="relative py-8 sm:py-12 bg-secondary overflow-hidden">
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
          className="text-center mb-6 sm:mb-8"
        >
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent animate-pulse">
            Technologies We Use
          </h2>
          <p className="text-neutral max-w-2xl mx-auto text-[10px] xs:text-xs sm:text-sm">
            Powered by cutting-edge technologies
          </p>
        </motion.div>

        <div className="relative w-full max-w-3xl mx-auto">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 sm:gap-4 py-2 sm:py-4">
            {logos.map((logo, index) => (
              <motion.div
                key={logo.id}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  y: index === currentIndex ? -8 : 0,
                  rotate: index === currentIndex ? 5 : 0
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.4, 0, 0.2, 1],
                  delay: index * 0.1
                }}
                className="relative group flex flex-col items-center"
                onHoverStart={() => setIsHovered(index)}
                onHoverEnd={() => setIsHovered(null)}
              >
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 3 }}
                  className={`w-full aspect-square max-w-[60px] xs:max-w-[70px] sm:max-w-[80px] mx-auto bg-gradient-to-br ${logo.color} bg-opacity-10 backdrop-blur-sm ${logo.shape} p-1.5 xs:p-2 sm:p-3 flex items-center justify-center transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/20`}
                  style={{
                    boxShadow: isHovered === index ? "0 0 15px rgba(155, 135, 245, 0.2)" : "none"
                  }}
                >
                  <motion.img
                    src={logo.url}
                    alt={logo.name}
                    className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 object-contain filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-all duration-300"
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
                  className="mt-2 text-[8px] xs:text-[10px] sm:text-xs font-medium bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent whitespace-nowrap"
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