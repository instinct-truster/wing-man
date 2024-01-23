import { React, useState } from "react";
import styles from "./Navbar.module.css";
import iconsHamburger from "../../assets/icons/hamburger.svg";
import iconsHome from "../../assets/icons/home.svg";
import iconsUpload from "../../assets/icons/upload.svg";
import imagesHumpback from "../../assets/images/humpback.png";

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLeftSection}>
        <img className={styles.logo} src={imagesHumpback} alt="logo" />
        <pre className={styles.logoText} role="heading" aria-level="2">
          Serenade *
        </pre>
        <pre className={styles.logoTextSmall} role="heading" aria-level="2">
          Music Player{" "}
        </pre>
      </div>
    </nav>
  );
};
