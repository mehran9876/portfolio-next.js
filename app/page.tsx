import Hero from "@/app/_components/hero";
import AboutMe from "@/app/_components/about-me";
import Projects from "@/app/_components/projects";
import Skills from "@/app/_components/skills";
import ContactMe from "@/app/_components/contact-me";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutMe />
      <Projects />
      <Skills />
      <ContactMe />
    </>
  );
}
