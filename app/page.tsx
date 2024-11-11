import AboutMe from "@/components/AboutMe";
import Intro from "@/components/Intro";
import Project from "@/components/Project";
import GetInTouch from "@/components/GetInTouch";
import Blog from "@/components/Blog";
import Mode from "@/components/Mode";
import Footer from "@/components/Footer";
import { BentoGrid } from "@/components/ui/bento-grid";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <BentoGrid className="max-w-6xl mx-auto">
      <Intro />
      <AboutMe />
      <Experience />
      <Project />
      <GetInTouch />
      <Mode />
      <Blog />
      <Footer />
    </BentoGrid>
  );
}
