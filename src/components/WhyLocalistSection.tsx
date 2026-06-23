import { motion } from "framer-motion";
import { TrendingUp, Eye, HandHeart } from "lucide-react";
import MagneticCard from "./MagneticCard";
import TextReveal from "./TextReveal";

const reasons = [
  {
    icon: Eye,
    title: "See Before You Go",
    desc: "Unlike online shopping where you guess from stock photos, Localist shows you real images from real shops near you. Know exactly what's waiting before you step out.",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    icon: TrendingUp,
    title: "Support Local Businesses",
    desc: "Every purchase you make through Localist supports a local shopkeeper, keeping your neighbourhood's economy thriving and reducing wasteful shipping.",
    gradient: "from-accent/20 to-accent/5",
  },
  {
    icon: HandHeart,
    title: "No Returns, No Hassle",
    desc: "Try before you buy. Walk into the shop, use the trial room, feel the fabric, check the fit — and only pay when you're happy. Zero return headaches.",
    gradient: "from-primary/20 to-accent/5",
  },
];

const WhyLocalistSection = () => (
  <section className="py-28 px-4 relative overflow-hidden">
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

    <div className="max-w-5xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary mb-4"
        >
          Why Localist?
        </motion.span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground">
          <TextReveal>The Best of Both Worlds</TextReveal>
        </h2>
        <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
          Localist combines the convenience of browsing online with the trust and experience of shopping in person.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8" style={{ perspective: "1000px" }}>
        {reasons.map((r, i) => (
          <MagneticCard key={r.title} className="h-full">
            <motion.div
              initial={{ opacity: 0, y: 40, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, type: "spring", stiffness: 80 }}
              className={`relative rounded-3xl border border-border p-8 bg-gradient-to-b ${r.gradient} h-full overflow-hidden group`}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_50%_0%,hsl(168_76%_42%/0.08),transparent_60%)]" />

              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="w-16 h-16 rounded-2xl mx-auto flex items-center justify-center mb-6 bg-card shadow-md"
              >
                <r.icon className="w-8 h-8 text-primary" />
              </motion.div>

              <h3 className="font-bold text-xl text-foreground text-center">{r.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed text-center">{r.desc}</p>
            </motion.div>
          </MagneticCard>
        ))}
      </div>
    </div>
  </section>
);

export default WhyLocalistSection;
