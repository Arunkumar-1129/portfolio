import { motion } from "framer-motion";
import { SiC, SiCplusplus, SiPython, SiJavascript, SiReact, SiDjango, SiSpringboot, SiMysql, SiMongodb, SiPostgresql, SiSqlite, SiFirebase, SiPowerBi, SiCanva, SiGit } from "react-icons/si";
import { FaJava, FaDatabase, FaTools, FaMicrosoft, FaFileExcel } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";
import { TbApi } from "react-icons/tb";
import { MdDataObject } from "react-icons/md";

const skills = [
  { name: "C",           icon: <SiC size={48}           color="#A8B9CC" /> },
  { name: "C++",         icon: <SiCplusplus size={48}   color="#00599C" /> },
  { name: "Java",        icon: <FaJava size={48}         color="#f89820" /> },
  { name: "Python",      icon: <SiPython size={48}       color="#3776AB" /> },
  { name: "JavaScript",  icon: <SiJavascript size={48}   color="#F7DF1E" /> },
  { name: "React",       icon: <SiReact size={48}        color="#61DAFB" /> },
  { name: "Django",      icon: <SiDjango size={48}       color="#092E20" /> },
  { name: "SpringBoot",  icon: <SiSpringboot size={48}   color="#6DB33F" /> },
  { name: "REST API",    icon: <TbApi size={48}          color="#00BCD4" /> },
  { name: "MySQL",       icon: <SiMysql size={48}        color="#4479A1" /> },
  { name: "MongoDB",     icon: <SiMongodb size={48}      color="#47A248" /> },
  { name: "PostgreSQL",  icon: <SiPostgresql size={48}   color="#336791" /> },
  { name: "SQLite",      icon: <SiSqlite size={48}       color="#003B57" /> },
  { name: "Firebase",    icon: <SiFirebase size={48}     color="#FFCA28" /> },
  { name: "VS Code",     icon: <VscCode size={48}        color="#007ACC" /> },
  { name: "Excel",       icon: <FaFileExcel size={48}   color="#217346" /> },
  { name: "Canva",       icon: <SiCanva size={48}        color="#00C4CC" /> },
  { name: "Git",         icon: <SiGit size={48}          color="#F05032" /> },
  { name: "DSA",         icon: <MdDataObject size={48}   color="#00BCD4" /> },
  { name: "DBMS",        icon: <FaDatabase size={48}     color="#FF6B35" /> },
  { name: "MERN Stack",  icon: <FaTools size={48}        color="#61DAFB" /> },
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

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ scale: 1.05, borderColor: "hsl(190 100% 50% / 0.5)" }}
            className="flex flex-col items-center justify-center gap-3 p-6 rounded-xl border border-border bg-card cursor-default"
            style={{ minHeight: "130px" }}
          >
            <div>{skill.icon}</div>
            <span className="text-sm font-semibold text-foreground text-center">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
