import "./herosection.scss";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
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

const HeroSection = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Rozy Roshan</motion.h2>
       
          <motion.h1 variants={textVariants}>SOFTWARE ENGINEER</motion.h1>
          <motion.h3 variants={textVariants}>SKILLS </motion.h3>
          <Typewriter
            options={{

              strings: ["REACTJS", "NEXTJS", "JAVASCRIPT", "HTML", "CSS", "VERCEL", "NETLIFY", "GIT/GITHUB", "MATERIAL UI"],
              autoStart: true,
              loop: true,
              wrapperClassName: "typewriter-wrapper",
              cursor: " ",
            }}
          />
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        WEB DEVELOPER
      </motion.div>
      <div className="imageContainer">
        <img src="/rozy.jpg" alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
