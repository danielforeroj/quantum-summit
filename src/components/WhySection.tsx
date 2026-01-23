import { motion } from "framer-motion";
import ringsIllustration from "@/assets/illustrations/rings.png";

const WhySection = () => {
  return (
    <section id="why" className="py-16 md:py-24 relative">
      {/* Background illustration - very subtle */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/4 h-full pointer-events-none opacity-[0.08]">
        <img 
          src={ringsIllustration} 
          alt="" 
          className="w-full h-full object-contain object-left"
        />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="label-caps text-primary mb-3 md:mb-4 block">Why This Exists</span>
          <p className="body-large text-sm md:text-base">
            Quantum threat migration is moving from research into production budgets in 2026. 
            This event is designed to help builders, institutions, and investors get aligned on 
            what "quantum-ready" means in practice for chains, custody, privacy, and tokenized 
            assets—and what teams should do next.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhySection;
