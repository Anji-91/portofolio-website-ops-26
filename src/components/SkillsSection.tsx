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
    name: "3D Modeling",
    level: 70,
    icon: Box,
    color: "bg-accent"
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-neutral max-w-2xl mx-auto">
            Crafting digital experiences with creativity and precision
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-white/10">
                  <skill.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className={`h-full ${skill.color}`}
                />
              </div>
              <span className="text-sm text-neutral mt-2 block">
                {skill.level}%
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
