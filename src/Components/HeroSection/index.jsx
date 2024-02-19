import "./herosection.scss";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import React,{useState, useEffect} from "react"

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
  const images = ["/rozy.jpg", "https://images.unsplash.com/photo-1704494918677-d8cbef9f0dd5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1707962688729-fa3e0b968d4b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"];
  
  // State to track the index of the current image
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Function to change the image every 3 seconds
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    // Cleanup function to clear the interval when component unmounts
    return () => clearInterval(intervalId);
  }, []);
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
        <img src={images[currentImageIndex]} alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
