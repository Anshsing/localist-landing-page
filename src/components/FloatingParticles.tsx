import { motion } from "framer-motion";

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 6 + 2,
  duration: Math.random() * 10 + 10,
  delay: Math.random() * 5,
}));

const FloatingParticles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {particles.map((p) => (
      <motion.div
        key={p.id}
        className="absolute rounded-full bg-primary/10"
        style={{
          left: `${p.x}%`,
          top: `${p.y}%`,
          width: p.size,
          height: p.size,
        }}
        animate={{
          y: [0, -30, 0],
          x: [0, 15, -15, 0],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: p.duration,
          delay: p.delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    ))}
  </div>
);

export default FloatingParticles;
