import { motion } from "framer-motion";

export function SectionHeading({ 
  title, 
  subtitle, 
  center = false 
}: { 
  title: string; 
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={`mb-12 ${center ? "text-center" : ""}`}>
      {subtitle && (
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block text-primary font-bold tracking-wider uppercase text-sm mb-2"
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-4xl md:text-5xl font-bold font-heading text-foreground"
      >
        {title}
        <span className="text-primary">.</span>
      </motion.h2>
    </div>
  );
}