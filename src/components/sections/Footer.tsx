import { ArrowUp, Linkedin } from "lucide-react";
import { SiGithub, SiYoutube, SiFacebook, SiTiktok, SiWhatsapp } from "react-icons/si";
import logoImg from "@assets/540694216_122096188833002991_8972136196766117080_n_1780596163304.jpg";

const socialLinks = [
  { icon: SiGithub, url: "https://github.com/locos254", label: "GitHub" },
  { icon: Linkedin, url: "https://www.linkedin.com/in/locos-developer-20339638a/", label: "LinkedIn" },
  { icon: SiWhatsapp, url: "https://wa.me/254746356814", label: "WhatsApp", color: "#25D366" },
  { icon: SiYoutube, url: "https://www.youtube.com/@locosdeveloperweb", label: "YouTube", color: "#FF0000" },
  { icon: SiFacebook, url: "https://www.facebook.com/profile.php?id=61580089738885", label: "Facebook", color: "#1877F2" },
  { icon: SiTiktok, url: "https://www.tiktok.com/@dj_locos_ke", label: "TikTok" },
];

const quickLinks = ["Home", "About", "Services", "Portfolio", "Experience", "Skills", "Gallery", "Contact"];

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-card border-t border-border pt-16 pb-8 relative overflow-hidden" role="contentinfo">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/5 rounded-[100%] blur-[100px] pointer-events-none" aria-hidden="true" />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">

          <div className="col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-primary">
                <img src={logoImg} alt="LOCOS Developer logo" className="h-full w-full object-cover" />
              </div>
              <span className="font-heading font-bold text-2xl tracking-tight text-foreground">
                LOCOS<span className="text-primary">.</span>
              </span>
            </div>
            <p className="text-foreground/70 text-sm leading-relaxed mb-6 max-w-sm">
              Building Modern Websites, Web Applications, APIs, Business Systems and Digital Solutions. Innovate. Develop. Deploy.
            </p>
            <nav aria-label="Social media links">
              <div className="flex items-center gap-3">
                {socialLinks.map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit LOCOS Developer on ${social.label}`}
                      className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center hover:scale-110 transition-transform group text-foreground/60 hover:text-foreground"
                    >
                      <Icon size={17} aria-hidden="true" />
                    </a>
                  );
                })}
              </div>
            </nav>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-foreground">Quick Links</h4>
            <nav aria-label="Footer quick links">
              <ul className="grid grid-cols-2 gap-3">
                {quickLinks.map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => {
                        const el = document.getElementById(link.toLowerCase());
                        if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
                      }}
                      className="text-foreground/70 hover:text-primary text-sm transition-colors"
                      aria-label={`Go to ${link} section`}
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-foreground">Contact Info</h4>
            <ul className="space-y-3 text-sm text-foreground/70" role="list">
              <li>Nakuru, Kenya</li>
              <li>
                <a href="mailto:developerlocos@gmail.com" className="hover:text-primary transition-colors" aria-label="Send email to LOCOS Developer">
                  developerlocos@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+254714838881" className="hover:text-primary transition-colors" aria-label="Call +254 714 838 881">
                  +254 714 838 881
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/254746356814"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#25D366] transition-colors flex items-center gap-2"
                  aria-label="Chat on WhatsApp: +254 746 356 814"
                >
                  <SiWhatsapp size={15} className="text-[#25D366]" aria-hidden="true" />
                  +254 746 356 814
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-foreground/50 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} LOCOS Developer. All Rights Reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="p-3 bg-card border border-border rounded-full text-foreground hover:text-primary hover:border-primary transition-colors shadow-sm focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Back to top of page"
          >
            <ArrowUp size={20} aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}
