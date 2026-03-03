import { motion } from "framer-motion";
import { Building2, Stethoscope, Users, Puzzle } from "lucide-react";
import { useTranslation } from "@/contexts/LanguageContext";

const SolutionsSection = () => {
  const { t } = useTranslation();

  const solutions = [
    {
      icon: Building2,
      title: t("sol1.title"),
      description: t("sol1.desc"),
      benefits: [t("sol1.b1"), t("sol1.b2"), t("sol1.b3")],
    },
    {
      icon: Stethoscope,
      title: t("sol2.title"),
      description: t("sol2.desc"),
      benefits: [t("sol2.b1"), t("sol2.b2"), t("sol2.b3")],
    },
    {
      icon: Users,
      title: t("sol3.title"),
      description: t("sol3.desc"),
      benefits: [t("sol3.b1"), t("sol3.b2"), t("sol3.b3")],
    },
    {
      icon: Puzzle,
      title: t("sol4.title"),
      description: t("sol4.desc"),
      benefits: [t("sol4.b1"), t("sol4.b2"), t("sol4.b3")],
    },
  ];

  return (
    <section id="solutions" className="py-24 bg-secondary neural-bg">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary mb-4">
            {t("solutions.badge")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-4">
            {t("solutions.title1")} <span className="gradient-text">{t("solutions.title2")}</span>
          </h2>
          <p className="text-secondary-foreground/60 text-lg max-w-2xl mx-auto">
            {t("solutions.sub")}
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-20">
          {solutions.map((solution, i) => (
            <motion.div
              key={solution.title}
              className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-10 items-center`}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex-1 flex justify-center">
                <div className="relative">
                  <div className="h-40 w-40 rounded-3xl bg-primary/10 flex items-center justify-center">
                    <solution.icon className="h-16 w-16 text-primary" />
                  </div>
                  <div className="absolute -bottom-3 -right-3 h-40 w-40 rounded-3xl border border-primary/20" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-secondary-foreground mb-3">{solution.title}</h3>
                <p className="text-secondary-foreground/60 leading-relaxed mb-5">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.benefits.map((b) => (
                    <li key={b} className="flex items-center gap-3 text-sm text-secondary-foreground/80">
                      <span className="h-2 w-2 rounded-full gradient-teal shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
