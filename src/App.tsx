import { useEffect } from "react";
import { Router, Switch, Route } from "wouter";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { TechStack } from "@/components/sections/TechStack";
import { Services } from "@/components/sections/Services";
import { Portfolio } from "@/components/sections/Portfolio";
import { Experience } from "@/components/sections/Experience";
import { Certifications } from "@/components/sections/Certifications";
import { Gallery } from "@/components/sections/Gallery";
import { Resume } from "@/components/sections/Resume";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { ProjectDetail } from "@/pages/ProjectDetail";
import { ServiceDetail } from "@/pages/ServiceDetail";

const RETURN_KEY = "locos:returnScroll";

function HomePage() {
  // When returning from a detail page, restore the scroll position
  useEffect(() => {
    const saved = sessionStorage.getItem(RETURN_KEY);
    if (saved !== null) {
      sessionStorage.removeItem(RETURN_KEY);
      const y = parseInt(saved, 10);
      // Two rAF frames let React finish painting before we jump
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          window.scrollTo({ top: y, behavior: "instant" });
        });
      });
    }
  }, []);

  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <About />
        <Skills />
        <TechStack />
        <Services />
        <Portfolio />
        <Experience />
        <Certifications />
        <Gallery />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function AppContent() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/30 text-foreground overflow-x-hidden">
      {/* Skip to main content — accessibility */}
      <a href="#main-content" className="skip-link" aria-label="Skip to main content">
        Skip to main content
      </a>

      <Router>
        <Switch>
          <Route path="/projects/:slug" component={ProjectDetail} />
          <Route path="/services/:slug" component={ServiceDetail} />
          <Route path="/" component={HomePage} />
        </Switch>
      </Router>

      <Toaster />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="dark" attribute="class">
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
