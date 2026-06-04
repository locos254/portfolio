import { useEffect } from "react";
import { useParams, useLocation } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, ArrowRight } from "lucide-react";
import { services } from "@/data/services";

const RETURN_KEY = "locos:returnScroll";

export function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [, setLocation] = useLocation();
  const service = services.find((s) => s.slug === slug);

  // Scroll to top when page opens
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [slug]);

  const handleBack = () => {
    const savedY = sessionStorage.getItem(RETURN_KEY);
    setLocation("/");
    if (savedY !== null) {
      const y = parseInt(savedY, 10);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          window.scrollTo({ top: y, behavior: "instant" });
        });
      });
    }
  };

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground gap-6">
        <h1 className="text-3xl font-bold font-heading">Service Not Found</h1>
        <button
          onClick={handleBack}
          className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg"
        >
          <ArrowLeft size={18} /> Back to Portfolio
        </button>
      </div>
    );
  }

  const Icon = service.IconComponent;

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
          <span className="text-sm text-foreground/50 truncate">{service.title}</span>
        </div>
      </div>

      <main id="service-main">
        {/* Hero */}
        <section className="relative py-24 pt-28 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px]" />
          </div>
          <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl"
            >
              <div className={`inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-0.5 mb-6`} aria-hidden="true">
                <div className="w-full h-full bg-background rounded-[14px] flex items-center justify-center">
                  <Icon size={28} className="text-foreground" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-4 leading-tight">
                {service.title}
              </h1>
              <p className="text-xl text-foreground/60 leading-relaxed">
                {service.overview}
              </p>
            </motion.div>
          </div>
        </section>

        <div className="container mx-auto px-4 md:px-6 lg:px-8 pb-20 max-w-5xl">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              {/* What you get */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h2 className="text-2xl font-bold font-heading text-foreground mb-6">What You Get</h2>
                <div className="space-y-3">
                  {service.whatYouGet.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
                      <CheckCircle2 size={18} className="text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span className="text-foreground/80">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.section>

              {/* Process */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold font-heading text-foreground mb-6">How It Works</h2>
                <div className="space-y-4">
                  {service.process.map((step, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                          {i + 1}
                        </div>
                        {i < service.process.length - 1 && (
                          <div className="w-0.5 flex-1 bg-border mt-2" aria-hidden="true" />
                        )}
                      </div>
                      <div className="pb-6">
                        <h3 className="font-bold text-foreground mb-1">{step.step}</h3>
                        <p className="text-foreground/60 text-sm leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.section>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Ideal for */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="p-6 rounded-2xl bg-card border border-border"
              >
                <h3 className="font-bold font-heading text-foreground mb-4">Ideal For</h3>
                <ul className="space-y-2">
                  {service.idealFor.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-foreground/70">
                      <ArrowRight size={14} className="text-primary flex-shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-purple-500/10 border border-primary/20"
              >
                <h3 className="font-bold font-heading text-foreground mb-2">Ready to get started?</h3>
                <p className="text-sm text-foreground/60 mb-4">
                  Contact me to discuss your project and get a free quote.
                </p>
                <button
                  onClick={handleBack}
                  className="w-full py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors mb-3"
                  data-testid="button-get-quote"
                >
                  Get a Free Quote
                </button>
                <a
                  href="https://wa.me/254746356814"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-[#25D366] text-white rounded-lg font-semibold hover:bg-[#22c55e] transition-colors flex items-center justify-center gap-2"
                  data-testid="link-whatsapp-service"
                  aria-label="Chat on WhatsApp"
                >
                  Chat on WhatsApp
                </a>
              </motion.div>

              {/* Other services */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="p-6 rounded-2xl bg-card border border-border"
              >
                <h3 className="font-bold font-heading text-foreground mb-4">Other Services</h3>
                <ul className="space-y-2">
                  {services
                    .filter((s) => s.slug !== slug)
                    .slice(0, 5)
                    .map((s) => (
                      <li key={s.slug}>
                        <button
                          onClick={() => {
                            sessionStorage.setItem(RETURN_KEY, String(window.scrollY));
                            setLocation(`/services/${s.slug}`);
                          }}
                          className="text-sm text-foreground/60 hover:text-primary transition-colors flex items-center gap-2"
                        >
                          <ArrowRight size={12} aria-hidden="true" />
                          {s.title}
                        </button>
                      </li>
                    ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
