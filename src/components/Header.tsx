import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import logo from "@/assets/logo.png";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 py-4 md:py-6">
      <div className="section-container flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="Quantum Summit"
            className="h-10 md:h-14 w-auto transition-opacity duration-300 group-hover:opacity-80"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#summit" className="nav-link">Summit</a>
          <a href="#agenda" className="nav-link">Agenda</a>
          <a href="#mixer" className="nav-link">Mixer</a>
          <a href="#sponsor" className="nav-link">Sponsor</a>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Desktop CTA */}
          <a href="https://luma.com/ez0wln8b?tk=GRhdgH" target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex btn-secondary text-xs py-2 px-4">
            RSVP
          </a>

          {/* Mobile menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button
                  type="button"
                  aria-label="Open menu"
                  className="btn-secondary px-3 py-2"
                >
                  <Menu className="h-4 w-4" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-background">
                <nav className="mt-10 flex flex-col gap-6">
                  <a href="#summit" className="nav-link text-sm">Summit</a>
                  <a href="#agenda" className="nav-link text-sm">Agenda</a>
                  <a href="#mixer" className="nav-link text-sm">Mixer</a>
                  <a href="#sponsor" className="nav-link text-sm">Sponsor</a>
                  <div className="pt-2">
                    <a href="https://luma.com/ez0wln8b?tk=GRhdgH" target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center">
                      RSVP
                    </a>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
