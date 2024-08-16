import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import styles from "./Header.module.css";
import illustration from "../../assets/illustration-working.svg";
import Hamburger from "../Hamburger/Hamburger";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div className={styles.head}>
        <p>Shortly</p>
        <FaBars onClick={toggleMenu} className={styles.fabar} />
      </div>
      { isMenuOpen && (<Hamburger />)}
      <div className={styles.tablethead}>
        <div>
          <p className={styles.shortly}>Shortly</p>
          <ul>
            <li>Features</li>
            <li>Pricing</li>
            <li>Resources</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Login</li>
            <li className={styles.sign}>Sign Up</li>
          </ul>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.illustration}>
          <img src={illustration} alt="illustration " />
        </div>
        <div className={styles.more}>
          <h1>
            More than just
            <br />
            shorter links
          </h1>
          <p>
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <span className={styles.started}>Get Started</span>
        </div>
      </div>
    </>
  );
}

export default Header;
