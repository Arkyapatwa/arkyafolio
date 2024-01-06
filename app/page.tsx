'use client'
import Home from "@/components/Home";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Project from "@/components/Project";

export default function Page() {
  return (
    <>
      <div className="relative w-auto h-auto">
        <Home />
        <About />
        <Project />
        <Contact />
      </div>
    </>
  );
}
