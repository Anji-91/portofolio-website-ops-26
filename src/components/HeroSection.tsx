import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const coords = { x: 0, y: 0 };
    const circles = document.querySelectorAll<HTMLDivElement>(".warp-circle");

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const { clientX, clientY } = e;
      const x = (clientX - rect.left) / container.offsetWidth;
      const y = (clientY - rect.top) / container.offsetHeight;
      coords.x = x;
      coords.y = y;

      circles.forEach((circle) => {
        const speed = parseFloat(circle.getAttribute("data-speed") || "1");
        const xPos = coords.x * circle.offsetWidth * speed;
        const yPos = coords.y * circle.offsetHeight * speed;
        circle.style.transform = `translate(${xPos}px, ${yPos}px)`;
      });
    };

    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.section 
      id="hero"
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-secondary py-16 sm:py-20"
    >
      {/* Warp Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="warp-circle absolute h-[20rem] w-[20rem] rounded-full bg-gradient-to-r from-primary/40 to-accent/40 blur-3xl -top-40 -left-40" data-speed="0.3" />
        <div className="warp-circle absolute h-[20rem] w-[20rem] rounded-full bg-gradient-to-r from-accent/40 to-primary/40 blur-3xl -bottom-40 -right-40" data-speed="0.4" />
        <div className="warp-circle absolute h-[30rem] w-[30rem] rounded-full bg-gradient-to-r from-primary/30 to-accent/30 blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" data-speed="0.2" />
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px)] bg-[size:30px] bg-opacity-20" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="inline-block px-3 py-1 mb-4 sm:mb-6 text-xs sm:text-sm font-medium bg-white/10 backdrop-blur-sm rounded-full text-white">
            Creative Developer
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6">
            <span className="inline-flex flex-col h-[calc(theme(fontSize.7xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.7xl)*theme(lineHeight.tight))] overflow-hidden">
              <span className="animate-gradient-text-slide text-transparent bg-clip-text bg-[linear-gradient(to_right,theme(colors.purple.400),theme(colors.purple.600),theme(colors.blue.400),theme(colors.purple.400))] bg-[length:200%_auto] motion-reduce:animate-none">
                Building Digital
              </span>
            </span>
            <br />
            <span className="inline-flex flex-col h-[calc(theme(fontSize.7xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.7xl)*theme(lineHeight.tight))] overflow-hidden">
              <span className="animate-gradient-text-slide text-transparent bg-clip-text bg-[linear-gradient(to_right,theme(colors.purple.400),theme(colors.purple.600),theme(colors.blue.400),theme(colors.purple.400))] bg-[length:200%_auto] motion-reduce:animate-none">
                Experiences
              </span>
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/80 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Creating innovative digital solutions through creative development and modern design
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;