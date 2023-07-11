"use client";
import { BallCanvas } from "@/component/Canvas";
import { technologies } from "@/constants";
import { SectionWrapper } from "@/hoc/index";

const Skills = () => {
  return (
    <div className="skills space">
      <div className="skills_icons">
        {/* <SlickCarousel data={data} isSkills /> */}
        {/* <div className="flex flex-row flex-wrap justify-center gap-10"> */}
        {technologies.map((technology) => (
          <div className="skills_icon" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
        {/* </div> */}
      </div>
    </div>
  );
};

export default SectionWrapper(Skills, "skills", "My Skills");
