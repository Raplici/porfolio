import About from "@/components/(section)/about";
import Contact from "@/components/(section)/contact";
import Experience from "@/components/(section)/experience";
import Intro from "@/components/(section)/intro";
import Projects from "@/components/(section)/projects";
import Quote from "@/components/quote";

export default function Home() {
  return (
    <main className="container flex flex-col px-4">
      <Intro />
      <Quote />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}
