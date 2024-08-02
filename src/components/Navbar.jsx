/* eslint-disable no-unused-vars */
import { useState } from "react"
import styles from "../styles/Navbar.module.css"

function Navbar() {
  const [isActive, setIsActive] = useState(false)

  const toggleActiveClass = () => {
    setIsActive(!isActive)
  }

  const removeActive = () => {
    setIsActive(false)
  }

  return (
    <header className="App-header">
      <nav className={`${styles.navbar}`}>
        {/*logo*/}
        <a href="#home" className={`${styles.logo}`}>
          <img src='../../public/Logo1.png'/>
        </a>
        <ul className={`${styles.navMenu} ${isActive ? styles.active : ""}`}>
          <li onClick={removeActive}>
            <a href='#home' className={`${styles.navLink}`}>Home</a>
          </li>
          <li onClick={removeActive}>
            <a href='#home' className={`${styles.navLink}`}>About</a>
          </li>
          <li onClick={removeActive}>
            <a href='#home' className={`${styles.navLink}`}>Contact Us</a>
          </li>
          <li onClick={removeActive}>
            <a href='#home' className={`${styles.navLink}`}>Donate</a>
          </li>
        </ul>

        <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`} onClick={toggleActiveClass}>
          <span className={`${styles.bar}`}></span>
          <span className={`${styles.bar}`}></span>
          <span className={`${styles.bar}`}></span>
        </div>
      </nav>
    </header>
  )
}

export default Navbar;