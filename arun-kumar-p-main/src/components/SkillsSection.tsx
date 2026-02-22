import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Programming",
    skills: ["C", "Java", "Python", "C++", "JavaScript"],
  },
  {
    title: "Web & Frameworks",
    skills: ["MERN Stack", "React", "Django", "SpringBoot", "REST API"],
  },
  {
    title: "Database",
    skills: ["MySQL", "MongoDB", "PostgreSQL", "SQLite"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Firebase", "VS Code", "Power BI", "Excel", "Canva"],
  },
  {
    title: "Core Concepts",
    skills: ["Data Structures & Algorithms", "DBMS"],
  },
];

const SkillsSection = () => (
  <section id="skills" className="section-padding">
    <div className="container-narrow">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Technical <span className="text-gradient">Skills</span>
        </h2>
        <div className="w-16 h-1 bg-primary rounded-full mb-12" />
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card-hover p-6"
          >
            <h3 className="text-sm font-semibold text-primary mb-4 uppercase tracking-wider">
              {cat.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground text-sm font-medium border border-border hover:border-primary/40 hover:text-primary transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
