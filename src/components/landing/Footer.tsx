import { Linkedin, Youtube } from "lucide-react";
import medicortexLogo from "@/assets/medicortex-logo.png";

const Footer = () => {
  return (
    <footer className="bg-secondary py-16 border-t border-secondary-foreground/10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={medicortexLogo} alt="Medicortex" className="h-10 w-10 rounded-lg" />
              <span className="font-bold text-lg text-secondary-foreground">Medicortex</span>
            </div>
            <p className="text-secondary-foreground/50 text-sm leading-relaxed">
              Berlin-based AI Healthcare Solutions. Transforming hospitals, clinics, and staffing agencies worldwide with proven AI platforms.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="font-semibold text-secondary-foreground mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <nav className="space-y-2">
              {["Home", "Solutions", "Platforms", "About", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-sm text-secondary-foreground/50 hover:text-primary transition-colors"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-secondary-foreground mb-4 text-sm uppercase tracking-wider">Connect</h4>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="LinkedIn"
                className="h-10 w-10 rounded-lg bg-secondary-foreground/5 flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors text-secondary-foreground/50"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="h-10 w-10 rounded-lg bg-secondary-foreground/5 flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors text-secondary-foreground/50"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 pt-8 text-center">
          <p className="text-xs text-secondary-foreground/40">
            © 2026 Medicortex. All rights reserved. | Berlin-based AI Healthcare Solutions
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
