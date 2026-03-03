import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, Quote } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    quote: "Medicortex's AI platforms have completely transformed how we manage patient flow. Results exceeded all expectations.",
    role: "Healthcare Director",
    org: "Regional Hospital Network, US",
  },
  {
    quote: "We reduced staffing costs by 35% while improving coverage quality. The AI matching is remarkably accurate.",
    role: "Operations Manager",
    org: "Medical Staffing Agency, UK",
  },
  {
    quote: "Implementation was seamless. Within weeks, our clinic workflow efficiency improved dramatically.",
    role: "Chief Medical Officer",
    org: "Multi-Specialty Clinic, Germany",
  },
];

const HeroSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-secondary neural-bg"
    >
      {/* Abstract pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
          <circle cx="200" cy="400" r="300" stroke="hsl(var(--teal))" strokeWidth="0.5" opacity="0.3" />
          <circle cx="1000" cy="200" r="200" stroke="hsl(var(--blue-end))" strokeWidth="0.5" opacity="0.3" />
          <circle cx="600" cy="600" r="250" stroke="hsl(var(--teal))" strokeWidth="0.5" opacity="0.2" />
          <line x1="100" y1="100" x2="400" y2="300" stroke="hsl(var(--teal))" strokeWidth="0.3" opacity="0.2" />
          <line x1="800" y1="150" x2="1100" y2="400" stroke="hsl(var(--blue-end))" strokeWidth="0.3" opacity="0.2" />
          <line x1="300" y1="500" x2="700" y2="700" stroke="hsl(var(--teal))" strokeWidth="0.3" opacity="0.15" />
        </svg>
      </div>

      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary mb-6">
              AI-Powered Healthcare Solutions
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <span className="gradient-text">Transforming Healthcare</span>
            <br />
            <span className="text-secondary-foreground">with AI</span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-secondary-foreground/70 max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            3 Proven AI Platforms Delivering Game-Changing Results for Hospitals,
            Clinics &amp; Agencies Worldwide
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
              Explore Our AI Solutions
              <ChevronRight className="ml-1 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/5 font-semibold px-8 py-6"
            >
              Watch Demo
            </Button>
          </motion.div>

          {/* Testimonial Carousel */}
          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div className="bg-secondary-foreground/5 backdrop-blur-sm rounded-2xl p-6 border border-secondary-foreground/10">
              <Quote className="h-5 w-5 text-primary mb-3 mx-auto" />
              <p className="text-secondary-foreground/80 italic text-sm sm:text-base mb-4 min-h-[48px]">
                "{testimonials[currentTestimonial].quote}"
              </p>
              <p className="text-xs text-secondary-foreground/50 font-semibold">
                — {testimonials[currentTestimonial].role},{" "}
                {testimonials[currentTestimonial].org}
              </p>
              <div className="flex justify-center gap-2 mt-4">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    className={`h-1.5 rounded-full transition-all ${
                      i === currentTestimonial
                        ? "w-6 bg-primary"
                        : "w-1.5 bg-secondary-foreground/20"
                    }`}
                    onClick={() => setCurrentTestimonial(i)}
                    aria-label={`View testimonial ${i + 1}`}
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
