import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

const experiences = [
  {
    title: "Product Management Trainee",
    organization: "PayPal",
    year: "2026",
    responsibilities: [
      "Completed product management training with real-world case studies",
      "Worked on user problem discovery and requirement definition",
      "Practiced feature prioritization and roadmap planning",
      "Performed market and competitor analysis for product decisions",
      "Collaborated on product strategy and presentation exercises",
    ],
    techStack: [
      "Product Strategy",
      "User Research",
      "Roadmapping",
      "Market Analysis",
      "Prioritization",
    ],
  },
  {
    title: "DevOps Intern",
    organization: "VSphere Technologies",
    year: "2026",
    responsibilities: [
      "Containerized applications for consistent deployment environments",
      "Automated software delivery through CI/CD pipelines",
      "Orchestrated containerized workloads using Kubernetes",
      "Implemented GitOps-based deployment workflows with Argo CD",
      "Streamlined deployment and infrastructure management processes",
    ],
    techStack: [

      "Docker",
      "Kubernetes",
      "Git",
      "GitLab",
      "GitLab CI/CD",
      "Argo CD",
      "Linux",
      "YAML",

    ],
  },
  {
    title: "AI & Web Development Intern",
    organization: "NIELIT Calicut",
    year: "2025",
    responsibilities: [
      "Data processing and analysis",
      "Built ML/DL models for real-world tasks",
      "Developed Django-based web applications",
      "API development & database operations",
      "Dataset preparation, model training, evaluation",
      "Full-stack integration with responsive UI",
    ],
    techStack: [
      "Python",
      "NumPy",
      "Scikit-learn",
      "Django",
      "React",
      "MongoDB",
      "PostgreSQL",
      "Computer Vision",
    ],
  },

];

const InternshipSection = () => (
  <section id="experience" className="section-padding">
    <div className="container-narrow">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-5xl font-extrabold mb-3 text-center">
          Work <span className="text-gradient">Experience</span>
        </h2>
        <div className="w-16 h-1 bg-primary rounded-full mb-12 mx-auto" />
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-3.5 top-0 bottom-0 w-0.5 bg-border" />

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={`${experience.organization}-${experience.title}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-10"
            >
              {/* Timeline dot */}
              <div className="absolute left-3.5 top-7 w-3 h-3 rounded-full bg-primary -translate-x-1/2 ring-4 ring-background" />

              <div className="glass-card-hover p-6 md:p-8" style={{ background: 'hsl(112 30% 20% / 0.15)', backdropFilter: 'blur(16px)', border: '1px solid hsl(112 100% 50% / 0.15)' }}>
                {/* Row 1: Title + Year */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                  <h3 className="text-3xl font-extrabold text-foreground">{experience.title}</h3>
                  <span className="flex items-center gap-1.5 text-base text-muted-foreground whitespace-nowrap">
                    <Calendar size={15} className="shrink-0" />
                    {experience.year}
                  </span>
                </div>

                {/* Row 2: Organization */}
                <p className="text-primary font-bold text-lg mb-5">{experience.organization}</p>

                {/* Key Achievements */}
                <p className="text-foreground font-bold text-base mb-3">Key Achievements:</p>
                <ul className="space-y-3 mb-6">
                  {experience.responsibilities.map((responsibility, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground text-base">
                      <span className="w-2.5 h-2.5 rounded-full bg-primary mt-1.5 shrink-0" />
                      {responsibility}
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {experience.techStack.map((technology) => (
                    <span
                      key={technology}
                    className="px-4 py-1.5 rounded-full bg-transparent text-primary text-sm font-medium border border-primary/60 hover:bg-primary/10 transition-colors"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default InternshipSection;
