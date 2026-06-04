import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Code2 } from "lucide-react";
import { SectionHeading } from "../SectionHeading";

const timeline = [
  {
    type: "education",
    icon: GraduationCap,
    title: "IT Foundation — Enrolled",
    organization: "ICS College Nakuru",
    period: "2023",
    description: "Began my formal technology education journey at ICS College Nakuru, studying Information Technology fundamentals including computer hardware, networking basics, and introduction to programming. This laid the foundation for everything that followed.",
    color: "text-purple-500",
    badgeColor: "bg-purple-500/10 text-purple-500"
  },
  {
    type: "education",
    icon: GraduationCap,
    title: "Certificate in Software Development",
    organization: "Power Learn Project (PLP) Academy",
    period: "2023 – 2024",
    description: "Completed an intensive software development program at PLP Academy, one of Africa's top tech education platforms. Mastered full-stack development with PHP, Python, JavaScript, MySQL, and modern web frameworks. Built real-world projects as part of the curriculum.",
    color: "text-cyan-500",
    badgeColor: "bg-cyan-500/10 text-cyan-500"
  },
  {
    type: "work",
    icon: Code2,
    title: "Freelance Developer — First Projects",
    organization: "LOCOS Developer (Independent)",
    period: "2024",
    description: "Launched my freelance career building my first commercial projects: Electric Shop (e-commerce), MYCHAT real-time messaging app, and social media web applications. Developed strong skills in PHP, MySQL, JavaScript, and client communication.",
    color: "text-blue-500",
    badgeColor: "bg-blue-500/10 text-blue-500"
  },
  {
    type: "work",
    icon: Briefcase,
    title: "Full Stack Developer — Growing Practice",
    organization: "LOCOS Developer (Independent)",
    period: "2024 – 2025",
    description: "Expanded my skills into React, Node.js, and Django. Delivered the School Management System (ERP), Hospital Management System, and DJ LOCOS KE music streaming platform. Started building enterprise-level systems for Kenyan businesses.",
    color: "text-green-500",
    badgeColor: "bg-green-500/10 text-green-500"
  },
  {
    type: "work",
    icon: Briefcase,
    title: "Senior Freelance Developer & UI/UX Designer",
    organization: "LOCOS Developer (Independent)",
    period: "2025 – Present (2026)",
    description: "Leading complex full-stack projects including the Grand Azure Hotel system (frontend + admin dashboard), cloud deployments, and business automation. Offering end-to-end digital solutions: from UI/UX design through backend APIs to cloud deployment on Vercel, Render, and AWS.",
    color: "text-primary",
    badgeColor: "bg-primary/10 text-primary"
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 relative" aria-label="Experience and Education">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <SectionHeading title="Experience & Education" subtitle="My Journey 2023 – 2026" center />

        <div className="max-w-3xl mx-auto mt-12 relative">
          {/* Central Timeline Line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-primary to-green-500 opacity-30" aria-hidden="true" />

          <div className="space-y-10">
            {timeline.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative flex gap-6"
                >
                  {/* Timeline Node */}
                  <div
                    className={`relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-card border-2 border-border flex items-center justify-center shadow-lg`}
                    aria-hidden="true"
                  >
                    <Icon size={18} className={item.color} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-2">
                    <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/40 transition-colors">
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                        <div>
                          <h3 className="text-lg font-bold font-heading text-foreground leading-tight">
                            {item.title}
                          </h3>
                          <p className="text-sm text-foreground/60 mt-0.5">{item.organization}</p>
                        </div>
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold flex-shrink-0 ${item.badgeColor}`}>
                          {item.period}
                        </span>
                      </div>
                      <p className="text-sm text-foreground/70 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
