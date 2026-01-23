import { motion } from "framer-motion";

const sponsorshipIncludes = [
  "Stage presence (talk/moderation options depending on fit)",
  "Brand placement across venue, stream, and media",
  "Demo space / partner presentations (limited)",
  "Co-marketing before and after the events",
  "Inclusion in recap content + media kit",
];

const deliverables = [
  "Dedicated microsite + Luma registration",
  "On-site banners and branding",
  "Event coverage video produced by Hexaco Alpha",
  "Press kit and white-label assets",
  "On-demand video content on Tectonic YouTube and sponsor channels",
];

const SponsorSection = () => {
  return (
    <section id="sponsor" className="py-16 md:py-24 border-t border-border/30">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-10 md:mb-16"
        >
          <span className="label-caps text-primary mb-3 md:mb-4 block">Sponsorship</span>
          <h2 className="heading-display mb-4 md:mb-6">
            Sponsor the Quantum Summit + Mixer
          </h2>
          <p className="body-large text-sm md:text-base">
            Give your brand premium thought-leadership positioning and direct access 
            to the L1s, funds, and enterprises allocating 2026 budgets to post-quantum security.
          </p>
        </motion.div>

        {/* Two columns */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-10 md:mb-16">
          {/* Sponsorship includes */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="surface-elevated p-6 md:p-8"
          >
            <h3 className="heading-subsection mb-4 md:mb-6">Sponsorships Include</h3>
            <ul className="list-clean space-y-3 md:space-y-4">
              {sponsorshipIncludes.map((item, index) => (
                <li key={index} className="text-xs md:text-sm">{item}</li>
              ))}
            </ul>
          </motion.div>

          {/* Deliverables */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="surface-elevated p-6 md:p-8"
          >
            <h3 className="heading-subsection mb-4 md:mb-6">Deliverables & Amplification</h3>
            <ul className="list-clean space-y-3 md:space-y-4">
              {deliverables.map((item, index) => (
                <li key={index} className="text-xs md:text-sm">{item}</li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* CTA section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="surface-card p-6 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
            <div>
              <h3 className="heading-subsection mb-2 md:mb-3">Ready to Sponsor?</h3>
              <p className="body-default text-xs md:text-sm mb-2">
                Complete the short intake form or reach out directly to discuss custom activations.
              </p>
              <p className="text-[10px] md:text-xs text-muted-foreground">
                Deadline for full inclusion: January 31, 2026
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 md:justify-end">
              <a href="https://docsend.com/view/747hn95h3fvqq32j" target="_blank" rel="noopener noreferrer" className="btn-primary text-center">Download Sponsorship Deck</a>
            </div>
          </div>
        </motion.div>

        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-border/30"
        >
          <span className="label-caps mb-4 block">Primary Contacts</span>
          <div className="flex flex-wrap gap-8">
            <div>
              <div className="text-sm text-foreground font-medium">Min H. Kim</div>
              <a href="mailto:min@tectonic.xyz" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                min@tectonic.xyz
              </a>
            </div>
            <div>
              <div className="text-sm text-foreground font-medium">Daniel Forero</div>
              <a href="mailto:daniel@tectonic.xyz" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                daniel@tectonic.xyz
              </a>
            </div>
            <div>
              <div className="text-sm text-foreground font-medium">Dion Guillaume</div>
              <a href="mailto:dion@tectonic.xyz" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                dion@tectonic.xyz
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SponsorSection;
