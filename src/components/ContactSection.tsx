import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section className="py-12 sm:py-20 bg-gradient-to-br from-secondary to-primary/20">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-8 sm:mb-16">
            <span className="inline-block px-3 py-1 mb-3 sm:mb-4 text-xs sm:text-sm font-medium bg-primary/10 rounded-full text-primary">
              Contact
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
              Let's Work Together
            </h2>
            <p className="text-neutral max-w-2xl mx-auto text-sm sm:text-base">
              Have a project in mind? Let's create something amazing together.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-md rounded-2xl p-4 sm:p-8 shadow-xl"
          >
            <form className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium text-white mb-1.5 sm:mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white placeholder-white/50 text-sm sm:text-base"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-1.5 sm:mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white placeholder-white/50 text-sm sm:text-base"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-1.5 sm:mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white placeholder-white/50 text-sm sm:text-base"
                  placeholder="Tell me about your project..."
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-primary text-white rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-primary/50 text-sm sm:text-base"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;