import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const socialLinks = [
  {
    name: "Facebook",
    icon: Facebook,
    url: "https://facebook.com",
    color: "hover:text-blue-500",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://https://www.instagram.com/muhammmad_iqbaaal/",
    color: "hover:text-pink-500",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/muhammad-iqbal-289a782b9/",
    color: "hover:text-blue-600",
  },
  {
    name: "Twitter",
    icon: Twitter,
    url: "https://twitter.com",
    color: "hover:text-blue-400",
  },
  {
    name: "YouTube",
    icon: Youtube,
    url: "https://youtube.com",
    color: "hover:text-red-500",
  },
];

const SocialMedia = () => {
  return (
    <section className="py-12 sm:py-16 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
            Connect With Me
          </h2>
          <p className="text-neutral max-w-2xl mx-auto text-sm sm:text-base">
            Let's stay connected through social media
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center items-center gap-4 sm:gap-8"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                scale: 1.2,
                transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
              }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3, ease: "easeOut" }}
              className={`p-2.5 sm:p-3 rounded-full bg-white/5 backdrop-blur-sm ${social.color} transition-all duration-300 hover:bg-white/10`}
            >
              <social.icon className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SocialMedia;
