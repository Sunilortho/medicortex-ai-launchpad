import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import medicortexLogo from "@/assets/medicortex-logo.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Solutions", href: "#solutions" },
  { label: "Platforms", href: "#platforms" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                scrolled ? "text-muted-foreground" : "text-primary-foreground/80"
              }`}
            >
              {link.label}
            </a>
          ))}
          <Button size="sm" className="gradient-teal border-0 text-primary-foreground font-semibold ml-2">
            Get Started
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
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-sm font-medium text-foreground hover:text-primary"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button size="sm" className="gradient-teal border-0 text-primary-foreground font-semibold w-full">
            Get Started
          </Button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
