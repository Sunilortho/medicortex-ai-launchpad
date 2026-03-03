import { motion } from "framer-motion";
import { Brain, Activity, Workflow, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const platforms = [
  {
    icon: Brain,
    name: "MediAssist AI",
    description: "Intelligent clinical decision support that empowers healthcare providers with real-time AI insights.",
    benefits: [
      "Real-time diagnostic assistance",
      "Patient risk stratification",
      "Evidence-based recommendations",
      "EHR integration ready",
    ],
  },
  {
    icon: Activity,
    name: "StaffIQ",
    description: "AI-powered workforce intelligence that optimizes staffing across healthcare organizations.",
    benefits: [
      "Predictive demand forecasting",
      "Smart candidate matching",
      "Automated shift optimization",
      "Cost reduction analytics",
    ],
  },
  {
    icon: Workflow,
    name: "ClinicFlow AI",
    description: "End-to-end clinic workflow automation that eliminates bottlenecks and improves patient experience.",
    benefits: [
      "Automated scheduling",
      "Digital intake & records",
      "Billing optimization",
      "Patient journey tracking",
    ],
  },
];

const PlatformsSection = () => {
  return (
    <section id="platforms" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary mb-4">
            Our Platforms
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our 3 AI <span className="gradient-text">Game-Changers</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Purpose-built AI platforms delivering measurable results across the healthcare ecosystem.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {platforms.map((platform, i) => (
            <motion.div
              key={platform.name}
              className="group bg-card rounded-2xl border border-border p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="h-14 w-14 rounded-xl gradient-teal flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <platform.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-3">{platform.name}</h3>
              <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                {platform.description}
              </p>
              <ul className="space-y-2 mb-6">
                {platform.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-card-foreground/80">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
              <Button
                variant="outline"
                className="w-full border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-colors group/btn"
              >
                Request Demo
                <ArrowRight className="ml-1 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformsSection;
