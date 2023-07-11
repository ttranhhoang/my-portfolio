"use client";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero_main">
        <div className="hero_content">
          <h2 className="hero_title">
            Hi, My name is
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Hoàng")
                  .callFunction(() => {
                    console.log("String typed out!");
                  })
                  .pauseFor(2500)
                  .deleteAll()
                  .typeString("I'm Frontend Developer!")
                  .callFunction(() => {
                    console.log("All strings were deleted");
                  })
                  .deleteAll()
                  .start();
              }}
              options={{
                cursorClassName: "hero_typing",
                loop: true,
              }}
            />
          </h2>

          {/* <h3 className="hero_desc">I am frontend Developer.</h3> */}
          <a href="#about" className="hero_btn">
            More about
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
