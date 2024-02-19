import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Grid } from "@mui/material";
import { useInView } from "react-intersection-observer";
import { aboutContent } from "../data";
import "./about.scss";

function About() {
  return (
    <div className="about-box">
      <h1>About me</h1>
      <div className="card-container">
        <Grid container spacing={3}>
          <AnimatePresence>
            {aboutContent.map((item) => (
              <Grid key={item.id} item xs={4}>
                <InViewWrapper>
                  {(isVisible) => (
                    <motion.div
                      className="card"
                      initial={isVisible ? "hidden" : { x: -200 }}
                      animate={isVisible ? { x: 0, opacity: 1 } : {}}
                      exit={{ opacity: 0, x: 100 }}
                      transition={{ duration: 0.3 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <motion.img
                        src={item.img}
                        alt="Your Image"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                      />
                      <div className="card-content">
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1, duration: 0.5 }}
                        >
                          {item.content}
                        </motion.p>
                      </div>
                    </motion.div>
                  )}
                </InViewWrapper>
              </Grid>
            ))}
          </AnimatePresence>
        </Grid>
      </div>
    </div>
  );
}

// InViewWrapper component using react-intersection-observer
const InViewWrapper = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });

  React.useEffect(() => {
    setIsVisible(inView);
  }, [inView]);

  return (
    <div ref={ref}>
      {children(isVisible)}
    </div>
  );
};

export default About;
