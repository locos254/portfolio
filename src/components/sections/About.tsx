import { motion } from "framer-motion";
import { Code, Users, Clock, Award } from "lucide-react";
import devImg from "@assets/633188208_122123684391002991_6671734969535941105_n_1780596173668.jpg";
import { SectionHeading } from "../SectionHeading";

const stats = [
  { label: "Projects Completed", value: "50+", icon: <Code className="text-blue-500" size={24} /> },
  { label: "Satisfied Clients", value: "30+", icon: <Users className="text-purple-500" size={24} /> },
  { label: "Years Experience", value: "5+", icon: <Clock className="text-pink-500" size={24} /> },
  { label: "Technologies Mastered", value: "20+", icon: <Award className="text-cyan-500" size={24} /> },
];

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <SectionHeading title="About Me" subtitle="My Story & Journey" />
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mt-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-border bg-card">
              <img src={devImg} alt="LOCOS Developer Workspace" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>
            
            <div className="absolute -bottom-6 -right-6 md:-right-10 bg-card/80 backdrop-blur-xl p-6 rounded-2xl border border-border shadow-2xl">
              <h3 className="text-2xl font-bold font-heading text-primary">Based in</h3>
              <p className="text-foreground/80 font-medium text-lg">Nakuru, Kenya</p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold font-heading mb-6 text-foreground">
              Passionate about creating <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">digital experiences</span>
            </h3>
            
            <div className="space-y-4 text-foreground/70 text-lg leading-relaxed mb-8">
              <p>
                I am LOCOS Developer, a dedicated Full Stack Developer, Software Engineer, and UI/UX Designer. 
                My mission is to transform complex business challenges into elegant, intuitive, and performant digital solutions.
              </p>
              <p>
                With a deep understanding of both frontend aesthetics and backend architecture, I bridge the gap between design and technology. 
                I specialize in building modern web applications, scalable APIs, and comprehensive business systems that drive growth and innovation.
              </p>
              <p>
                My approach combines cutting-edge technologies with user-centric design principles, ensuring every project not only looks stunning but functions flawlessly.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
                  <div className="p-3 rounded-lg bg-primary/10">
                    {stat.icon}
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold font-heading text-foreground">{stat.value}</h4>
                    <p className="text-sm text-foreground/60">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}