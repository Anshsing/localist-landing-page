import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Is Localist free for buyers?", a: "Yes, Localist is completely free for buyers. You can browse catalogs, find shops, read reviews, and use all features at no cost." },
  { q: "How do shopkeepers get listed?", a: "Shopkeepers can sign up on the platform, add their shop details and photos, and start uploading their catalog. Our team verifies each listing to ensure quality and accuracy." },
  { q: "Can I reserve or buy clothes online through Localist?", a: "Localist is designed for in-store purchases. You browse and discover online, then visit the shop to try on and buy. We're exploring reservation features for future updates." },
  { q: "What cities is Localist available in?", a: "We're launching soon! We're starting with select cities in India and expanding rapidly. Join the waitlist to be notified when we launch in your area." },
  { q: "How is this different from regular online shopping?", a: "Unlike e-commerce, Localist shows you real inventory from real shops near you. You can try clothes before buying, get them instantly, support local businesses, and avoid return hassles." },
  { q: "Is there a fee for shopkeepers?", a: "We offer a free basic listing plan. Premium features like promoted listings, analytics, and priority placement are available through affordable subscription plans." },
];

const FAQSection = () => (
  <section className="py-28 px-4 relative">
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

    <div className="max-w-3xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary mb-4">FAQ</span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground">Frequently Asked Questions</h2>
        <p className="mt-4 text-muted-foreground text-lg">Got questions? We've got answers.</p>
      </motion.div>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, type: "spring", stiffness: 100 }}
          >
            <AccordionItem value={`faq-${i}`} className="border border-border rounded-xl px-6 hover:border-primary/20 transition-colors data-[state=open]:border-primary/30 data-[state=open]:shadow-md">
              <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
