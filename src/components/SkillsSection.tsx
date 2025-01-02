import { motion } from "framer-motion";
import { 
  Brush, 
  Code2, 
  PenTool, 
  Camera, 
  Film, 
  Box 
} from "lucide-react";

const skills = [
  {
    name: "Graphic Design",
    level: 95,
    icon: Brush,
    color: "bg-gradient-to-r from-purple-500 to-pink-500"
  },
  {
    name: "UI/UX Design",
    level: 90,
    icon: PenTool,
    color: "bg-gradient-to-r from-blue-500 to-cyan-500"
  },
  {
    name: "Web Design",
    level: 85,
    icon: Code2,
    color: "bg-gradient-to-r from-green-500 to-emerald-500"
  },
  {
    name: "Photography",
    level: 80,
    icon: Camera,
    color: "bg-gradient-to-r from-yellow-500 to-orange-500"
  },
  {
    name: "Video Editing",
    level: 75,
    icon: Film,
    color: "bg-gradient-to-r from-red-500 to-rose-500"
  },
  {
    name: "Social Media Design",
    level: 70,
    icon: Box,
    color: "bg-gradient-to-r from-indigo-500 to-purple-500"
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-12 sm:py-20 bg-secondary relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <div className="absolute left-0 right-0 top-0 h-96 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary blur-3xl opacity-50" />

      <div className="container mx-auto px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-8 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient-text-slide mb-3 sm:mb-4">
            Skills & Expertise
          </h2>
          <p className="text-neutral max-w-2xl mx-auto text-sm sm:text-base px-4">
            Crafting digital experiences with creativity and precision
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ 
                scale: 1.02,
                rotateX: 5,
                boxShadow: "0 20px 30px rgba(0,0,0,0.2)",
                background: "rgba(255, 255, 255, 0.1)"
              }}
              transition={{ 
                duration: 0.3,
                type: "spring",
                stiffness: 300,
                damping: 20
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-4 sm:p-6 hover:bg-white/10 transition-all duration-300 transform-gpu border border-white/10 hover:border-white/20 shadow-lg hover:shadow-primary/20"
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 360,
                    boxShadow: "0 0 20px rgba(155, 135, 245, 0.5)"
                  }}
                  transition={{ 
                    duration: 0.5,
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                  }}
                  className="p-2 sm:p-3 rounded-lg bg-gradient-to-br from-white/10 to-white/5"
                >
                  <skill.icon className="w-4 h-4 sm:w-6 sm:h-6 text-primary animate-pulse" />
                </motion.div>
                <motion.h3 
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-base sm:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80"
                >
                  {skill.name}
                </motion.h3>
              </div>
              <div className="h-1.5 sm:h-2 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  transition={{ 
                    duration: 1.2,
                    ease: [0.4, 0, 0.2, 1]
                  }}
                  viewport={{ once: true }}
                  className={`h-full ${skill.color} shadow-lg shadow-primary/20 transform-gpu`}
                />
              </div>
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                whileHover={{ 
                  scale: 1.1,
                  color: "rgb(var(--primary))"
                }}
                transition={{ duration: 0.2 }}
                className="text-xs sm:text-sm text-neutral mt-1 sm:mt-2 block font-medium"
              >
                {skill.level}%
              </motion.span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;