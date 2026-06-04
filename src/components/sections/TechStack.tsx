import { SectionHeading } from "../SectionHeading";
import { 
  SiReact, SiNextdotjs, SiTailwindcss, SiTypescript, SiJavascript, 
  SiHtml5, SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, 
  SiMysql, SiFirebase, SiFigma, SiGit, SiGithub, SiDocker, SiVercel, 
  SiNetlify, SiBootstrap, SiMui, SiPhp, SiPostman
} from "react-icons/si";

const techStack1 = [
  { icon: SiHtml5, name: "HTML5", color: "#E34F26" },
  { icon: SiPostman, name: "Postman", color: "#FF6C37" },
  { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
  { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { icon: SiReact, name: "React", color: "#61DAFB" },
  { icon: SiNextdotjs, name: "Next.js", color: "#000000", darkColor: "#FFFFFF" },
  { icon: SiTailwindcss, name: "Tailwind CSS", color: "#06B6D4" },
  { icon: SiBootstrap, name: "Bootstrap", color: "#7952B3" },
  { icon: SiMui, name: "Material UI", color: "#007FFF" },
  { icon: SiFigma, name: "Figma", color: "#F24E1E" },
];

const techStack2 = [
  { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
  { icon: SiExpress, name: "Express.js", color: "#000000", darkColor: "#FFFFFF" },
  { icon: SiPhp, name: "PHP", color: "#777BB4" },
  { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
  { icon: SiMysql, name: "MySQL", color: "#4479A1" },
  { icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1" },
  { icon: SiFirebase, name: "Firebase", color: "#FFCA28" },
  { icon: SiGit, name: "Git", color: "#F05032" },
  { icon: SiGithub, name: "GitHub", color: "#181717", darkColor: "#FFFFFF" },
  { icon: SiDocker, name: "Docker", color: "#2496ED" },
  { icon: SiVercel, name: "Vercel", color: "#000000", darkColor: "#FFFFFF" },
  { icon: SiNetlify, name: "Netlify", color: "#00C7B7" },
];

export function TechStack() {
  return (
    <section id="tech-stack" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 mb-12">
        <SectionHeading title="Technologies" subtitle="Tools I Use Everyday" center />
      </div>

      <div className="relative flex flex-col gap-8">
        {/* Row 1 - Left to Right */}
        <div className="flex overflow-hidden w-full group">
          <div className="flex animate-scroll-left group-hover:animation-pause">
            {[...techStack1, ...techStack1, ...techStack1].map((tech, i) => (
              <div 
                key={`r1-${i}`} 
                className="flex items-center gap-3 min-w-[200px] p-4 mx-4 rounded-xl bg-card border border-border backdrop-blur-sm transition-transform hover:scale-105"
              >
                <tech.icon size={32} style={{ color: tech.color }} className="dark:mix-blend-lighten" />
                <span className="font-medium text-foreground">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - Right to Left */}
        <div className="flex overflow-hidden w-full group">
          <div className="flex animate-scroll-right group-hover:animation-pause">
            {[...techStack2, ...techStack2, ...techStack2].map((tech, i) => (
              <div 
                key={`r2-${i}`} 
                className="flex items-center gap-3 min-w-[200px] p-4 mx-4 rounded-xl bg-card border border-border backdrop-blur-sm transition-transform hover:scale-105"
              >
                <tech.icon size={32} style={{ color: tech.color }} />
                <span className="font-medium text-foreground">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}