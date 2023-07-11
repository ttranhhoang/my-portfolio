"use client";
import { projects } from "@/constants";
import { SectionWrapper } from "@/hoc";
import SlickCarousel from "../SlickCarousel";

const Projects = () => {
  return (
    <div className="projects space">
      <div className="projects_list">
        <SlickCarousel data={projects} />
      </div>
    </div>
  );
};

export default SectionWrapper(Projects, "projects", "My Projects");
