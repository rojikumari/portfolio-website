import React from "react";
import "./project.scss";
import { Grid, Button } from "@mui/material";
import { items } from "../data";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";

function ProjectCard({ item }) {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, scale: 1 });
    }
  }, [controls, inView]);

  return (
    <Grid
      ref={ref}
      key={item.id}
      className="project-card-container"
      container
      spacing={3}
      component={motion.div}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={controls}
    >
      <Grid item xs={12} textAlign="center">
        <h2>{item.title}</h2>
      </Grid>
      <Grid
        container
        className="img-card"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        component={motion.div}
        whileHover={{ rotate: [0, 5, -5, 5, 0], transition: { duration: 0.5 } }}
      >
        <Grid item xs={12} md={6} className="image-box">
          <motion.img
            src={item.img}
            alt="project-Img"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />
        </Grid>
        <Grid item xs={12} md={6} className="content-box">
          <div>
            <p>{item.para}</p>
            <br />
            <p>
              <span>Tech stack: </span>
              {item.desc}
            </p>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
}

function Projects() {
  return (
    <div className="project-box">
      <h1>Projects</h1>
      <div className="project-card">
        <div className="project-card-box">
          {items.map((item) => (
            <ProjectCard key={item.id} item={item} />
          ))}
        </div>
      </div>

    </div>
  );
}

export default Projects;
