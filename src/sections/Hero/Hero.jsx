import styles from "./HeroStyle.module.css"
// import heroImg from "../../assets/profile-pic.png"
// import heroImg from "../../assets/profile-pic2.webp"
// import heroImg from "../../assets/profile-pic3.png"
import heroImg from "../../assets/profile.png"


// import themeIcon from "../../assets/sun.svg"
import sun from "../../assets/sun.svg"
import moon from "../../assets/moon.svg"

import twitterLight from "../../assets/twitter-light.svg"
import twitterDark from "../../assets/twitter-dark.svg"

import githubLight from "../../assets/github-light.svg"
import githubDark from "../../assets/github-dark.svg"

import linkedLight from "../../assets/linkedin-light.svg"
import linkedDark from "../../assets/linkedin-dark.svg"

import CV from "../../assets/DhirajEkkaResumeP.pdf"
import { useTheme } from "../../common/ThemeContext"


function Hero() {
    const {theme, toggleTheme} = useTheme();
    const themeIcon = theme === 'light' ? sun: moon;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const twitterIcon = theme === 'light' ? twitterLight: twitterDark;
    const linkedInIcon = theme === 'light' ? linkedLight: linkedDark;



  return (
    <section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img 
                className={styles.hero} 
                src={heroImg} 
                alt="Profile picture of Dhiraj Ekka" 
            />
            <img 
                className={styles.colorMode} 
                src={themeIcon} 
                alt="Dark-Light Mode"
                cursor="grab"
                onClick={toggleTheme}
            />
        </div>
        <div className={styles.info}>
            <h1>
            Hi 👋 , I am 
                <br />
                Dhiraj 
                <br />
                Ekka
            </h1>
            <h2>React Developer</h2>
            <span>
                <a href="https://github.com/dhiraj1996" target="_blank">
                    <img src={githubIcon} alt="github icon"/>
                </a>
                <a href="https://www.linkedin.com/in/dhiraj-ekka-dev/" target="_blank">
                    <img src={linkedInIcon} alt="linkedIn icon"/>
                </a>
                <a href="https://x.com/haveDhiraj" target="_blank">
                    <img src={twitterIcon} alt="twitter icon"/>
                </a>
            </span>
            <p className={styles.description} >
                With a passion for developing modern React Web apps.Enthusiastic and self-motivated web designer.Eager to join and bring my skill in frontend development, and visual design to every project that will be received in the future. 
                
            </p>
            {/* download */}
            <a href={CV} download>
                <button className="hover" >
                    Resume
                </button>
            </a>
            
        </div>
    </section>
  )
}

export default Hero