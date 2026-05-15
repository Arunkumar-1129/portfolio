import { motion } from "framer-motion";
import { SiC, SiCplusplus, SiPython, SiJavascript, SiReact, SiDjango, SiSpring, SiMysql, SiMongodb, SiPostgresql, SiSqlite, SiFirebase, SiPowerBi, SiCanva, SiGit, SiHtml5 } from "react-icons/si";
import { FaJava, FaDatabase, FaTools, FaMicrosoft, FaFileExcel, FaCss3Alt, FaNodeJs } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";
import { TbApi } from "react-icons/tb";
import { MdDataObject } from "react-icons/md";

const skills = [
  { name: "HTML",           icon: <SiHtml5 size={48}           color="#e76d1b" /> },
  { name: "CSS",         icon: <FaCss3Alt size={48} color="#264de4" /> },
  { name: "React",       icon: <SiReact size={48}        color="#61DAFB" /> },
  { name: "Java",        icon: <FaJava size={48}         color="#f89820" /> },
   { name: "NodeJS",        icon: <FaNodeJs size={48}         color="#f89820" /> },
  
  { name: "Python",      icon: <SiPython size={48}       color="#3776AB" /> },
  { name: "JavaScript",  icon: <SiJavascript size={48}   color="#F7DF1E" /> },
  
  { name: "Django",      icon: <SiDjango size={48}       color="#2ec98e" /> },
  { name: "SpringBoot",  icon: <SiSpring size={48}   color="#6DB33F" /> },
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
            whileHover={{ y: -2 }}
            className="glass-card-hover flex flex-col items-center justify-center gap-3 p-6 cursor-default"
            style={{ minHeight: "157px" }}
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
