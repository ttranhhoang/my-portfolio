"use client";
import styles from "./scss/page.module.scss";
import variable from "@/app/scss/variable.module.scss";
import Navbar from "@/component/Navbar";
import ScrollTopButton from "@/component/ScrollTopButton";
import Projects from "@/component/Projects";
import Skills from "@/component/Skills";
import Contact from "@/component/Contact";
import About from "@/component/About";
import StarsCanvas from "@/component/Canvas/StarsCanvas";
import Footer from "@/component/Footer";
import Hero from "@/component/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
        <ScrollTopButton />
      </main>
    </>
  );
}
