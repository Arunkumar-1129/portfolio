import { motion } from "framer-motion";
import { Star, ExternalLink, Github } from "lucide-react";

const featuredTech = ["Django", "React.js", "Chart.js", "PyQt5", "Matplotlib", "Pandas", "SQLite"];

const features = [
  "Hybrid Chemical Equipment Parameter Visualizer",
  "CSV dataset upload system",
  "Automated data analysis & visualization",
  "Django backend processing",
  "React-based web interface + PyQt5 desktop app",
  "Interactive charts & summary statistics",
];

const otherProjects = [
  {
    title: "Railway Track Damage Detection System",
    year: "2024",
    desc: "Ultrasonic guided wave crack detection with non-destructive monitoring using Arduino and sensors.",
    tech: ["HTML", "CSS", "JavaScript", "Arduino UNO"],
    codeUrl: "https://github.com/Arunkumar-1129/Project_Level1",
  },
  {
    title: "Hostel Room Allotment & Maintenance System",
    year: "2025",
    desc: "Room allocation automation with maintenance request tracking and role-based access control.",
    tech: ["MySQL", "REST API", "Java", "SpringBoot", "Thymeleaf"],
    codeUrl: "https://github.com/Arunkumar-1129/HostelRoomAllotment",
  },
  {
    title: "Pipeline Leakage Detection",
    year: "2025",
    desc: "Non-intrusive pipeline leakage detection system using flow sensors, integrated with a web application for real-time monitoring and data visualization.",
    tech: ["HTML", "CSS", "JavaScript", "Arduino IDE", "Leaflet"],
    codeUrl: "https://github.com/Arunkumar-1129/pipeline_leakage_detection",
  },
  {
    title: "Fire Detection System Using Deep Learning",
    year: "2025",
    desc: "Intelligent fire detection system using deep learning-based object detection, integrated with a web application for real-time monitoring and automated alerting.",
    tech: ["HTML", "CSS", "JavaScript", "Ultralytics YOLOv8", "Roboflow", "Django"],
    codeUrl: "https://github.com/Arunkumar-1129/AIfiredetection",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="section-padding">
    <div className="container-narrow">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <div className="w-16 h-1 bg-primary rounded-full mb-12" />
      </motion.div>

      {/* Featured Project */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative glass-card-hover p-8 mb-16 border-primary/20"
      >
        <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
          <Star className="text-primary" size={14} />
          <span className="text-xs text-primary font-semibold">Featured</span>
        </div>

        <h3 className="text-2xl font-bold text-foreground mb-1">
          Chemical Equipment Visualizer
        </h3>
        <p className="text-sm text-primary font-mono mb-6">2025</p>

        <ul className="space-y-2 mb-6">
          {features.map((f, i) => (
            <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
              {f}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 mb-6">
          {featuredTech.map((t) => (
            <span key={t} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20">
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <a
            href="https://github.com/Arunkumar-1129/chemical-equipment-visualizer"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:brightness-110 transition-all"
          >
            <Github size={16} /> View Code
          </a>
          <a
            href="https://chemical-equipment-visualizer-beige.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-foreground text-sm hover:border-primary/50 hover:text-primary transition-all"
          >
            <ExternalLink size={16} /> Live Demo
          </a>
        </div>
      </motion.div>

      {/* Other Projects */}
      <h3 className="text-xl font-bold text-foreground mb-6">Other Projects</h3>
      <div className="grid md:grid-cols-2 gap-6">
        {otherProjects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="glass-card-hover p-6"
          >
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-lg font-semibold text-foreground">{p.title}</h4>
              <span className="text-xs text-primary font-mono">{p.year}</span>
            </div>
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{p.desc}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {p.tech.map((t) => (
                <span key={t} className="px-2.5 py-0.5 rounded-full bg-secondary text-secondary-foreground text-xs font-medium border border-border">
                  {t}
                </span>
              ))}
            </div>
            <a
              href={p.codeUrl}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:brightness-110 transition-all"
            >
              <Github size={16} /> View Code
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
