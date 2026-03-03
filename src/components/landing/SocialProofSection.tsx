import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "@/contexts/LanguageContext";

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
      {count}{suffix}
    </div>
  );
}

const SocialProofSection = () => {
  const { t } = useTranslation();

  const metrics = [
    { value: 1000, suffix: "+", label: t("social.metric1") },
    { value: 98, suffix: "%", label: t("social.metric2") },
    { value: 50, suffix: "+", label: t("social.metric3") },
    { value: 3, suffix: "", label: t("social.metric4") },
  ];

  const testimonials = [
    { quote: t("social.t1.quote"), role: t("social.t1.role"), org: t("social.t1.org"), stars: 5 },
    { quote: t("social.t2.quote"), role: t("social.t2.role"), org: t("social.t2.org"), stars: 5 },
    { quote: t("social.t3.quote"), role: t("social.t3.role"), org: t("social.t3.org"), stars: 5 },
  ];

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
            {t("social.badge")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t("social.title1")} <span className="gradient-text">{t("social.title2")}</span>
          </h2>
        </motion.div>

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

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              className="bg-card rounded-2xl border border-border p-6 hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: item.stars }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <Quote className="h-4 w-4 text-primary/40 mb-2" />
              <p className="text-card-foreground/80 text-sm leading-relaxed mb-4 italic">
                "{item.quote}"
              </p>
              <div className="border-t border-border pt-3">
                <p className="text-xs font-semibold text-card-foreground">{item.role}</p>
                <p className="text-xs text-muted-foreground">{item.org}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
