import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const portfolioImages = [
  {
    id: 1,
    title: "Brand Identity Design",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "AI Chatbot Developer",
    category: "Artificial Intelligence",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Motion Graphics",
    category: "Animation",
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Digital Art Creation",
    category: "Digital Art",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "Print Design",
    category: "Print",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "3D Visualization",
    category: "3D Design",
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?auto=format&fit=crop&w=800&q=80"
  }
];

const ImagePortfolio = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -600]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, 600]);

  return (
    <section id="portfolio" className="py-20 bg-secondary overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-6">
        <div className="relative -mt-20">
          <motion.div
            style={{ x }}
            className="absolute -left-20 whitespace-nowrap text-[130px] md:text-[200px] font-bold text-white/5"
          >
            PORTFOLIO PORTFOLIO
          </motion.div>
          <motion.div
            style={{ x: x2 }}
            className="absolute -left-20 top-24 whitespace-nowrap text-[130px] md:text-[200px] font-bold text-white/5"
          >
            SHOWCASE SHOWCASE
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16 relative z-10 pt-40"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Portfolio
          </h2>
          <p className="text-neutral max-w-2xl mx-auto">
            A showcase of my creative work and design projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {portfolioImages.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10, transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] } }}
              transition={{
                duration: 0.3,
                ease: "easeOut"
              }}
              className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm transition-all duration-300"
            >
              <div className="aspect-w-16 aspect-h-12">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-full h-full transform transition-all duration-500 ease-out group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <span className="text-sm text-primary font-medium mb-2 block">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    {item.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImagePortfolio;