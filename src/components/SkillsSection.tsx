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
    color: "bg-primary"
  },
  {
    name: "UI/UX Design",
    level: 90,
    icon: PenTool,
    color: "bg-accent"
  },
  {
    name: "Web Design",
    level: 85,
    icon: Code2,
    color: "bg-primary"
  },
  {
    name: "Photography",
    level: 80,
    icon: Camera,
    color: "bg-accent"
  },
  {
    name: "Video Editing",
    level: 75,
    icon: Film,
    color: "bg-primary"
  },
  {
    name: "Social Media Design",
    level: 70,
    icon: Box,
    color: "bg-accent"
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-12 sm:py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-8 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
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
                boxShadow: "0 20px 30px rgba(0,0,0,0.2)"
              }}
              transition={{ 
                duration: 0.3,
                type: "spring",
                stiffness: 300,
                damping: 20
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-4 sm:p-6 hover:bg-white/10 transition-all duration-300 transform-gpu"
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 360,
                  }}
                  transition={{ 
                    duration: 0.5,
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                  }}
                  className="p-2 sm:p-3 rounded-lg bg-white/10"
                >
                  <skill.icon className="w-4 h-4 sm:w-6 sm:h-6 text-primary" />
                </motion.div>
                <motion.h3 
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-base sm:text-xl font-semibold text-white"
                >
                  {skill.name}
                </motion.h3>
              </div>
              <div className="h-1.5 sm:h-2 bg-white/10 rounded-full overflow-hidden">
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
                  className={`h-full ${skill.color} transform-gpu`}
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
                className="text-xs sm:text-sm text-neutral mt-1 sm:mt-2 block"
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