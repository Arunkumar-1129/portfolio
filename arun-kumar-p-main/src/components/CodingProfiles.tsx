import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const profiles = [
  {
    name: "LeetCode",
    stat: "250+ Problems | 17+ Contests",
    color: "from-amber-500 to-orange-500",
    url: "https://leetcode.com/u/Arun_KumarP/",
  },
  {
    name: "HackerRank",
    stat: "3★ Python | 2★ C | 1★ SQL",
    color: "from-emerald-500 to-green-500",
    url: "https://www.hackerrank.com/profile/arun_kumar_p",
  },
  {
    name: "CodeChef",
    stat: "500+ Problems | Silver Badge",
    color: "from-amber-600 to-yellow-500",
    url: "https://www.codechef.com/users/arun_kumar_ece",
  },
  {
    name: "SkillRack",
    stat: "1050+ Problems Solved | 200+ Bronze",
    color: "from-blue-500 to-cyan-500",
    url: "https://www.skillrack.com/faces/resume.xhtml?id=515204&key=45a2345db7178ab6d0320554970ad4645ecc2fba",
  },
];

const CodingProfiles = () => (
  <section className="section-padding">
    <div className="container-narrow">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Coding <span className="text-gradient">Profiles</span>
        </h2>
        <div className="w-16 h-1 bg-primary rounded-full mb-12" />
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {profiles.map((p, i) => (
          <motion.a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card-hover p-6 group block"
          >
            <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${p.color} flex items-center justify-center mb-4`}>
              <span className="text-lg font-bold text-foreground">{p.name[0]}</span>
            </div>
            <h3 className="text-lg font-bold text-foreground mb-1 flex items-center gap-2">
              {p.name}
              <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 text-primary transition-opacity" />
            </h3>
            <p className="text-sm text-muted-foreground font-mono">{p.stat}</p>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default CodingProfiles;
