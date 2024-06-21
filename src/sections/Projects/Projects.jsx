import React from "react";
import styles from "./ProjectsStyles.module.css";
import viber from "../../assets/viberr.png";
import freshburger from "../../assets/fresh-burger.png"
import hipsster from "../../assets/hipsster.png"
import fitLift from "../../assets/fitlift.png"
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="section" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viber}
          link="https://github.com/dhiraj1996/backendChai"
          h3="News"
          p="News App"
        />
        <ProjectCard
          src={freshburger}
          link="https://github.com/dhiraj1996/backendChai"
          h3="Burger"
          p="Burger App"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/dhiraj1996/backendChai"
          h3="News"
          p="News App"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/dhiraj1996/backendChai"
          h3="FitLift"
          p="Fitness App"
        />
      </div>
    </section>
  );
}

export default Projects;
