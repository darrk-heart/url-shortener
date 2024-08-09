import React from "react";
import styles from "./Work.module.css";

function Work() {
  return (
    <div className={styles.main}>
      <div className={styles.display}>
        <div className={styles.text}>
          <input type="text" placeholder="Shorten a link here..." />
        </div>
        <div className={styles.label}>Shorten It!</div>
      </div>
    </div>
  );
}

export default Work;
