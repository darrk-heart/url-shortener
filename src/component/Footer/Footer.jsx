import React from "react";
import styles from "./Footer.module.css";

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
      <div>
        <div>
          <img />
          <h3>Brand Recognition</h3>
          <p>
            Boost your brand recognition with each click. Generic links don't
            mean a thing. Branded links help instill confidence in your content.
          </p>
        </div>
        <div>
          <img />
          <h3>Detailed Records</h3>
          <p>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>
        <div>
          <img />
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
