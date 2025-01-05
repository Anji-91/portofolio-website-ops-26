import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Brand Identity",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "AI Chatbot Developer",
    category: "Artificial Intelligence",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Web Design",
    category: "Development",
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=800&q=80"
  },
];

const PortfolioGrid = () => {
  return (
    <section className="py-12 sm:py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-16"
        >
          <span className="inline-block px-3 py-1 mb-3 sm:mb-4 text-xs sm:text-sm font-medium bg-primary/10 rounded-full text-primary">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
            Selected Works
          </h2>
          <p className="text-neutral max-w-2xl mx-auto text-sm sm:text-base px-4">
            A curated selection of my latest projects and creative endeavors.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm"
            >
              <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <span className="text-xs sm:text-sm text-primary mb-1 sm:mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {project.title}
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

export default PortfolioGrid;