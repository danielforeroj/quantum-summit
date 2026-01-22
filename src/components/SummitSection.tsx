import { motion } from "framer-motion";
import pyramidIllustration from "@/assets/illustrations/pyramid.png";

const agenda = [
  { time: "10:00", title: "Opening Keynote: Is the Quantum Threat Overhyped?" },
  { time: "10:30", title: "Panel 1: Blockchains in the Quantum Era" },
  { time: "10:50", title: "Presentation Slot 1" },
  { time: "11:00", title: "Panel 2: Putting Post-Quantum Cryptography Front and Centre" },
  { time: "11:20", title: "Break" },
  { time: "11:30", title: "Panel 3: Where TEEs, FHE, MPC, and ZK Fit in a Quantum World" },
  { time: "11:50", title: "Presentation Slot 2" },
  { time: "12:00", title: "Lunch Break" },
  { time: "13:00", title: "Panel 4: The Privacy Stack in the Quantum Era" },
  { time: "13:20", title: "Presentation Slot 3" },
  { time: "13:30", title: "Panel 5: Funding the Quantum Future" },
  { time: "13:50", title: "Presentation Slot 4 / Closing" },
];

const SummitSection = () => {
  return (
    <section id="summit" className="py-16 md:py-24 relative">
      {/* Background illustration - very subtle */}
      <div className="absolute right-0 top-0 w-1/4 h-full pointer-events-none opacity-[0.1]">
        <img 
          src={pyramidIllustration} 
          alt="" 
          className="w-full h-full object-contain object-right-top"
        />
      </div>

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-10 md:mb-16"
        >
          <span className="label-caps text-primary mb-3 md:mb-4 block">Event 1</span>
          <h2 className="heading-display mb-4 md:mb-6">Quantum Summit</h2>
          <p className="body-large text-sm md:text-base mb-4 md:mb-6">
            A 4-hour, invitation-only forum for builders, security leaders, and investors 
            focused on post-quantum blockchain security.
          </p>
          
          <div className="grid grid-cols-2 gap-4 md:gap-6 py-4 md:py-6 border-y border-border/50">
            <div>
              <div className="label-caps mb-1 md:mb-2">Time</div>
              <div className="text-xs md:text-sm text-foreground">10:00 AM – 2:00 PM MST</div>
            </div>
            <div>
              <div className="label-caps mb-1 md:mb-2">Format</div>
              <div className="text-xs md:text-sm text-foreground">In-person · Recorded</div>
            </div>
          </div>
        </motion.div>

        {/* Agenda */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          id="agenda"
        >
          <h3 className="heading-subsection mb-6 md:mb-8">Agenda</h3>
          <div className="max-w-2xl">
            {agenda.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="agenda-item"
              >
                <span className="agenda-time">{item.time}</span>
                <span className="agenda-title">{item.title}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 md:mt-12 flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4"
        >
          <a href="https://luma.com/ez0wln8b?tk=GRhdgH" target="_blank" rel="noopener noreferrer" className="btn-primary text-center">RSVP</a>
          <a href="#speak" className="btn-secondary text-center">Apply to Speak</a>
        </motion.div>
      </div>
    </section>
  );
};

export default SummitSection;
