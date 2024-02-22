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
      duration: 10,
    },
  },
};

const Banner = () => {
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
            <motion.h1
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 3 }}
            >
              Welcome to My Website
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 3 }}
            >
              I'm <span>Rozy</span>, a passionate web developer.
            </motion.p>
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
                  "BOOTSTRAP",
                ],
                autoStart: true,
                loop: true,
                wrapperClassName: "typewriter-wrapper",
                cursor: " ",
              }}
              onInit={(typewriter) => {
                typewriter
                  .changeDelay(100)
                  .pauseFor(1000)
                  .deleteChars(25)
                  .pauseFor(500)
                  .deleteAll()
                  .start();
              }}
            />
            <div className="tech-stack-container">
              <motion.img
                src={techStack[currentImageIndex].img}
                alt="tech-stack"
                className="tech-image"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 3 }}
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
          <motion.div
            className="hero-img"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
          
            <img src={Rozy} alt="rozy" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
