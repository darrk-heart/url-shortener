import React from "react";
import { FaBars } from "react-icons/fa";
import styles from "./Header.module.css";
import illustration from "../../assets/illustration-working.svg";

function Header() {
  return (
    <>
      <div className={styles.head}>
        <p>Shortly</p>
        <FaBars className={styles.fabar} />
      </div>
      <div>
        <div>
          <img src={illustration} alt="illustration " />
        </div>
        <div>
          <h1>
            More than just
            <br />
            shorter links
          </h1>
          <p>
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <p>Get Started</p>
        </div>
      </div>
    </>
  );
}

export default Header;
