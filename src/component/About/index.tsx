"use client";
import { SectionWrapper } from "@/hoc";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="about">
      <div className="about_content">
        <h3>Welcome to my porfolio!</h3>
        <p>
          Hi everyone, I&apos;m a skilled software developer with experience in
          TypeScript and JavaScript, and expertise in frameworks like ReactJs,
          NextJs, and Three.js. I&apos;m a quick learner and collaborate closely
          with clients to create efficient, scalable, and user-friendly
          solutions that solve real-world problems. Let&apos;s work together to
          bring your ideas to life! Just do it!
        </p>
        <p>
          Also, I like rap so my wording is a bit different so I hope you
          all understand I&apos;m really happy when you see all the content of my
          portfolio! And hope we&apos;ll see each other in the near future. See
          yah! Yes sir!!!
        </p>
      </div>
      <div className="about_img">
        <Image
          className="about_img"
          src="https://images.unsplash.com/photo-1628167584500-176430ac05c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1045&q=80"
          alt="images"
          height={250}
          width={800}
        />
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about", "About Me");
