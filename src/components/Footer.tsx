import { motion } from "framer-motion";

const Footer = () => (
  <footer className="py-12 px-4 border-t border-border relative overflow-hidden">
    <div className="absolute inset-0 grid-pattern opacity-50" />
    <div className="max-w-5xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-extrabold text-xl gradient-text"
      >
        Localist
      </motion.span>
      <p>© {new Date().getFullYear()} Localist. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
