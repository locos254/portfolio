import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import logoImg from "@assets/540694216_122096188833002991_8972136196766117080_n_1780596163304.jpg";

const navLinks = [
  "Home", "About", "Skills", "Tech Stack", "Services", 
  "Experience", "Portfolio", "Certifications", "Gallery", "Resume", "Contact"
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const { theme, setTheme } = useTheme();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollProgress((winScroll / height) * 100);

      // Simple active section detection based on scroll position
      const sections = navLinks.map(link => link.toLowerCase().replace(" ", "-"));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 200) {
          const originalName = navLinks.find(link => link.toLowerCase().replace(" ", "-") === section);
          if (originalName) setActiveSection(originalName);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (section: string) => {
    const id = section.toLowerCase().replace(" ", "-");
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-slate-800">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-150" 
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      <nav 
        className={`fixed top-1 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? "bg-background/80 backdrop-blur-md shadow-lg border-b border-border/50 py-3" 
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between">
          <div 
            className="flex items-center gap-3 cursor-pointer group" 
            onClick={() => scrollToSection("Home")}
            data-testid="link-home-logo"
          >
            <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-primary/50 group-hover:border-primary transition-colors">
              <img src={logoImg} alt="LOCOS Developer" className="h-full w-full object-cover" />
            </div>
            <span className="font-heading font-bold text-xl tracking-tight text-foreground">
              LOCOS<span className="text-primary">.</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            <ul className="flex items-center gap-1">
              {navLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollToSection(link)}
                    className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-300 relative group ${
                      activeSection === link ? "text-primary" : "text-foreground/80 hover:text-foreground"
                    }`}
                    data-testid={`link-nav-${link.toLowerCase().replace(" ", "-")}`}
                  >
                    {link}
                    {activeSection === link && (
                      <motion.span 
                        layoutId="activeNav"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                      />
                    )}
                  </button>
                </li>
              ))}
            </ul>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full bg-secondary/20 text-foreground hover:bg-secondary/40 transition-colors"
              data-testid="button-theme-toggle"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-4 lg:hidden">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full bg-secondary/20 text-foreground hover:bg-secondary/40 transition-colors"
              data-testid="button-theme-toggle-mobile"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button 
              className="text-foreground p-1"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div 
          className={`lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border/50 shadow-xl overflow-hidden`}
          initial={false}
          animate={{ height: mobileMenuOpen ? "auto" : 0, opacity: mobileMenuOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ul className="flex flex-col py-4 px-6 gap-2">
            {navLinks.map((link) => (
              <li key={link}>
                <button
                  onClick={() => scrollToSection(link)}
                  className={`w-full text-left py-3 px-4 rounded-lg font-medium transition-colors ${
                    activeSection === link 
                      ? "bg-primary/10 text-primary border-l-2 border-primary" 
                      : "text-foreground/80 hover:bg-muted"
                  }`}
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>
        </motion.div>
      </nav>
    </>
  );
}