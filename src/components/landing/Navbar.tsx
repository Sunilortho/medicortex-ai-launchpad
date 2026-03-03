import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronRight } from "lucide-react";
import medicortexLogo from "@/assets/logo.svg";
import { useTranslation } from "@/contexts/LanguageContext";
import type { Language } from "@/i18n/translations";
import { motion } from "framer-motion";

const navLinkKeys = [
  { key: "nav.home", href: "#home" },
  { key: "nav.solutions", href: "#solutions" },
  { key: "nav.platforms", href: "#platforms" },
  { key: "nav.about", href: "#about" },
  { key: "nav.contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t, language, setLanguage } = useTranslation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleLang = (lang: Language) => setLanguage(lang);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass border-b border-primary/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex flex-col items-center px-4">
        {/* Logo centered */}
        <a href="#home" className="flex items-center gap-3 mb-2">
          <motion.img
            src={medicortexLogo}
            alt="Medicortex Logo"
            className={`transition-all duration-300 ${scrolled ? "h-10 w-10" : "h-12 w-12"}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.span
            className={`font-extrabold tracking-tight transition-all duration-300 ${
              scrolled ? "text-xl" : "text-2xl"
            } text-foreground`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="text-primary">Medi</span>cortex
          </motion.span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinkKeys.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                scrolled ? "text-muted-foreground" : "text-foreground/80"
              }`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 + i * 0.05 }}
            >
              {t(link.key)}
            </motion.a>
          ))}

          {/* Language toggle */}
          <div className="flex items-center rounded-full border border-primary/30 overflow-hidden text-xs font-semibold">
            <button
              onClick={() => toggleLang("de")}
              className={`px-3 py-1.5 transition-colors ${
                language === "de"
                  ? "bg-primary text-primary-foreground"
                  : scrolled
                  ? "text-muted-foreground hover:bg-muted"
                  : "text-foreground/70 hover:bg-white/10"
              }`}
              aria-label="Deutsch"
            >
              DE
            </button>
            <button
              onClick={() => toggleLang("en")}
              className={`px-3 py-1.5 transition-colors ${
                language === "en"
                  ? "bg-primary text-primary-foreground"
                  : scrolled
                  ? "text-muted-foreground hover:bg-muted"
                  : "text-foreground/70 hover:bg-white/10"
              }`}
              aria-label="English"
            >
              EN
            </button>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Button 
              size="sm" 
              className="gradient-teal border-0 text-primary-foreground font-semibold ml-2 group glow-sm hover:glow"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t("nav.getStarted")}
              <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden absolute right-4 top-5"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="text-foreground" />
          ) : (
            <Menu className="text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div 
          className="md:hidden glass border-t border-primary/20 px-6 py-4 space-y-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {navLinkKeys.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-sm font-medium text-foreground hover:text-primary"
              onClick={() => setMobileOpen(false)}
            >
              {t(link.key)}
            </a>
          ))}
          {/* Mobile language toggle */}
          <div className="flex items-center gap-2 py-2">
            <button
              onClick={() => toggleLang("de")}
              className={`px-3 py-1 rounded text-xs font-semibold ${language === "de" ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}
            >
              DE
            </button>
            <button
              onClick={() => toggleLang("en")}
              className={`px-3 py-1 rounded text-xs font-semibold ${language === "en" ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}
            >
              EN
            </button>
          </div>
          <Button 
            size="sm" 
            className="gradient-teal border-0 text-primary-foreground font-semibold w-full glow-sm"
            onClick={() => {
              setMobileOpen(false);
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {t("nav.getStarted")}
          </Button>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
