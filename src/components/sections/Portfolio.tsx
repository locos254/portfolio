import { motion } from "framer-motion";
import { ArrowRight, Info } from "lucide-react";
import { useLocation } from "wouter";
import { SectionHeading } from "../SectionHeading";
import { projects } from "@/data/projects";

const RETURN_KEY = "locos:returnScroll";

function navigateTo(setLocation: (to: string) => void, path: string) {
  sessionStorage.setItem(RETURN_KEY, String(window.scrollY));
  setLocation(path);
}

export function Portfolio() {
  const [, setLocation] = useLocation();

  const displayProjects = projects.slice(0, 4);

  return (
    <section id="portfolio" className="py-24 relative bg-slate-900/30" aria-label="Portfolio projects">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <SectionHeading title="Featured Projects" subtitle="My Portfolio" center />

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10 mt-12">
          {displayProjects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-colors flex flex-col"
              data-testid={`project-card-${idx}`}
            >
              {/* Image Container */}
              <div className="relative aspect-[16/9] overflow-hidden border-b border-border">
                <div
                  className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  aria-hidden="true"
                />
                <img
                  src={project.image}
                  alt={`Screenshot of ${project.title}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Hover overlay button */}
                <div
                  className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0"
                  aria-hidden="true"
                >
                  <button
                    onClick={() => navigateTo(setLocation, `/projects/${project.slug}`)}
                    className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-full hover:scale-110 transition-transform shadow-lg font-semibold text-sm"
                    tabIndex={-1}
                  >
                    <Info size={16} /> View Details
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-primary/10 text-primary mb-2 inline-block">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold font-heading text-foreground group-hover:text-primary transition-colors leading-snug">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <p className="text-foreground/70 text-sm leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>

                <div className="mb-5">
                  <h4 className="text-xs font-semibold text-foreground/50 uppercase tracking-wider mb-3">
                    Key Features
                  </h4>
                  <ul className="grid grid-cols-2 gap-2" role="list">
                    {project.features.slice(0, 4).map((feature, fIdx) => (
                      <li key={fIdx} className="text-sm flex items-center gap-2 text-foreground/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-border mb-4">
                  {project.tech.slice(0, 4).map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs font-medium px-2.5 py-1 rounded-md bg-secondary/10 text-secondary border border-secondary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => navigateTo(setLocation, `/projects/${project.slug}`)}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-white transition-all font-semibold text-sm group/btn"
                  data-testid={`button-project-detail-${idx}`}
                  aria-label={`View full details for ${project.title}`}
                >
                  View Full Details
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" aria-hidden="true" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-foreground/50 text-sm">
            {projects.length - 4} more projects available —{" "}
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="text-primary hover:underline"
            >
              contact me to discuss your project
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}
