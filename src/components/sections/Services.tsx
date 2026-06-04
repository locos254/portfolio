import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLocation } from "wouter";
import { SectionHeading } from "../SectionHeading";
import { services } from "@/data/services";

const RETURN_KEY = "locos:returnScroll";

export function Services() {
  const [, setLocation] = useLocation();

  const handleLearnMore = (slug: string) => {
    sessionStorage.setItem(RETURN_KEY, String(window.scrollY));
    setLocation(`/services/${slug}`);
  };

  return (
    <section id="services" className="py-24 relative" aria-label="Services — What I Do">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <SectionHeading title="What I Do" subtitle="Digital Services" center />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12">
          {services.map((service, idx) => {
            const Icon = service.IconComponent;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.07 }}
                className="group relative p-6 rounded-2xl bg-card border border-border hover:border-transparent transition-all duration-300 flex flex-col"
                data-testid={`service-card-${idx}`}
              >
                <div
                  className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 blur transition-all duration-500 -z-10`}
                  aria-hidden="true"
                />

                <div className="relative z-10 flex flex-col h-full">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} p-0.5 mb-5`} aria-hidden="true">
                    <div className="w-full h-full bg-card rounded-[10px] flex items-center justify-center">
                      <Icon size={26} className="text-foreground" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold font-heading mb-2 text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-foreground/70 text-sm leading-relaxed flex-1 mb-5">
                    {service.shortDescription}
                  </p>

                  <button
                    onClick={() => handleLearnMore(service.slug)}
                    className="flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-3 transition-all group/btn mt-auto"
                    data-testid={`button-learn-more-${idx}`}
                    aria-label={`Learn more about ${service.title}`}
                  >
                    Learn More
                    <ArrowRight size={15} className="group-hover/btn:translate-x-1 transition-transform" aria-hidden="true" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
