import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Teams from "@/components/sections/Teams";
import Gallery from "@/components/sections/Gallery";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Teams />
      <Gallery />
    </main>
  );
}