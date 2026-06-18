import { motion } from "framer-motion";
import { SiPython, SiJavascript, SiReact, SiDjango, SiSpring, SiMysql, SiMongodb, SiPostgresql, SiSqlite, SiFirebase, SiCanva, SiGit, SiHtml5 } from "react-icons/si";
import { FaJava, FaDatabase, FaTools, FaFileExcel, FaCss3Alt, FaNodeJs } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";
import { MdDataObject } from "react-icons/md";
import { FaDocker, FaGitAlt, FaLinux } from "react-icons/fa";
import { SiKubernetes, SiGitlab, SiArgo } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import xtermLogo from "@/assets/xterm_logo.png";
import capcutLogo from "@/assets/capcut.jpg";

const skills = [
  { name: "HTML",        icon: <SiHtml5 size={48}      color="#e76d1b" /> },
  { name: "CSS",         icon: <FaCss3Alt size={48}    color="#264de4" /> },
  { name: "JavaScript",  icon: <SiJavascript size={48} color="#F7DF1E" /> },
  { name: "React",       icon: <SiReact size={48}      color="#61DAFB" /> },
  { name: "Node.js",     icon: <FaNodeJs size={48}     color="#339933" /> },
  { name: "Java",        icon: <FaJava size={48}       color="#f89820" /> },
  { name: "Python",      icon: <SiPython size={48}     color="#3776AB" /> },
  { name: "Django",      icon: <SiDjango size={48}     color="#2ec98e" /> },
  { name: "Spring Boot", icon: <SiSpring size={48}     color="#6DB33F" /> },
  { name: "Git",      icon: <SiGit size={48}       color="#F05032" /> },
  {  name: "Docker",  icon: <FaDocker size={48} color="#2496ED" />},
  {  name: "Kubernetes",  icon: <SiKubernetes size={48} color="#326CE5" />},
  { name: "MySQL",       icon: <SiMysql size={48}      color="#4479A1" /> },
  { name: "MongoDB",     icon: <SiMongodb size={48}    color="#47A248" /> },
  { name: "PostgreSQL",  icon: <SiPostgresql size={48} color="#336791" /> },
  { name: "SQLite",      icon: <SiSqlite size={48}     color="#003B57" /> },
  { name: "DSA",         icon: <MdDataObject size={48} color="#00BCD4" /> },
  { name: "DBMS",        icon: <FaDatabase size={48}   color="#FF6B35" /> },
  { name: "MERN Stack",  icon: <FaTools size={48}      color="#61DAFB" /> },
  
];

const tools = [
  {  name: "VS Code",  icon: (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
      alt="VS Code"
      className="w-12 h-12"
    />  )},
  {  name: "GitHub",  icon: <FaGithub size={48} />},  
{  name: "GitLab",  icon: (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg"
      alt="GitLab"
      className="w-12 h-12"
    />  )},
{  name: "Argo CD",  icon: <SiArgo size={48} color="#EF7B4D" />},
{
  name: "MobaXterm",
  icon: (
    <img
      src={xtermLogo}
      alt="MobaXterm"
      className="w-12 h-12 object-contain"
    />
  )
},
{  name: "Postman",  icon: <SiPostman size={48} color="#FF6C37" />},
{  name: "IntelliJ IDEA",  icon: (
      <img
      src="https://resources.jetbrains.com/storage/products/company/brand/logos/IntelliJ_IDEA_icon.svg"
      alt="IntelliJ IDEA"
      className="w-12 h-12"
    />  )},
{  name: "Roboflow",  icon: (
    <img
      src="https://cdn.simpleicons.org/roboflow"
      alt="Roboflow"
      className="w-12 h-12"
    />  )},
    { name: "Firebase", icon: <SiFirebase size={48}  color="#FFCA28" /> },
  { name: "Excel",    icon: <FaFileExcel size={48} color="#217346" /> },
  {
  name: "CapCut",
  icon: (
    <img
      src={capcutLogo}
      alt="CapCut"
      className="w-12 h-12 object-contain"
    />
  )
},

  { name: "Canva",    icon: <SiCanva size={48}     color="#00C4CC" /> },
];

const SkillGrid = ({ items, startDelay = 0 }: { items: typeof skills; startDelay?: number }) => (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
    {items.map((skill, i) => (
      <motion.div
        key={skill.name}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: (startDelay + i) * 0.05 }}
        whileHover={{ y: -2 }}
        className="glass-card-hover flex flex-col items-center justify-center gap-3 p-6 cursor-default"
        style={{ minHeight: "130px" }}
      >
        <div>{skill.icon}</div>
        <span className="text-sm font-semibold text-foreground text-center">{skill.name}</span>
      </motion.div>
    ))}
  </div>
);

const SkillsSection = () => (
  <section id="skills" className="section-padding">
    <div className="container-narrow">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Technical <span className="text-gradient">Skills</span>
        </h2>
        <div className="w-16 h-1 bg-primary rounded-full" />
      </motion.div>

      <SkillGrid items={skills} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Tools & <span className="text-gradient">Platforms</span>
        </h2>
        <div className="w-16 h-1 bg-primary rounded-full" />
      </motion.div>

      <SkillGrid items={tools} startDelay={skills.length} />

    </div>
  </section>
);

export default SkillsSection;
