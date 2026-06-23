import { motion } from "framer-motion";
import { Search, Store, Clock, MapPin, Shirt, ShieldCheck, Camera, Star } from "lucide-react";

const features = [
  { icon: Search, title: "Browse Catalogs Online", desc: "Explore real clothes from local shops before you visit — no surprises. Filter by category, size, price range, and more." },
  { icon: MapPin, title: "Find Nearby Shops", desc: "Location-based discovery shows you the closest stores with what you need. Get directions, hours, and contact details." },
  { icon: Clock, title: "Urgent Needs Mode", desc: "Filter for immediate availability when time is tight. See which shops are open right now and have your size in stock." },
  { icon: Shirt, title: "Trial Room Info", desc: "Know which shops offer trial rooms, fitting assistance, and alteration services before you visit." },
  { icon: Store, title: "Shopkeeper Dashboard", desc: "A powerful yet simple dashboard to list catalogs, manage inventory in real time, and attract local customers." },
  { icon: Camera, title: "Photo Catalogs", desc: "Real product photos uploaded by shopkeepers — no misleading stock images. What you see is what you get." },
  { icon: ShieldCheck, title: "Verified Listings", desc: "Every shop is verified for authenticity and accurate inventory through our verification process." },
  { icon: Star, title: "Reviews & Ratings", desc: "Community-driven ratings help you pick the best local shops with honest reviews from real buyers." },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring" as const, stiffness: 80, damping: 15 } },
};

const FeaturesSection = () => (
  <section className="py-28 px-4 relative overflow-hidden grid-pattern">
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

    <div className="max-w-6xl mx-auto relative z-10">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary mb-4">Features</span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground">Everything You Need</h2>
        <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">A complete platform connecting buyers to local shops with the tools that actually matter.</p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {features.map((f) => (
          <motion.div
            key={f.title}
            variants={item}
            whileHover={{ y: -8, transition: { type: "spring", stiffness: 300 } }}
            className="group relative rounded-2xl border border-border p-6 bg-card/80 backdrop-blur-sm overflow-hidden cursor-default"
          >
            {/* Hover glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_50%_0%,hsl(168_76%_42%/0.06),transparent_70%)]" />

            {/* Animated border on hover */}
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/20 transition-colors duration-300" />

            <motion.div
              whileHover={{ scale: 1.15, rotate: -5 }}
              className="relative w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-primary/10"
            >
              <f.icon className="w-6 h-6 text-primary" />
            </motion.div>
            <h3 className="relative font-bold text-foreground text-lg">{f.title}</h3>
            <p className="relative mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default FeaturesSection;
