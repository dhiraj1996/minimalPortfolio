import styles from "./SkillsStyles.module.css"
import checkMarkIcon from "../../assets/checkmark-dark.svg"
import SkillList from '../../common/SkillList'

function Skills() {
  return (
    <section id="skills" className={styles.container}>
        <h1 className='sectionTitle'>Skills</h1>
        {/* <p>Frontend</p> */}
        <div className={styles.skillList}>
            {/* <h3>Frontend</h3> */}
            <SkillList src={checkMarkIcon} skill="React"/>
            <SkillList src={checkMarkIcon} skill="Redux"/>
            <SkillList src={checkMarkIcon} skill="Javascript"/>
            <SkillList src={checkMarkIcon} skill="HTML"/>
        </div>
        <hr/>
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="CSS"/>
            <SkillList src={checkMarkIcon} skill="Bootstrap"/>
            <SkillList src={checkMarkIcon} skill="Tailwind CSS"/>
            <SkillList src={checkMarkIcon} skill="GSAP"/>
        </div>
        <hr/>
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="WordPress"/>
            <SkillList src={checkMarkIcon} skill="Node"/>
            <SkillList src={checkMarkIcon} skill="Git"/>
            <SkillList src={checkMarkIcon} skill="PHP"/>
        </div>
        <hr/>

    </section>
  )
}

export default Skills