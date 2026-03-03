import { Linkedin, Youtube, Shield, Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import medicortexLogo from "@/assets/logo.svg";
import { Button } from "@/components/ui/button";
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
    <footer className="bg-secondary text-secondary-foreground">
      {/* CTA Section before footer */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              {t("footer.ctaTitle")}
            </h3>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">
              {t("footer.ctaSub")}
            </p>
            <Button size="lg" className="gradient-teal border-0 text-primary-foreground font-semibold px-8">
              {t("footer.ctaButton")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={medicortexLogo} alt="Medicortex" className="h-10 w-10" />
              <span className="font-bold text-xl text-white">Medicortex</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              {t("footer.desc")}
            </p>
            <a 
              href="mailto:hello@medicortex.de"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 text-sm font-medium transition-colors"
            >
              <Mail className="h-4 w-4" />
              hello@medicortex.de
            </a>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">{t("footer.links")}</h4>
            <nav className="space-y-2">
              {navKeys.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  className="block text-sm text-white/50 hover:text-primary transition-colors"
                >
                  {t(link.key)}
                </a>
              ))}
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">{t("footer.legal")}</h4>
            <nav className="space-y-2">
              <Link to="/datenschutz" className="block text-sm text-white/50 hover:text-primary transition-colors">
                {t("footer.privacy")}
              </Link>
              <Link to="/impressum" className="block text-sm text-white/50 hover:text-primary transition-colors">
                {t("footer.impressum")}
              </Link>
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">{t("footer.connect")}</h4>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="LinkedIn"
                className="h-10 w-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors text-white/50"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="h-10 w-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors text-white/50"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* GDPR badge + copyright */}
        <div className="border-t border-white/10 mt-10 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-primary" />
              <span className="text-xs text-white/40 font-medium">{t("footer.gdpr")}</span>
            </div>
            <p className="text-xs text-white/30">
              {t("footer.copyright")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

import { motion } from "framer-motion";

export default Footer;
