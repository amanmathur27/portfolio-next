import About from "@/components/about";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Contact />
      <Projects />
    </div>
  );
}
