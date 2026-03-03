import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const metrics = [
  { value: 1000, suffix: "+", label: "Healthcare Users" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 50, suffix: "+", label: "Countries Served" },
  { value: 3, suffix: "", label: "AI Platforms" },
];

const testimonials = [
  {
    quote: "The ROI from implementing Medicortex platforms across our hospital network has been extraordinary. We saw measurable improvements within the first month.",
    role: "Vice President of Operations",
    org: "National Healthcare Group",
    stars: 5,
  },
  {
    quote: "StaffIQ solved our chronic understaffing challenges. The AI predictions are remarkably accurate and have transformed our scheduling.",
    role: "HR Director",
    org: "Medical Staffing Agency, Europe",
    stars: 5,
  },
  {
    quote: "ClinicFlow AI integrated seamlessly with our existing systems. Patient satisfaction scores jumped 28% in three months.",
    role: "Practice Manager",
    org: "Multi-Location Clinic Group",
    stars: 5,
  },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-4xl sm:text-5xl font-black gradient-text">
      {count}
      {suffix}
    </div>
  );
}

const SocialProofSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary mb-4">
            Proven Results
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Trusted <span className="gradient-text">Worldwide</span>
          </h2>
        </motion.div>

        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-20">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <AnimatedCounter value={metric.value} suffix={metric.suffix} />
              <p className="text-muted-foreground text-sm mt-2 font-medium">{metric.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="bg-card rounded-2xl border border-border p-6 hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <Quote className="h-4 w-4 text-primary/40 mb-2" />
              <p className="text-card-foreground/80 text-sm leading-relaxed mb-4 italic">
                "{t.quote}"
              </p>
              <div className="border-t border-border pt-3">
                <p className="text-xs font-semibold text-card-foreground">{t.role}</p>
                <p className="text-xs text-muted-foreground">{t.org}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
