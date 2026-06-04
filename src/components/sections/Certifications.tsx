import { motion } from "framer-motion";
import { Award, Code, Globe, Database, Cpu, Cloud } from "lucide-react";
import { SectionHeading } from "../SectionHeading";

const achievements = [
  {
    title: "Full Stack Web Development",
    organization: "Udemy — The Complete Bootcamp",
    date: "2023",
    icon: Code,
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "JavaScript Algorithms & Data Structures",
    organization: "freeCodeCamp",
    date: "2022",
    icon: Cpu,
    color: "from-yellow-500 to-orange-500"
  },
  {
    title: "Responsive Web Design",
    organization: "freeCodeCamp",
    date: "2022",
    icon: Globe,
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Back End Development & APIs",
    organization: "freeCodeCamp",
    date: "2023",
    icon: Database,
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "React — The Complete Guide",
    organization: "Udemy — Maximilian Schwarzmüller",
    date: "2023",
    icon: Code,
    color: "from-cyan-500 to-blue-500"
  },
  {
    title: "Cloud Fundamentals & Deployment",
    organization: "Google Digital Skills",
    date: "2024",
    icon: Cloud,
    color: "from-indigo-500 to-violet-500"
  },
  {
    title: "Node.js & Express — Complete Guide",
    organization: "Udemy",
    date: "2023",
    icon: Award,
    color: "from-rose-500 to-pink-500"
  },
  {
    title: "UI/UX Design Foundations",
    organization: "Google Coursera",
    date: "2022",
    icon: Globe,
    color: "from-amber-500 to-yellow-500"
  }
];

export function Certifications() {
  return (
    <section id="certifications" className="py-20 relative bg-slate-900/30">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <SectionHeading title="Certifications & Achievements" subtitle="Continuous Learning" center />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {achievements.map((cert, idx) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.07 }}
                className="group relative p-6 rounded-2xl bg-card border border-border overflow-hidden hover:border-transparent transition-all"
                data-testid={`cert-card-${idx}`}
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm rounded-2xl`} />
                <div className="absolute inset-0 bg-card rounded-2xl -z-10" />

                <div className="relative z-10 flex flex-col h-full">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${cert.color} p-0.5 mb-5 flex-shrink-0`}>
                    <div className="w-full h-full bg-card rounded-full flex items-center justify-center">
                      <Icon size={18} className="text-foreground" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold font-heading mb-2 text-foreground group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-purple-500 transition-all leading-snug">
                    {cert.title}
                  </h3>

                  <div className="mt-auto pt-4">
                    <p className="text-sm font-medium text-foreground/70">{cert.organization}</p>
                    <span className={`inline-block mt-2 px-2 py-0.5 rounded text-xs font-semibold bg-gradient-to-r ${cert.color} text-white`}>
                      {cert.date}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
