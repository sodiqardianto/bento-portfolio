"use client";

import AboutMe from "@/components/AboutMe";
import Blog from "@/components/Blog";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import GetInTouch from "@/components/GetInTouch";
import Intro from "@/components/Intro";
import Mode from "@/components/Mode";
import Project from "@/components/Project";
import Skills from "@/components/Skills";

export default function Component() {
  return (
    <div className="min-h-screen bg-transparent p-4 flex items-center">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-4">
        <Intro />
        <AboutMe />
        <Experience />
        <Skills />
        <Project />
        <Blog />
        <GetInTouch />
        <Mode />
        <Footer />
      </div>
    </div>
  );
}
