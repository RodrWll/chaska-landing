import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Teams from "@/components/sections/Teams";
import Gallery from "@/components/sections/Gallery";
import Recruitment from "@/components/sections/Recruitment";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Teams />
      <Gallery />
      <Recruitment />
      <Contact />
    </main>
  );
}