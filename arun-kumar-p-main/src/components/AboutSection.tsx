import { motion } from "framer-motion";
import { Code2, Brain, Server } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    { icon: Code2, title: "MERN Stack", desc: "Building full-stack applications with MongoDB, Express, React, and Node.js" },
    { icon: Server, title: "Backend Systems", desc: "Designing robust APIs, database architectures, and scalable server solutions" },
    { icon: Brain, title: "AI & Data", desc: "Exploring machine learning, data analysis, and intelligent system design" },
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-8" />

          <p className="text-muted-foreground text-lg max-w-3xl mb-12 leading-relaxed">
            I'm a driven problem solver and consistent learner passionate about building real-world applications. Currently pursuing Electronics and Communication Engineering, I’ve focused on mastering full-stack development, backend systems, and AI-powered solutions. I believe in writing clean, scalable code that creates meaningful impact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card-hover p-6"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <item.icon className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
