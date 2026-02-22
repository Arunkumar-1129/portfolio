import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const techStack = [
  "Python", "NumPy", "Scikit-learn", "Django", "React", "MongoDB", "PostgreSQL"
];

const responsibilities = [
  "Data processing and analysis",
  "Built ML/DL models for real-world tasks",
  "Developed Django-based web applications",
  "API development & database operations",
  "Dataset preparation, model training, evaluation",
  "Full-stack integration with responsive UI",
];

const InternshipSection = () => (
  <section id="experience" className="section-padding">
    <div className="container-narrow">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Internship <span className="text-gradient">Experience</span>
        </h2>
        <div className="w-16 h-1 bg-primary rounded-full mb-12" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card-hover p-8"
      >
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
            <Briefcase className="text-primary" size={24} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground">
              AI & Web Development Intern
            </h3>
            <p className="text-primary font-medium">NIELIT Calicut</p>
            <p className="text-sm text-muted-foreground">2025</p>
          </div>
        </div>

        <ul className="space-y-2 mb-6">
          {responsibilities.map((r, i) => (
            <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
              {r}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {techStack.map((t) => (
            <span
              key={t}
              className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium border border-border"
            >
              {t}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default InternshipSection;
