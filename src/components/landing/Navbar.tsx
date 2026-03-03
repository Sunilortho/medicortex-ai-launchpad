import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import medicortexLogo from "@/assets/medicortex-logo.png";
import { useTranslation } from "@/contexts/LanguageContext";
import type { Language } from "@/i18n/translations";

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto flex flex-col items-center px-4">
        {/* Logo centered */}
        <a href="#home" className="flex items-center gap-3 mb-2">
          <img
            src={medicortexLogo}
            alt="Medicortex Logo"
            className={`transition-all duration-300 ${scrolled ? "h-10 w-10" : "h-14 w-14"} rounded-lg`}
          />
          <span
            className={`font-extrabold tracking-tight transition-all duration-300 ${
              scrolled ? "text-xl" : "text-2xl"
            } ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
          >
            Medicortex
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinkKeys.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                scrolled ? "text-muted-foreground" : "text-primary-foreground/80"
              }`}
            >
              {t(link.key)}
            </a>
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
                  : "text-primary-foreground/70 hover:bg-primary-foreground/10"
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
                  : "text-primary-foreground/70 hover:bg-primary-foreground/10"
              }`}
              aria-label="English"
            >
              EN
            </button>
          </div>

          <Button size="sm" className="gradient-teal border-0 text-primary-foreground font-semibold ml-2">
            {t("nav.getStarted")}
          </Button>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden absolute right-4 top-6"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className={scrolled ? "text-foreground" : "text-primary-foreground"} />
          ) : (
            <Menu className={scrolled ? "text-foreground" : "text-primary-foreground"} />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-md border-t border-border px-6 py-4 space-y-3">
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
          <Button size="sm" className="gradient-teal border-0 text-primary-foreground font-semibold w-full">
            {t("nav.getStarted")}
          </Button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
