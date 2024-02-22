import React, { useState, useEffect } from "react";
import "./hero.scss";
import Rozy from "../../Assets/rozy.png";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { techStack } from "../data";

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

function Banner() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === techStack.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="banner-container">
      <div className="banner-content">
        <div className="banner-box">
          <div className="content-box">
            <h1>Welcome to My Website</h1>
            <p>
              I'm <span>Rozy</span> , a passionate web developer.
            </p>
            <Typewriter
              options={{
                strings: [
                  "REACTJS",
                  "NEXTJS",
                  "HTML",
                  "CSS",
                  "JAVASCRIPT",
                  "JAVA",
                  "GATSBY",
                  "GIT/GITHUB",
                  "VERCEL",
                  "NETLIFY",
                  "MATERIAL UI",
                  "BOOTSTRAP"
                ],
                autoStart: true,
                loop: true,
                wrapperClassName: "typewriter-wrapper",
                cursor: " ",
              }}
            />
            <div className="tech-stack-container">
              <img
                src={techStack[currentImageIndex].img}
                alt="tech-stack"
                className="tech-image"
              />
            </div>
          </div>
          <motion.div
            className="slidingTextContainer"
            variants={sliderVariants}
            initial="initial"
            animate="animate"
          >
            WEB DEVELOPER
          </motion.div>
          <div className="hero-img">
            <img src={Rozy} alt="rozy" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
