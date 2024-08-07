import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import styles from "./Beneath.module.css";

function Beneath() {
  return (
    <div className={styles.beneath}>
      <div className={styles.boost}>
        <div>
          <h2>Boost your links today</h2>
          <span>Get Started</span>
        </div>
      </div>
      <div className={styles.shortly}>
        <h1>Shortly</h1>
        <div>
          <h4>Features</h4>
          <p>Link Shortening</p>
          <p>Branded Links</p>
          <p>Analytics</p>
        </div>
        <div>
          <h4>Resources</h4>
          <p>Blog</p>
          <p>Developers</p>
          <p>Support</p>
        </div>
        <div>
          <h4>Company</h4>
          <p>About</p>
          <p>Our Team</p>
          <p>Careers</p>
          <p>Contact</p>
        </div>
        <div>
          <FaFacebook />
          <FaTwitter />
          <FaPinterest />
          <BsInstagram />
        </div>
      </div>
    </div>
  );
}

export default Beneath;
