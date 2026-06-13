import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useReveal } from "@/hooks/useReveal";

const Index = () => {
  useReveal();
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <div className="hairline" />
        <Projects />
        <div className="hairline" />
        <Skills />
        <div className="hairline" />
        <About />
        <div className="hairline" />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
