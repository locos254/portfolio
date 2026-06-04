import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, ChevronRight } from "lucide-react";
import devImg from "@assets/633188208_122123684391002991_6671734969535941105_n_1780596173668.jpg";

const roles = [
  "Full Stack Developer",
  "React Developer",
  "Node.js Developer",
  "UI/UX Designer",
  "Software Engineer",
  "Web Application Developer"
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#0F172A] text-white">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[150px] mix-blend-screen" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[100px] mix-blend-screen" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAwaDQwdjQwSDBWMHptMjAgMjB2MjBoMjBWMjBIMjB6TTAgMjBoMjB2MjBIMHYtMjB6IiBmaWxsPSIjMWUyOTNiIiBmaWxsLW9wYWNpdHk9IjAuNSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+')] opacity-20" />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/50 border border-slate-700 backdrop-blur-sm mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium text-slate-300">Available For Freelance Work</span>
            </div>
            
            <h2 className="text-xl md:text-2xl font-medium text-slate-300 mb-2">Hello, I'm LOCOS Developer</h2>
            
            <div className="h-20 sm:h-24 md:h-28 flex items-center mb-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                  {roles[roleIndex]}
                </span>
              </h1>
            </div>
            
            <p className="text-lg text-slate-400 mb-8 max-w-xl leading-relaxed">
              Building Modern Websites, Web Applications, APIs, Business Systems and Digital Solutions. Innovate. Develop. Deploy.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={scrollToContact}
                className="group relative px-6 py-3 font-semibold text-white bg-blue-600 rounded-lg overflow-hidden transition-all hover:scale-105 shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                data-testid="button-hero-contact"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transition-all opacity-0 group-hover:opacity-100" />
                <span className="relative flex items-center gap-2">
                  Contact Me <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              
              <button 
                className="group px-6 py-3 font-semibold text-slate-200 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg transition-all hover:bg-slate-800 hover:text-white"
                data-testid="button-hero-resume"
              >
                <span className="flex items-center gap-2">
                  <Download size={18} /> Download Resume
                </span>
              </button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative lg:ml-auto w-full max-w-md mx-auto lg:max-w-none"
          >
            <div className="relative aspect-square md:aspect-[4/5] lg:aspect-square rounded-3xl overflow-hidden border border-slate-700/50 p-2 bg-slate-800/30 backdrop-blur-xl shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-3xl" />
              <img 
                src={devImg} 
                alt="LOCOS Developer" 
                className="w-full h-full object-cover rounded-2xl filter contrast-125 saturate-110"
              />
              
              {/* Floating tech badges */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute top-10 -left-6 md:-left-10 bg-slate-900/80 backdrop-blur-md p-3 rounded-xl border border-slate-700 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <span className="text-blue-400 font-bold text-xl">Re</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">React.js</p>
                    <p className="text-xs text-slate-400">Expert</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-20 -right-6 md:-right-10 bg-slate-900/80 backdrop-blur-md p-3 rounded-xl border border-slate-700 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                    <span className="text-green-400 font-bold text-xl">Nd</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">Node.js</p>
                    <p className="text-xs text-slate-400">Advanced</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}