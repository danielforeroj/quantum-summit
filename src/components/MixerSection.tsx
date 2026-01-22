import { motion } from "framer-motion";
import fragmentsIllustration from "@/assets/illustrations/fragments.png";

const expectations = [
  "Low-ego, high-signal networking",
  "Builders, security leads, funds/custodians, and infra operators",
  "Fast introductions and high-context conversations",
  "Address revealed after RSVP approval",
];

const MixerSection = () => {
  return (
    <section id="mixer" className="py-16 md:py-24 relative">
      {/* Background illustration - very subtle */}
      <div className="absolute left-0 bottom-0 w-1/4 h-1/2 pointer-events-none opacity-[0.08]">
        <img 
          src={fragmentsIllustration} 
          alt="" 
          className="w-full h-full object-contain object-left-bottom"
        />
      </div>

      <div className="section-container relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
          {/* Left column - Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="label-caps text-primary mb-3 md:mb-4 block">Event 2 · Same Day</span>
            <h2 className="heading-display mb-4 md:mb-6">Quantum Mixer</h2>
            <p className="body-large text-sm md:text-base mb-6 md:mb-8">
              A curated mixer for speakers, sponsors, and invited operators to continue 
              the conversations from the Summit—partnerships, integrations, and what 
              teams are actually doing next.
            </p>

            <div className="grid grid-cols-2 gap-4 md:gap-6 py-4 md:py-6 border-y border-border/50 mb-6 md:mb-8">
              <div>
                <div className="label-caps mb-1 md:mb-2">Time</div>
                <div className="text-xs md:text-sm text-foreground">4:00 PM – 5:00 PM MST</div>
              </div>
              <div>
                <div className="label-caps mb-1 md:mb-2">Format</div>
                <div className="text-xs md:text-sm text-foreground">Invite-only Networking</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4">
              <a href="https://luma.com/mcokfwkl" target="_blank" rel="noopener noreferrer" className="btn-primary text-center">RSVP</a>
              <a href="https://docsend.com/view/747hn95h3fvqq32j" target="_blank" rel="noopener noreferrer" className="btn-secondary text-center">Sponsorship Deck</a>
            </div>
          </motion.div>

          {/* Right column - Expectations */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="surface-elevated p-6 md:p-8"
          >
            <h3 className="heading-subsection mb-4 md:mb-6">What to Expect</h3>
            <ul className="list-clean space-y-3 md:space-y-4">
              {expectations.map((item, index) => (
                <li key={index} className="text-xs md:text-sm">{item}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MixerSection;
