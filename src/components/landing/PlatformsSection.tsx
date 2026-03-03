import { motion } from "framer-motion";
import { Brain, Activity, Workflow, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/contexts/LanguageContext";

const PlatformsSection = () => {
  const { t } = useTranslation();

  const platforms = [
    {
      icon: Brain,
      name: t("platform1.name"),
      description: t("platform1.desc"),
      benefits: [t("platform1.b1"), t("platform1.b2"), t("platform1.b3"), t("platform1.b4")],
    },
    {
      icon: Activity,
      name: t("platform2.name"),
      description: t("platform2.desc"),
      benefits: [t("platform2.b1"), t("platform2.b2"), t("platform2.b3"), t("platform2.b4")],
    },
    {
      icon: Workflow,
      name: t("platform3.name"),
      description: t("platform3.desc"),
      benefits: [t("platform3.b1"), t("platform3.b2"), t("platform3.b3"), t("platform3.b4")],
    },
  ];

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
            {t("platforms.badge")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t("platforms.title1")} <span className="gradient-text">{t("platforms.title2")}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("platforms.sub")}
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
              <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{platform.description}</p>
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
                {t("platforms.demo")}
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
