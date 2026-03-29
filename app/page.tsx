import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { WhatIBuild } from "@/components/what-i-build";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";
import { ProofOfWork } from "@/components/proof-of-work";
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
      <WhatIBuild />
      <About />
      <Projects />
      <ProofOfWork />
      <Skills />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
}
