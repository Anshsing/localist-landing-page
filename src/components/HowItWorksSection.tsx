import { motion } from "framer-motion";

const buyerSteps = [
  { step: "01", title: "Sign Up", desc: "Create your free account in seconds with just email or phone." },
  { step: "02", title: "Set Your Location", desc: "Allow location access or enter your area. We'll show nearby catalogs." },
  { step: "03", title: "Browse & Filter", desc: "Explore shops. Filter by type, occasion, size, price, or urgency." },
  { step: "04", title: "Visit & Buy", desc: "Head to the shop, try on your picks, and buy what you love." },
];

const shopkeeperSteps = [
  { step: "01", title: "Register Your Shop", desc: "Add your shop details, photos, hours, and services offered." },
  { step: "02", title: "Upload Your Catalog", desc: "Photo your inventory with details — category, size, price, availability." },
  { step: "03", title: "Manage in Real Time", desc: "Update stock, mark sold items, add new arrivals instantly." },
  { step: "04", title: "Attract Customers", desc: "Get discovered by nearby buyers actively searching for your products." },
];

const StepList = ({ steps }: { steps: typeof buyerSteps }) => (
  <div className="relative">
    {/* Animated connecting line */}
    <div className="absolute left-[22px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-primary/30 via-primary/10 to-transparent" />

    <div className="space-y-8">
      {steps.map((s, i) => (
        <motion.div
          key={s.step}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15, type: "spring", stiffness: 80 }}
          className="flex gap-5 items-start relative group"
        >
          <motion.div
            whileInView={{ scale: [0.5, 1.2, 1] }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 + 0.2, duration: 0.4 }}
            className="w-11 h-11 shrink-0 rounded-xl flex items-center justify-center text-sm font-extrabold bg-primary/10 text-primary border-2 border-primary/20 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300"
          >
            {s.step}
          </motion.div>
          <div>
            <h4 className="font-bold text-lg text-foreground">{s.title}</h4>
            <p className="text-muted-foreground mt-1 leading-relaxed">{s.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

const HowItWorksSection = () => (
  <section className="py-28 px-4 relative">
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

    <div className="max-w-5xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
        <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary mb-4">How It Works</span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground">Simple for Everyone</h2>
        <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">Getting started takes just minutes, whether you're buying or selling.</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-20">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-bold text-primary mb-10"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            For Buyers
          </motion.div>
          <StepList steps={buyerSteps} />
        </div>
        <div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-bold text-accent mb-10"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            For Shopkeepers
          </motion.div>
          <StepList steps={shopkeeperSteps} />
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
