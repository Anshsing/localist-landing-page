import { motion } from "framer-motion";
import { Bell, Sparkles } from "lucide-react";
import { useState } from "react";

const ComingSoonSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="py-28 px-4 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 80 }}
        className="max-w-2xl mx-auto text-center rounded-3xl p-12 md:p-16 relative overflow-hidden"
        style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-elevated)" }}
      >
        {/* Animated background orbs */}
        <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/10 blur-2xl animate-float" />
        <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-white/10 blur-2xl animate-float-delayed" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent)]" />

        <div className="relative z-10">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Bell className="w-10 h-10 text-primary-foreground/80 mx-auto mb-6" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-primary-foreground">Coming Soon</h2>
          <p className="mt-4 text-primary-foreground/80 text-lg">Be the first to know when Localist launches in your city.</p>

          {submitted ? (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="mt-8"
            >
              <Sparkles className="w-8 h-8 text-primary-foreground mx-auto mb-3" />
              <p className="text-primary-foreground font-semibold text-lg">🎉 You're on the list!</p>
            </motion.div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); if (email) setSubmitted(true); }}
              className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 rounded-xl px-5 py-3.5 text-foreground bg-card border-0 outline-none focus:ring-2 focus:ring-primary-foreground/30 placeholder:text-muted-foreground transition-shadow focus:shadow-lg"
                required
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="rounded-xl px-6 py-3.5 font-bold text-primary bg-card hover:bg-card/90 transition-colors shadow-md"
              >
                Notify Me
              </motion.button>
            </form>
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default ComingSoonSection;
