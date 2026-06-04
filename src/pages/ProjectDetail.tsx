import { useEffect } from "react";
import { useParams, useLocation } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, Layers, Lightbulb, Target, Star } from "lucide-react";
import { projects } from "@/data/projects";

const RETURN_KEY = "locos:returnScroll";

export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [, setLocation] = useLocation();
  const project = projects.find((p) => p.slug === slug);

  // Scroll to top when the page opens
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [slug]);

  const handleBack = () => {
    const savedY = sessionStorage.getItem(RETURN_KEY);
    setLocation("/");
    // Restore the saved scroll position after the home page mounts
    if (savedY !== null) {
      const y = parseInt(savedY, 10);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          window.scrollTo({ top: y, behavior: "instant" });
        });
      });
    }
  };

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground gap-6">
        <h1 className="text-3xl font-bold font-heading">Project Not Found</h1>
        <button
          onClick={handleBack}
          className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
        >
          <ArrowLeft size={18} /> Back to Portfolio
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 h-16 flex items-center gap-4">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors font-medium"
            aria-label="Back to portfolio"
          >
            <ArrowLeft size={20} />
            <span>Back to Portfolio</span>
          </button>
          <span className="text-border" aria-hidden="true">|</span>
          <span className="text-sm text-foreground/50 truncate">{project.title}</span>
        </div>
      </div>

      <main id="project-main">
        {/* Hero Image */}
        <div className="relative w-full h-[40vh] md:h-[55vh] overflow-hidden border-b border-border pt-16">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent z-10" aria-hidden="true" />
          <img
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute bottom-0 left-0 right-0 z-20 container mx-auto px-4 md:px-6 lg:px-8 pb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary/20 text-primary border border-primary/30 mb-3">
                {project.category}
              </span>
              <h1 className="text-3xl md:text-5xl font-bold font-heading text-white leading-tight">
                {project.title}
              </h1>
            </motion.div>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16 max-w-5xl">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">

              {/* Overview */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Layers size={16} className="text-primary" aria-hidden="true" />
                  </div>
                  <h2 className="text-xl font-bold font-heading text-foreground">Project Overview</h2>
                </div>
                <p className="text-foreground/70 leading-relaxed text-lg">{project.overview}</p>
              </motion.section>

              {/* Problem */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center">
                    <Target size={16} className="text-rose-500" aria-hidden="true" />
                  </div>
                  <h2 className="text-xl font-bold font-heading text-foreground">The Problem</h2>
                </div>
                <div className="p-6 rounded-xl bg-rose-500/5 border border-rose-500/20">
                  <p className="text-foreground/70 leading-relaxed">{project.problem}</p>
                </div>
              </motion.section>

              {/* Solution */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center">
                    <Lightbulb size={16} className="text-green-500" aria-hidden="true" />
                  </div>
                  <h2 className="text-xl font-bold font-heading text-foreground">My Solution</h2>
                </div>
                <div className="p-6 rounded-xl bg-green-500/5 border border-green-500/20">
                  <p className="text-foreground/70 leading-relaxed">{project.solution}</p>
                </div>
              </motion.section>

              {/* Features */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <CheckCircle2 size={16} className="text-primary" aria-hidden="true" />
                  </div>
                  <h2 className="text-xl font-bold font-heading text-foreground">Key Features</h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  {project.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
                      <CheckCircle2 size={16} className="text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span className="text-foreground/80 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.section>

              {/* Highlights */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-yellow-500/10 flex items-center justify-center">
                    <Star size={16} className="text-yellow-500" aria-hidden="true" />
                  </div>
                  <h2 className="text-xl font-bold font-heading text-foreground">Technical Highlights</h2>
                </div>
                <ul className="space-y-3">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-3 text-foreground/80">
                      <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex-shrink-0" aria-hidden="true" />
                      {h}
                    </li>
                  ))}
                </ul>
              </motion.section>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Tech Stack */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="p-6 rounded-2xl bg-card border border-border"
              >
                <h3 className="font-bold font-heading text-foreground mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 text-xs font-medium rounded-lg bg-primary/10 text-primary border border-primary/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Category */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="p-6 rounded-2xl bg-card border border-border"
              >
                <h3 className="font-bold font-heading text-foreground mb-2">Category</h3>
                <span className="px-3 py-1 rounded-full text-sm font-semibold bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  {project.category}
                </span>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-purple-500/10 border border-primary/20"
              >
                <h3 className="font-bold font-heading text-foreground mb-2">Interested in a similar project?</h3>
                <p className="text-sm text-foreground/60 mb-4">Let's discuss your requirements and build something great together.</p>
                <button
                  onClick={handleBack}
                  className="w-full py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                  data-testid="button-hire-me"
                >
                  Hire Me
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
