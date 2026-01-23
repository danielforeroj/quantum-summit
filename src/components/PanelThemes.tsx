import { useState } from "react";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import layersIllustration from "@/assets/illustrations/layers.png";
import labyrinthIllustration from "@/assets/illustrations/labyrinth.png";
import eyeIllustration from "@/assets/illustrations/eye.png";
import cubesIllustration from "@/assets/illustrations/cubes.png";
import clusterIllustration from "@/assets/illustrations/cluster.png";

const panels = [
  {
    number: "01",
    title: "Blockchains in the Quantum Era",
    description: "What quantum changes in chain security, consensus assumptions, crypto agility, and upgrade timelines.",
    illustration: layersIllustration,
    speakers: [],
    fullDescription: "This panel explores how quantum computing will fundamentally reshape blockchain security paradigms. We'll discuss the timeline for quantum threats, what consensus mechanisms need to change, and how projects should plan their crypto-agility roadmaps. Expect deep technical insights on lattice-based signatures, hash-based schemes, and the practical challenges of upgrading live networks."
  },
  {
    number: "02",
    title: "Post-Quantum Cryptography Front and Centre",
    description: "Migration playbooks (hybrid modes, key rotation, compatibility), performance tradeoffs, and what \"production-ready\" looks like.",
    illustration: labyrinthIllustration,
    speakers: [],
    fullDescription: "Moving from classical to post-quantum cryptography isn't just a library swap—it's a multi-year migration affecting every layer of your stack. This panel covers hybrid deployment strategies, backwards compatibility patterns, key rotation mechanisms, and real performance benchmarks from production systems. Learn from teams who've already started their PQC journey."
  },
  {
    number: "03",
    title: "TEEs, FHE, MPC, ZK in a Quantum World",
    description: "Real-world threat models and where each primitive belongs for scalable private execution, verifiable computation, and secure key management.",
    illustration: cubesIllustration,
    speakers: [],
    fullDescription: "Trusted Execution Environments, Fully Homomorphic Encryption, Multi-Party Computation, and Zero-Knowledge Proofs each solve different problems—but how do they hold up against quantum adversaries? This panel maps out the threat landscape for each primitive, identifies which are quantum-resistant by design, and discusses practical deployment strategies for building quantum-safe confidential computing systems."
  },
  {
    number: "04",
    title: "The Privacy Stack in the Quantum Era",
    description: "Durable privacy, metadata resistance, selective disclosure, and compliance-safe confidentiality.",
    illustration: eyeIllustration,
    speakers: [],
    fullDescription: "Privacy today must remain private forever—even against future quantum computers. This panel examines what 'durable privacy' means in practice, how to protect metadata when transaction contents are encrypted, and how to build selective disclosure systems that satisfy both regulators and users. We'll also explore the tension between compliance requirements and true confidentiality."
  },
  {
    number: "05",
    title: "Funding the Quantum Future",
    description: "What gets funded across PQ security, quantum infrastructure, and dev ecosystems—and how commercialization will be judged.",
    illustration: clusterIllustration,
    speakers: [],
    fullDescription: "The quantum transition represents a massive market opportunity—but what are investors actually looking for? This panel brings together leading VCs and grant-makers to discuss funding priorities across post-quantum security, quantum computing infrastructure, and developer tools. Learn what makes a compelling pitch, how commercialization timelines are evaluated, and where the biggest opportunities lie."
  },
];

type Panel = typeof panels[number];

const PanelThemes = () => {
  const [selectedPanel, setSelectedPanel] = useState<Panel | null>(null);

  return (
    <section className="py-24 border-t border-border/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="label-caps text-primary mb-4 block">Panel Themes</span>
          <h2 className="heading-section">What We'll Cover</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {panels.map((panel, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="panel-card group cursor-pointer hover:border-primary/40 transition-colors"
              onClick={() => setSelectedPanel(panel)}
            >
              {/* Illustration */}
              <div className="h-24 mb-6 opacity-40 group-hover:opacity-60 transition-opacity">
                <img 
                  src={panel.illustration} 
                  alt="" 
                  className="h-full w-auto object-contain"
                />
              </div>

              {/* Panel number */}
              <span className="text-xs text-primary font-medium tracking-wider mb-3 block">
                PANEL {panel.number}
              </span>

              {/* Title */}
              <h3 className="text-lg font-medium text-foreground mb-3 leading-snug group-hover:text-primary transition-colors">
                {panel.title}
              </h3>

              {/* Description */}
              <p className="body-default text-sm">
                {panel.description}
              </p>

              <p className="text-xs text-muted-foreground mt-3">Speakers: TBC</p>

              {/* Click hint */}
              <span className="text-xs text-primary/60 mt-4 block group-hover:text-primary transition-colors">
                Click for details →
              </span>
            </motion.div>
          ))}
        </div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 flex flex-wrap gap-4"
        >
          <a href="https://luma.com/ez0wln8b?tk=GRhdgH" target="_blank" rel="noopener noreferrer" className="btn-primary">RSVP</a>
          <a href="https://docsend.com/view/747hn95h3fvqq32j" target="_blank" rel="noopener noreferrer" className="btn-secondary">Download Sponsorship Deck</a>
        </motion.div>
      </div>

      {/* Panel Detail Dialog */}
      <Dialog
        open={!!selectedPanel}
        onOpenChange={(open) => {
          if (!open) setSelectedPanel(null);
        }}
      >
        <DialogContent className="max-w-2xl bg-background border-border">
          {selectedPanel && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={selectedPanel.illustration} 
                    alt="" 
                    className="h-16 w-auto object-contain opacity-60"
                  />
                  <span className="text-xs text-primary font-medium tracking-wider">
                    PANEL {selectedPanel.number}
                  </span>
                </div>
                <DialogTitle className="text-xl md:text-2xl font-medium text-foreground">
                  {selectedPanel.title}
                </DialogTitle>
              </DialogHeader>
              
              <DialogDescription className="body-default mt-4">
                {selectedPanel.fullDescription}
              </DialogDescription>

              <div className="mt-6 pt-6 border-t border-border/30">
                <p className="text-sm text-muted-foreground">
                  Speakers will be announced soon.
                </p>
              </div>

              <div className="mt-6 pt-4 flex gap-3">
                <a href="https://luma.com/ez0wln8b?tk=GRhdgH" target="_blank" rel="noopener noreferrer" className="btn-primary text-sm">
                  RSVP
                </a>
                <a
                  href="https://forms.gle/zRqtAhNka16BHVeC6"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary text-sm"
                >
                  Apply to Speak
                </a>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default PanelThemes;
