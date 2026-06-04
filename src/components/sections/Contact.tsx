import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Send, CheckCircle2 } from "lucide-react";
import { SiWhatsapp, SiGithub, SiYoutube, SiFacebook, SiTiktok } from "react-icons/si";
import { Linkedin } from "lucide-react";
import { SectionHeading } from "../SectionHeading";

const WHATSAPP_NUMBER = "254746356814";

const socialLinks = [
  { icon: SiGithub, href: "https://github.com/locos254", label: "GitHub", color: "hover:text-white" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/locos-developer-20339638a/", label: "LinkedIn", color: "hover:text-[#0A66C2]" },
  { icon: SiYoutube, href: "https://www.youtube.com/@locosdeveloperweb", label: "YouTube", color: "hover:text-[#FF0000]" },
  { icon: SiFacebook, href: "https://www.facebook.com/profile.php?id=61580089738885", label: "Facebook", color: "hover:text-[#1877F2]" },
  { icon: SiTiktok, href: "https://www.tiktok.com/@dj_locos_ke", label: "TikTok", color: "hover:text-white" },
];

export function Contact() {
  const [isSent, setIsSent] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;

    const text = [
      `Hello LOCOS Developer! 👋`,
      ``,
      `*Name:* ${name}`,
      `*Email:* ${email}`,
      `*Subject:* ${subject}`,
      ``,
      `*Message:*`,
      message,
    ].join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");

    setIsSent(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setIsSent(false), 5000);
  };

  const contactInfo = [
    { icon: MapPin, label: "Location", value: "Nakuru, Kenya", href: "#", ariaLabel: "Location: Nakuru, Kenya" },
    { icon: Mail, label: "Email", value: "developerlocos@gmail.com", href: "mailto:developerlocos@gmail.com", ariaLabel: "Email LOCOS Developer" },
    { icon: Phone, label: "Phone", value: "+254 714 838 881", href: "tel:+254714838881", ariaLabel: "Call LOCOS Developer" },
  ];

  return (
    <section id="contact" className="py-24 relative" aria-label="Contact">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <SectionHeading title="Get In Touch" subtitle="Contact Me" center />

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 mt-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-2xl font-bold font-heading mb-6 text-foreground">Let's Discuss Your Project</h3>
            <p className="text-foreground/70 mb-6 leading-relaxed text-sm">
              Fill in the form and it will open WhatsApp with your message ready to send — no email needed!
            </p>

            <div className="space-y-3" role="list" aria-label="Contact information">
              {contactInfo.map((info, idx) => {
                const Icon = info.icon;
                return (
                  <motion.a
                    href={info.href}
                    aria-label={info.ariaLabel}
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group"
                    role="listitem"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all flex-shrink-0">
                      <Icon size={18} aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs text-foreground/50">{info.label}</p>
                      <p className="font-semibold text-foreground text-sm">{info.value}</p>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* WhatsApp Direct */}
            <motion.a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat directly with LOCOS Developer on WhatsApp"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="flex items-center gap-4 p-4 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 hover:bg-[#25D366] group transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-[#25D366]/20 flex items-center justify-center text-[#25D366] group-hover:bg-white/20 group-hover:text-white transition-all flex-shrink-0">
                <SiWhatsapp size={18} aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs text-foreground/50 group-hover:text-white/70">WhatsApp — chat directly</p>
                <p className="font-semibold text-foreground group-hover:text-white text-sm">+254 746 356 814</p>
              </div>
            </motion.a>

            {/* Social Links */}
            <div>
              <p className="text-sm text-foreground/50 mb-3">Follow me</p>
              <div className="flex items-center gap-3" role="list" aria-label="Social media links">
                {socialLinks.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={i}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit LOCOS Developer on ${s.label}`}
                      role="listitem"
                      className={`w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-foreground/60 transition-colors ${s.color}`}
                    >
                      <Icon size={17} aria-hidden="true" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 rounded-2xl bg-card border border-border p-6 md:p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#25D366]/5 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />

            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#25D366]/10 flex items-center justify-center">
                <SiWhatsapp size={20} className="text-[#25D366]" aria-hidden="true" />
              </div>
              <div>
                <p className="font-bold text-foreground text-sm">Send via WhatsApp</p>
                <p className="text-xs text-foreground/50">Fill in the form → WhatsApp opens with your message ready</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="relative z-10 space-y-5" aria-label="Contact form — sends via WhatsApp" noValidate>
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    aria-required="true"
                    className="w-full bg-background border border-input rounded-lg px-4 py-3 text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]/50 transition-shadow text-sm"
                    placeholder="John Doe"
                    data-testid="input-name"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    aria-required="true"
                    className="w-full bg-background border border-input rounded-lg px-4 py-3 text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]/50 transition-shadow text-sm"
                    placeholder="john@example.com"
                    data-testid="input-email"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-sm font-medium text-foreground">Subject</label>
                <input
                  type="text"
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  aria-required="true"
                  className="w-full bg-background border border-input rounded-lg px-4 py-3 text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]/50 transition-shadow text-sm"
                  placeholder="Project Inquiry"
                  data-testid="input-subject"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  aria-required="true"
                  className="w-full bg-background border border-input rounded-lg px-4 py-3 text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]/50 transition-shadow resize-none text-sm"
                  placeholder="Tell me about your project..."
                  data-testid="input-message"
                />
              </div>

              <button
                type="submit"
                aria-disabled={isSent}
                className="w-full py-4 rounded-lg font-semibold text-white bg-[#25D366] relative overflow-hidden group transition-all hover:bg-[#22c55e] shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_30px_rgba(37,211,102,0.5)]"
                data-testid="button-submit-contact"
              >
                <span className="flex items-center justify-center gap-2">
                  {isSent ? (
                    <><CheckCircle2 size={20} aria-hidden="true" /> WhatsApp Opened!</>
                  ) : (
                    <><SiWhatsapp size={20} aria-hidden="true" /> Send via WhatsApp</>
                  )}
                </span>
              </button>

              <p className="text-center text-xs text-foreground/40">
                Clicking the button will open WhatsApp with your message pre-filled. Just press Send.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
