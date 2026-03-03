import { motion } from "framer-motion";
import { Building2, Stethoscope, Users, Puzzle } from "lucide-react";

const solutions = [
  {
    icon: Building2,
    title: "Hospital Optimization",
    description: "Streamline hospital operations with AI-driven resource allocation, patient flow optimization, and predictive analytics that reduce wait times and improve outcomes.",
    benefits: ["Reduce patient wait times by up to 40%", "Optimize bed utilization in real-time", "Predictive maintenance scheduling"],
  },
  {
    icon: Stethoscope,
    title: "Clinic Workflow Automation",
    description: "Automate administrative tasks, scheduling, and record management so your clinical staff can focus on what matters most — patient care.",
    benefits: ["Automated appointment scheduling", "Digital patient intake forms", "Streamlined billing & coding"],
  },
  {
    icon: Users,
    title: "Staffing Intelligence",
    description: "Match the right healthcare professionals to the right roles with AI-powered candidate matching, demand forecasting, and workforce analytics.",
    benefits: ["AI-powered talent matching", "Demand forecasting accuracy 95%+", "Reduce hiring time by 60%"],
  },
  {
    icon: Puzzle,
    title: "Custom AI Integration",
    description: "Tailored AI solutions designed for your unique healthcare challenges. Our team builds, deploys, and scales custom models that integrate seamlessly with your existing systems.",
    benefits: ["Bespoke model development", "Seamless EHR/EMR integration", "Ongoing optimization & support"],
  },
];

const SolutionsSection = () => {
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
            What We Solve
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-4">
            AI Solutions for <span className="gradient-text">Healthcare</span>
          </h2>
          <p className="text-secondary-foreground/60 text-lg max-w-2xl mx-auto">
            Comprehensive AI solutions addressing the most critical challenges in modern healthcare.
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
              {/* Icon side */}
              <div className="flex-1 flex justify-center">
                <div className="relative">
                  <div className="h-40 w-40 rounded-3xl bg-primary/10 flex items-center justify-center">
                    <solution.icon className="h-16 w-16 text-primary" />
                  </div>
                  <div className="absolute -bottom-3 -right-3 h-40 w-40 rounded-3xl border border-primary/20" />
                </div>
              </div>
              {/* Content */}
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
