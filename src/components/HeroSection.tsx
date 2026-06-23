import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MapPin, ShoppingBag } from "lucide-react";
import { useRef } from "react";
import FloatingParticles from "./FloatingParticles";
import AnimatedCounter from "./AnimatedCounter";
import TextReveal from "./TextReveal";

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 noise-overlay"
      style={{ background: "var(--gradient-hero)" }}
    >
      <FloatingParticles />

      {/* Parallax blobs */}
      <motion.div style={{ y: bgY }} className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl glow-pulse" />
      <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [0, 80]) }} className="absolute bottom-20 right-10 w-64 h-64 rounded-full bg-accent/10 blur-3xl glow-pulse" />
      <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [0, 120]) }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />

      <motion.div style={{ opacity }} className="relative z-10 max-w-4xl mx-auto text-center py-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="inline-flex items-center gap-2 rounded-full bg-primary/10 backdrop-blur-sm px-5 py-2.5 text-sm font-semibold text-primary mb-8 border border-primary/20"
        >
          <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            <MapPin className="w-4 h-4" />
          </motion.div>
          Discover Local Fashion Near You
        </motion.div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground leading-tight">
          <TextReveal>Your Local Shops,</TextReveal>
          <br />
          <TextReveal delay={0.3} className="gradient-text">Now Online</TextReveal>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          Browse real clothing from nearby shops. Find what you need urgently — for job interviews, travel, or last-minute events — then walk in and buy. No more guessing sizes or waiting for deliveries.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="group relative inline-flex items-center justify-center gap-2 rounded-2xl px-8 py-4 text-lg font-bold text-primary-foreground shadow-lg overflow-hidden"
            style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-elevated)" }}
          >
            <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%)] bg-[length:200%_100%] group-hover:animate-[shimmer_1.5s_ease-in-out]" />
            <ShoppingBag className="w-5 h-5" />
            Coming Soon
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-primary/20 px-8 py-4 text-lg font-bold text-primary hover:bg-primary/5 transition-colors backdrop-blur-sm"
          >
            Learn More <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto"
        >
          <AnimatedCounter target={100} suffix="+" label="Local Shops" />
          <AnimatedCounter target={50} suffix="k+" label="Products Listed" duration={1.5} />
          <AnimatedCounter target={5} suffix="+" label="Cities Planned" duration={1.8} />
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-1.5"
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-primary" animate={{ y: [0, 12, 0] }} transition={{ duration: 1.5, repeat: Infinity }} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
