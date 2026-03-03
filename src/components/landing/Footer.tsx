import { Linkedin, Youtube, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import medicortexLogo from "@/assets/medicortex-logo.png";
import { useTranslation } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useTranslation();

  const navKeys = [
    { key: "nav.home", href: "#home" },
    { key: "nav.solutions", href: "#solutions" },
    { key: "nav.platforms", href: "#platforms" },
    { key: "nav.about", href: "#about" },
    { key: "nav.contact", href: "#contact" },
  ];

  return (
    <footer className="bg-secondary py-16 border-t border-secondary-foreground/10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={medicortexLogo} alt="Medicortex" className="h-10 w-10 rounded-lg" />
              <span className="font-bold text-lg text-secondary-foreground">Medicortex</span>
            </div>
            <p className="text-secondary-foreground/50 text-sm leading-relaxed">
              {t("footer.desc")}
            </p>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="font-semibold text-secondary-foreground mb-4 text-sm uppercase tracking-wider">{t("footer.links")}</h4>
            <nav className="space-y-2">
              {navKeys.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  className="block text-sm text-secondary-foreground/50 hover:text-primary transition-colors"
                >
                  {t(link.key)}
                </a>
              ))}
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-secondary-foreground mb-4 text-sm uppercase tracking-wider">{t("footer.legal")}</h4>
            <nav className="space-y-2">
              <Link to="/datenschutz" className="block text-sm text-secondary-foreground/50 hover:text-primary transition-colors">
                {t("footer.privacy")}
              </Link>
              <Link to="/impressum" className="block text-sm text-secondary-foreground/50 hover:text-primary transition-colors">
                {t("footer.impressum")}
              </Link>
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-secondary-foreground mb-4 text-sm uppercase tracking-wider">{t("footer.connect")}</h4>
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

        {/* GDPR badge + copyright */}
        <div className="border-t border-secondary-foreground/10 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-primary" />
              <span className="text-xs text-secondary-foreground/50 font-medium">{t("footer.gdpr")}</span>
            </div>
            <p className="text-xs text-secondary-foreground/40">
              {t("footer.copyright")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
