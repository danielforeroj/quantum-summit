import { motion } from "framer-motion";
import { Users, Shield, Presentation } from "lucide-react";

const stats = [
  { value: "200–500", label: "SENIOR DECISION-MAKERS", icon: Users },
  { value: "PRACTITIONER-ONLY", label: "NO HYPE, REAL IMPLEMENTATION", icon: Shield },
  { value: "SPONSOR SLOTS", label: "LIVE DEMO & Q&A", icon: Presentation },
];

const TrustStrip = () => {
  return (
    <section className="py-16 border-y border-border/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="trust-stat flex flex-col items-center"
            >
              <stat.icon className="trust-stat-icon w-5 h-5 text-primary mb-4" strokeWidth={1.5} />
              <div className="trust-stat-value">{stat.value}</div>
              <div className="trust-stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustStrip;
