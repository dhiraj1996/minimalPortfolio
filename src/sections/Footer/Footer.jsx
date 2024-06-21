import styles from "./FooterStyles.module.css"

function Footer() {
  return (
    <section id="section" className={styles.container} aria-label="hero">
        <p>&#169; 2024 Dhiraj Ekka.<br/>
        All rights reserved.</p>
    </section>
  )
}

export default Footer