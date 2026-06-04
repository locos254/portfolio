import { motion } from "framer-motion";
import { Download, FileText, CheckCircle2, GraduationCap, Briefcase, Code2 } from "lucide-react";
import { SectionHeading } from "../SectionHeading";

const skills = [
  "Full-Stack Web Development",
  "PHP, Python, JavaScript, TypeScript",
  "React, Next.js, Django, Node.js",
  "MySQL, PostgreSQL, MongoDB",
  "REST API Design & Development",
  "UI/UX Design (Figma)",
  "Git, Docker, Linux",
  "Cloud Deployment (Vercel, Render, AWS)"
];

const projects = [
  { name: "MYCHAT Application", desc: "Real-time messaging platform with chat rooms and notifications" },
  { name: "DJ LOCOS KE Platform", desc: "Music upload, streaming and DJ event management system" },
  { name: "School Management System", desc: "ERP for student records, exams, fees and reports" },
  { name: "Grand Azure Hotel System", desc: "Full hotel website + admin dashboard with bookings and revenue analytics" },
  { name: "Electric Shop", desc: "PHP/MySQL e-commerce platform with admin panel and cart" },
  { name: "Hospital Management System", desc: "Patient records, appointments, billing and role-based access" }
];

const education = [
  {
    title: "Certificate in Software Development",
    org: "Power Learn Project (PLP) Academy",
    period: "2023 – 2024"
  },
  {
    title: "IT Foundation",
    org: "ICS College Nakuru",
    period: "2023"
  }
];

export function Resume() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/John_Mwaura_CV.pdf";
    link.download = "John_Mwaura_LOCOS_Developer_CV.pdf";
    link.click();
  };

  return (
    <section id="resume" className="py-20 relative bg-slate-900/50" aria-label="Resume and CV">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <SectionHeading title="Resume & CV" subtitle="Professional Overview" center />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mt-12"
        >
          <div className="relative rounded-2xl bg-card border border-border overflow-hidden">
            {/* Header */}
            <div className="relative p-8 md:p-10 border-b border-border bg-gradient-to-br from-primary/5 to-purple-500/5">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] pointer-events-none" aria-hidden="true" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/5 rounded-full blur-[80px] pointer-events-none" aria-hidden="true" />

              <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center text-white flex-shrink-0" aria-hidden="true">
                    <FileText size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold font-heading text-foreground">John Mwaura</h3>
                    <p className="text-foreground/70">Independent Software Developer — LOCOS Developer</p>
                    <p className="text-sm text-foreground/50 mt-0.5">Nakuru, Kenya &bull; jmn103873@gmail.com &bull; +254 714 838 881</p>
                  </div>
                </div>

                <button
                  onClick={handleDownload}
                  className="group relative px-6 py-3 font-semibold text-white bg-primary rounded-lg overflow-hidden transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] w-full md:w-auto"
                  data-testid="button-download-resume"
                  aria-label="Download John Mwaura CV as PDF"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 transition-all opacity-0 group-hover:opacity-100" aria-hidden="true" />
                  <span className="relative flex items-center justify-center gap-2">
                    <Download size={18} aria-hidden="true" /> Download CV (PDF)
                  </span>
                </button>
              </div>
            </div>

            {/* Body */}
            <div className="p-8 md:p-10">
              {/* Summary */}
              <div className="mb-8 p-5 rounded-xl bg-primary/5 border border-primary/10">
                <p className="text-foreground/70 leading-relaxed text-sm">
                  Passionate and self-driven Independent Software Developer with practical experience building modern web applications,
                  messaging platforms, management systems, and e-commerce solutions. Skilled in frontend and backend development using
                  React, Django, Node.js, PHP, MySQL, and JavaScript. Strong interest in scalable systems, clean UI design,
                  and solving real-world software problems for businesses in Kenya and beyond.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Skills */}
                <div>
                  <h4 className="text-base font-bold mb-4 text-foreground flex items-center gap-2">
                    <Code2 size={16} className="text-primary" aria-hidden="true" />
                    Core Skills
                  </h4>
                  <ul className="space-y-2" role="list" aria-label="Core technical skills">
                    {skills.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-foreground/70">
                        <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Education */}
                <div>
                  <h4 className="text-base font-bold mb-4 text-foreground flex items-center gap-2">
                    <GraduationCap size={16} className="text-purple-500" aria-hidden="true" />
                    Education
                  </h4>
                  <ul className="space-y-4" role="list" aria-label="Education history">
                    {education.map((ed, i) => (
                      <li key={i} className="border-l-2 border-purple-500/30 pl-3">
                        <p className="text-sm font-semibold text-foreground">{ed.title}</p>
                        <p className="text-xs text-foreground/60">{ed.org}</p>
                        <p className="text-xs text-purple-400 mt-1">{ed.period}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Projects */}
                <div>
                  <h4 className="text-base font-bold mb-4 text-foreground flex items-center gap-2">
                    <Briefcase size={16} className="text-cyan-500" aria-hidden="true" />
                    Key Projects
                  </h4>
                  <ul className="space-y-3" role="list" aria-label="Key projects">
                    {projects.map((p, i) => (
                      <li key={i} className="text-sm">
                        <span className="font-semibold text-foreground">{p.name}</span>
                        <span className="text-foreground/50 text-xs block">{p.desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
