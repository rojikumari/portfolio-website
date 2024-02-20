import React from "react";
import "./skills.scss";
import { techStack } from "../data";
import { Grid } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function SkillCard({ item }) {
    const controls = useAnimation();
    const { ref, inView } = useInView();
  
    React.useEffect(() => {
      if (inView) {
        controls.start({ x: 0, opacity: 1 });
      }
    }, [controls, inView]);
  
    return (
      <Grid item xs={3} className="skill-card-box" ref={ref}>
        <motion.div
          className="skill-card-container"
          initial={{ x: "-100vw", opacity: 0 }}
          animate={controls}
          transition={{ duration: 0.5, delay: item.id * 0.1 }}
          whileHover={{ scale: 1.1, y: -5, transition: { duration: 0.2, yoyo: Infinity } }}
        >
          <div key={item.id} className="img-box">
            <img src={item.img} alt="logo" />
          </div>
          <div className="tech-box">
            <h5>{item.tech}</h5>
          </div>
        </motion.div>
      </Grid>
    );
  }
function Skills() {
  return (
    <div className="skill-box">
      <h1>Skills</h1>
      <div className="skill-card">
        <Grid container xs={8} spacing={3}>
          {techStack.map((item) => (
            <SkillCard key={item.id} item={item} />
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default Skills;
