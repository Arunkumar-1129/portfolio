import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "B.E Electronics & Communication Engineering",
    institution: "Sri Eshwar College of Engineering",
    period: "2024 – 2028",
    score: "CGPA: 8.43",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Anugragha International School",
    period: "2023 – 2024",
    score: "83%",
  },
  {
    degree: "SSLC",
    institution: "Anugragha International School",
    period: "2021 – 2022",
    score: "92%",
  },
];

const EducationSection = () => (
  <section id="education" className="section-padding">
    <div className="container-narrow">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          <span className="text-gradient">Education</span>
        </h2>
        <div className="w-16 h-1 bg-primary rounded-full mb-12" />
      </motion.div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-border md:left-1/2" />

        {education.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className={`relative mb-10 md:w-1/2 pl-16 md:pl-0 ${
              i % 2 === 0
                ? "md:pr-12 md:text-right"
                : "md:ml-auto md:pl-12"
            }`}
          >
            {/* Timeline dot */}
            <div className="absolute left-4 md:left-auto md:right-auto top-2 w-5 h-5 rounded-full border-2 border-primary bg-background z-10"
              style={i % 2 === 0 ? { right: '-10px', left: 'auto' } : { left: '-10px' }}
            />
            <div className="hidden md:block absolute top-2 w-5 h-5 rounded-full border-2 border-primary bg-background z-10"
              style={i % 2 === 0 ? { right: '-10px' } : { left: '-10px' }}
            />

            <div className="glass-card-hover p-6">
              <div className={`flex items-center gap-2 mb-2 ${i % 2 === 0 ? 'md:justify-end' : ''}`}>
                <GraduationCap className="text-primary" size={18} />
                <span className="text-xs text-primary font-mono">{item.period}</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-1">{item.degree}</h3>
              <p className="text-muted-foreground text-sm mb-2">{item.institution}</p>
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                {item.score}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EducationSection;
