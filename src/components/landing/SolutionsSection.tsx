import { motion } from "framer-motion";
import { Building2, Stethoscope, Users, Puzzle, CheckCircle2 } from "lucide-react";
import { useTranslation } from "@/contexts/LanguageContext";
import solHospital from "@/assets/sol-hospital.jpg";
import solClinic from "@/assets/sol-clinic.jpg";
import solStaffing from "@/assets/sol-staffing.jpg";
import solCustom from "@/assets/sol-custom.jpg";

const SolutionsSection = () => {
  const { t } = useTranslation();

  const solutions = [
    {
      icon: Building2,
      image: solHospital,
      title: t("sol1.title"),
      description: t("sol1.desc"),
      benefits: [t("sol1.b1"), t("sol1.b2"), t("sol1.b3")],
    },
    {
      icon: Stethoscope,
      image: solClinic,
      title: t("sol2.title"),
      description: t("sol2.desc"),
      benefits: [t("sol2.b1"), t("sol2.b2"), t("sol2.b3")],
    },
    {
      icon: Users,
      image: solStaffing,
      title: t("sol3.title"),
      description: t("sol3.desc"),
      benefits: [t("sol3.b1"), t("sol3.b2"), t("sol3.b3")],
    },
    {
      icon: Puzzle,
      image: solCustom,
      title: t("sol4.title"),
      description: t("sol4.desc"),
      benefits: [t("sol4.b1"), t("sol4.b2"), t("sol4.b3")],
    },
  ];

  return (
    <section id="solutions" className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary mb-4 glow-sm">
            {t("solutions.badge")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t("solutions.title1")} <span className="gradient-text">{t("solutions.title2")}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("solutions.sub")}
          </p>
        </motion.div>

        {/* Solutions grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {solutions.map((solution, i) => (
            <motion.div
              key={solution.title}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 hover:glow-sm transition-all duration-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden bg-secondary">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                <div className="absolute bottom-4 left-4 h-12 w-12 rounded-xl gradient-teal flex items-center justify-center glow-sm">
                  <solution.icon className="h-6 w-6 text-primary-foreground" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                  {solution.description}
                </p>
                <ul className="space-y-2">
                  {solution.benefits.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
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
