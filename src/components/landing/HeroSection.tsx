import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, Quote } from "lucide-react";
import { useState, useEffect } from "react";
import { useTranslation } from "@/contexts/LanguageContext";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const { t } = useTranslation();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    { quote: t("hero.testimonial1.quote"), role: t("hero.testimonial1.role"), org: t("hero.testimonial1.org") },
    { quote: t("hero.testimonial2.quote"), role: t("hero.testimonial2.role"), org: t("hero.testimonial2.org") },
    { quote: t("hero.testimonial3.quote"), role: t("hero.testimonial3.role"), org: t("hero.testimonial3.org") },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-secondary/80" />
      </div>

      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary mb-6">
              {t("hero.badge")}
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <span className="gradient-text">{t("hero.headline1")}</span>
            <br />
            <span className="text-secondary-foreground">{t("hero.headline2")}</span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-secondary-foreground/70 max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {t("hero.sub")}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
          >
            <Button
              size="lg"
              className="gradient-teal border-0 text-primary-foreground font-bold text-base px-8 py-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              {t("hero.cta")}
              <ChevronRight className="ml-1 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/5 font-semibold px-8 py-6"
            >
              {t("hero.demo")}
            </Button>
          </motion.div>

          {/* Testimonial Carousel */}
          <motion.div className="max-w-2xl mx-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.6 }}>
            <div className="bg-secondary-foreground/5 backdrop-blur-sm rounded-2xl p-6 border border-secondary-foreground/10">
              <Quote className="h-5 w-5 text-primary mb-3 mx-auto" />
              <p className="text-secondary-foreground/80 italic text-sm sm:text-base mb-4 min-h-[48px]">
                "{testimonials[currentTestimonial].quote}"
              </p>
              <p className="text-xs text-secondary-foreground/50 font-semibold">
                — {testimonials[currentTestimonial].role}, {testimonials[currentTestimonial].org}
              </p>
              <div className="flex justify-center gap-2 mt-4">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    className={`h-1.5 rounded-full transition-all ${
                      i === currentTestimonial ? "w-6 bg-primary" : "w-1.5 bg-secondary-foreground/20"
                    }`}
                    onClick={() => setCurrentTestimonial(i)}
                    aria-label={`Testimonial ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
