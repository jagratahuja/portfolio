import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Achievements } from "@/components/achievements";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { AnimatedBackground } from "@/components/animated-background";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
}
