import { motion } from "framer-motion";
import { SectionHeading } from "../SectionHeading";

const skillCategories = [
  {
    title: "Frontend",
    color: "from-blue-500 to-cyan-400",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript / JavaScript", level: 90 },
      { name: "Tailwind CSS / UI Libraries", level: 95 },
      { name: "HTML5 / CSS3", level: 98 },
    ]
  },
  {
    title: "Backend & APIs",
    color: "from-green-500 to-emerald-400",
    skills: [
      { name: "Node.js / Express.js", level: 90 },
      { name: "PHP", level: 80 },
      { name: "RESTful APIs", level: 95 },
      { name: "GraphQL", level: 75 },
    ]
  },
  {
    title: "Databases & Cloud",
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "MySQL / PostgreSQL", level: 88 },
      { name: "Firebase", level: 90 },
      { name: "Docker / Deployment", level: 80 },
    ]
  },
  {
    title: "Design & Tools",
    color: "from-orange-500 to-yellow-400",
    skills: [
      { name: "Figma / UI/UX", level: 85 },
      { name: "Git / GitHub", level: 92 },
      { name: "VS Code", level: 95 },
      { name: "Agile / Scrum", level: 85 },
    ]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-slate-900/50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <SectionHeading title="My Expertise" subtitle="Skills & Proficiency" />
        
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-border backdrop-blur-sm"
            >
              <h3 className="text-xl font-bold font-heading mb-6 flex items-center gap-3">
                <span className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color}`} />
                {category.title}
              </h3>
              
              <div className="space-y-5">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-sm text-foreground/80">{skill.name}</span>
                      <span className="text-sm text-foreground/60 font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${category.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + (sIdx * 0.1), ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}