import { motion } from "framer-motion";
import { Award, Shield } from "lucide-react";

const certifications = [
  { title: "AI and Web Development Internship", issuer: "NIELIT" },
  { title: "IoT Device Programming", issuer: "MIT" },
  { title: "Programming in Java", issuer: "Red Hat Academy" },
  { title: "Mastering Data Structures & Algorithms", issuer: "Udemy" },
  { title: "Azure SQL Family", issuer: "Microsoft" },
  { title: "Java Programming Masterclass", issuer: "Udemy" },
  { title: "SQL (Intermediate)", issuer: "HackerRank" },
];

const achievements = [
  { title: "Winner – Anokha'26 Process Warzone", detail: "₹20,000 prize", icon: "🏆" },
  { title: "Gateway 2k'25 Hackathon", detail: "Achievement", icon: "🚀" },
  { title: "HackWithUttarPradesh Finalist", detail: "Top 300 Teams India", icon: "🔥" },
  { title: "PEC Hacks Finalist", detail: "National Level", icon: "⚡" },
];

const AchievementsSection = () => (
  <section id="achievements" className="section-padding">
    <div className="container-narrow">
      {/* Certifications */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          <span className="text-gradient">Certifications</span>
        </h2>
        <div className="w-16 h-1 bg-primary rounded-full mb-10" />
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
        {certifications.map((cert, i) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="glass-card-hover p-5 flex items-start gap-3"
          >
            <Shield className="text-primary shrink-0 mt-0.5" size={18} />
            <div>
              <h4 className="text-sm font-semibold text-foreground">{cert.title}</h4>
              <p className="text-xs text-muted-foreground">{cert.issuer}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Achievements */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          <span className="text-gradient">Achievements</span>
        </h2>
        <div className="w-16 h-1 bg-primary rounded-full mb-10" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {achievements.map((a, i) => (
          <motion.div
            key={a.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card-hover p-6 flex items-center gap-4"
          >
            <span className="text-3xl">{a.icon}</span>
            <div>
              <h4 className="text-base font-bold text-foreground">{a.title}</h4>
              <p className="text-sm text-primary">{a.detail}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AchievementsSection;
