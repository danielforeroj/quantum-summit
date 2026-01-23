import platformIllustration from "@/assets/illustrations/platform.png";
import SponsorsStrip from "@/components/SponsorsStrip";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 md:pt-24 pb-12 md:pb-16">
      {/* Illustration - positioned right, low opacity to not interfere with text */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 md:w-2/5 h-full pointer-events-none opacity-[0.12] md:opacity-[0.18]">
        <img 
          src={platformIllustration} 
          alt="" 
          className="w-full h-full object-contain object-right"
        />
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-3xl">
          {/* Event badge */}
          <div className="mb-4 md:mb-6">
            <span className="label-caps">
              ETHDenver 2026 · February 19
            </span>
          </div>

          {/* Main headline */}
          <h1 className="heading-display mb-4 md:mb-6">
            Quantum Summit
            <span className="block text-muted-foreground">+ Quantum Mixer</span>
          </h1>

          {/* Tagline */}
          <p className="heading-subsection text-muted-foreground font-light mb-6 md:mb-8">
            Securing the Future: Quantum-Ready Web3 Infrastructure
          </p>

          {/* Event description */}
          <div className="body-default mb-8 md:mb-10 space-y-3">
            <p>Two curated, invitation-only events on the same day:</p>
            <ul className="list-clean space-y-2 ml-1">
              <li>
                <strong className="text-foreground">Quantum Summit:</strong> a full-day forum on post-quantum readiness (talks + panels + demos)
              </li>
              <li>
                <strong className="text-foreground">Quantum Mixer:</strong> a curated continuation immediately after the Summit for speakers, sponsors, and invited operators
              </li>
            </ul>
            <div className="mt-6">
              <SponsorsStrip />
            </div>
          </div>

          {/* Event details */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-10 py-4 md:py-6 border-y border-border/50">
            <div>
              <div className="label-caps mb-1 md:mb-2">Date</div>
              <div className="text-xs md:text-sm text-foreground">Thursday, February 19, 2026</div>
            </div>
            <div>
              <div className="label-caps mb-1 md:mb-2">Summit</div>
              <div className="text-xs md:text-sm text-foreground">10:00 AM – 2:00 PM MST</div>
            </div>
            <div>
              <div className="label-caps mb-1 md:mb-2">Mixer</div>
              <div className="text-xs md:text-sm text-foreground">4:00 PM – 5:00 PM MST</div>
            </div>
            <div>
              <div className="label-caps mb-1 md:mb-2">Format</div>
              <div className="text-xs md:text-sm text-foreground">Invite-only · Recorded</div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col gap-3 md:gap-4">
            {/* Top row - RSVP buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <a href="https://luma.com/ez0wln8b?tk=GRhdgH" target="_blank" rel="noopener noreferrer" className="btn-primary text-center">
                RSVP QUANTUM SUMMIT
              </a>
              <a href="https://luma.com/mcokfwkl" target="_blank" rel="noopener noreferrer" className="btn-primary text-center">
                RSVP QUANTUM MIXER
              </a>
            </div>
            {/* Bottom row - Secondary actions */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <a href="https://docsend.com/view/747hn95h3fvqq32j" target="_blank" rel="noopener noreferrer" className="btn-secondary text-center">
                DOWNLOAD SPONSORSHIP DECK
              </a>
              <a
                href="https://forms.gle/zRqtAhNka16BHVeC6"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary text-center"
              >
                APPLY TO SPEAK →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
