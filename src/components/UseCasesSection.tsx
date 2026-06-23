import { motion } from "framer-motion";
import { Briefcase, Plane, CalendarClock, Gift, GraduationCap } from "lucide-react";

const cases = [
  { icon: Briefcase, title: "Job Interviews", desc: "Need a formal outfit by tomorrow? Find blazers, dress shirts, and formals near you — ready to try and buy. No time for deliveries.", emoji: "👔" },
  { icon: Plane, title: "Travel Emergencies", desc: "Luggage lost or forgot something? Locate nearby shops with the clothing you need. Get directions and walk in within minutes.", emoji: "✈️" },
  { icon: CalendarClock, title: "Last-Minute Events", desc: "Wedding invite just arrived? Browse ethnic wear, party wear, and formal options nearby — see real photos before you go.", emoji: "🎉" },
  { icon: Gift, title: "Gifting on the Go", desc: "Find unique local clothing gifts without guesswork. See what's in stock, check sizes, and pick it up on the way.", emoji: "🎁" },
  { icon: GraduationCap, title: "College Freshers", desc: "New in town? Discover the best local shops for trendy yet affordable fashion. Build your wardrobe without overspending.", emoji: "🎓" },
];

const UseCasesSection = () => (
  <section className="py-28 px-4 relative">
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

    <div className="max-w-5xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary mb-4">Use Cases</span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground">Built for Urgent Moments</h2>
        <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">Life doesn't wait — and neither should your wardrobe.</p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cases.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, type: "spring", stiffness: 80 }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="relative rounded-2xl border border-border p-8 group overflow-hidden cursor-default"
          >
            {/* Animated gradient bg on hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />

            {/* Large background emoji */}
            <span className="absolute -right-2 -bottom-2 text-7xl opacity-[0.06] group-hover:opacity-[0.12] transition-opacity duration-300 select-none pointer-events-none">
              {c.emoji}
            </span>

            <div className="relative ">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-14 h-14 rounded-2xl flex items-center justify-center align-middle mb-5 bg-primary/10"
              >
                <c.icon className="w-7 h-7 text-primary" />
              </motion.div>
              <h3 className="font-bold text-xl text-foreground">{c.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{c.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default UseCasesSection;
