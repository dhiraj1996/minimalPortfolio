import styles from "../sections/Projects/ProjectsStyles.module.css";

function ProjectCard({ src, link, h3, p, label}) {
  // let [label] = label;
  // const label = ["HTML","CSS","JAVASCRIPT", "FETCH", "API"];
  return (
    <>
      <div className={styles.cardContainer}>
        <a href={link} target="_blank">
          <img src={src} alt={`${h3} logo`} />
          <h3>{h3}</h3>
          <p>{p}</p>
          {/* <span className="label label-default">{label}</span> */}
          {label.map((lab, index) => (<span key={index} className="label label-default">{lab}</span>))}
        </a>
      </div>
    </>
  );
}

export default ProjectCard;
