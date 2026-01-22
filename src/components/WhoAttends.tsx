import { motion } from "framer-motion";

const attendees = [
  "L1 foundation leadership & core protocol teams",
  "Security and treasury leads at funds and custodians",
  "Crypto-native VCs and family offices deploying 2026 capital",
  "Enterprise on-chain treasury teams",
  "Select media and analysts",
];

const WhoAttends = () => {
  return (
    <section className="py-24 border-t border-border/30">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="label-caps text-primary mb-4 block">Who Attends</span>
            <h2 className="heading-section mb-4">Curated Audience</h2>
            <p className="body-default">
              Invitation-only access ensures high-signal conversations with peers 
              who are actively working on post-quantum security challenges.
            </p>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="list-clean space-y-4"
          >
            {attendees.map((attendee, index) => (
              <li key={index} className="text-sm">{attendee}</li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-border/30"
        >
          <a href="https://luma.com/ez0wln8b?tk=GRhdgH" target="_blank" rel="noopener noreferrer" className="btn-primary">
            RSVP
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoAttends;
