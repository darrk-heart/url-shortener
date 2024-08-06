import React from "react";
import styles from "./Footer.module.css";
import brand from "../../assets/icon-brand-recognition.svg";
import details from "../../assets/icon-detailed-records.svg";
import customize from "../../assets/icon-fully-customizable.svg";

function Footer() {
  return (
    <div className={styles.footer}>
      <div>
        <h2>Advanced Statistics</h2>
        <p>
          Track how your links are performing accross the web with our advanced
          statistics dashboard
        </p>
      </div>
      <div className={styles.container}>
        <div className={styles.brands}>
          <img src={brand} alt="brands recognition logo" />
          <h3>Brand Recognition</h3>
          <p>
            Boost your brand recognition with each click. Generic links don't
            mean a thing. Branded links help instill confidence in your content.
          </p>
        </div>
        <div className={styles.records}>
          <img src={details} alt="detail records logo" />
          <h3>Detailed Records</h3>
          <p>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>
        <div className={styles.customize}>
          <img src={customize} alt="fully customizable" />
          <h3>Fully Customizable</h3>
          <p>
            Improve brand awareness and content discovery through customizable
            links, supercharging audience engagement.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
