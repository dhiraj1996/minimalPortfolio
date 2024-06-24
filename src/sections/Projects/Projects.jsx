import styles from "./ProjectsStyles.module.css";
// import viber from "../../assets/viberr.png";
import newsPic from "/jsnews.png"
import myntraClone from "/myntraProject.png"
// import myntraClone from "../../../public/myntraProject2.png"
import SNS from "/Post-it-Home.png"
import ERP from "/erp.png"

import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="section" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={newsPic}
          link="https://github.com/dhiraj1996/backendChai"
          h3="Live News"
          p="News App"
          label={["HTML","CSS","JAVASCRIPT","FETCH","NEWS-API"]}
        />
        <ProjectCard
          src={myntraClone}
          link="https://github.com/dhiraj1996/backendChai"
          h3="Myntra Clone"
          p="Shopping App"
          label={["REACT","REDUX","HTML","CSS","BOOTSTRAP","JAVASCRIPT","FETCH","API"]}

        />
        <ProjectCard
          src={SNS}
          link="https://github.com/dhiraj1996/backendChai"
          h3="Post-IT"
          p="Social Media App"
          label={["REACT","CONTEXT-API", "BOOTSTRAP","HTML","CSS","JAVASCRIPT","FETCH","API"]}

        />
        <ProjectCard
          src={ERP}
          link=" https://dhiraj1996.github.io/erpmain/"
          h3="ERP for College"
          p="Enterprise Resource Planner"
          label={["WORDPRESS","HTML","CSS","JAVASCRIPT","PHP", "MYSQL","CRUD"]}

        />
      </div>
    </section>
  );
}

export default Projects;
