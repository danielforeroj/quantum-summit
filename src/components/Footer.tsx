import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="py-12 md:py-16 border-t border-border/30">
      <div className="section-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Logo and description */}
          <div className="col-span-2">
            <a href="/" className="flex items-center gap-3 mb-4">
              <img 
                src={logo} 
                alt="Quantum Summit" 
                className="h-8 md:h-10 w-auto"
              />
            </a>
            <p className="body-default text-xs md:text-sm max-w-xs">
              Quantum Secure Defense Tech. Building infrastructure for the post-quantum era.
            </p>
          </div>

          {/* Event links */}
          <div>
            <h4 className="label-caps mb-3 md:mb-4">Event</h4>
            <ul className="space-y-2 md:space-y-3">
              <li><a href="#summit" className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors">Quantum Summit</a></li>
              <li><a href="#agenda" className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors">Agenda</a></li>
              <li><a href="#mixer" className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors">Quantum Mixer</a></li>
              <li><a href="#sponsor" className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors">Sponsor</a></li>
            </ul>
          </div>

          {/* Tectonic links */}
          <div>
            <h4 className="label-caps mb-3 md:mb-4">Tectonic</h4>
            <ul className="space-y-2 md:space-y-3">
              <li><a href="https://tectonic.xyz" target="_blank" rel="noopener noreferrer" className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors">About</a></li>
              <li><a href="https://tectonic.xyz" target="_blank" rel="noopener noreferrer" className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors">Team</a></li>
              <li><a href="https://tectonic.xyz" target="_blank" rel="noopener noreferrer" className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors">Blog</a></li>
              <li><a href="https://tectonic.xyz" target="_blank" rel="noopener noreferrer" className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-xs text-muted-foreground">
            © 2026 Tectonic. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a 
              href="https://x.com/tectonicxyz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
