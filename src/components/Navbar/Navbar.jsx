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
      <div className={styles.navbarCenterSection}>
        <NavbarIconButton
          href="/"
          iconSrc={iconsHome}
          label="Home"
          alt="Home Link"
        />
        <NavbarIconButton
          href="/upload"
          iconSrc={iconsUpload}
          label="Upload"
          alt="Upload Link"
        />
      </div>
      <div className={styles.navbarRightSection}>
        <NavbarIconButton
          href={1}
          iconSrc={iconsHamburger}
          label="More"
          alt="Navigation menu toggle"
        />
      </div>
    </nav>
  );
};

function NavbarIconButton({ iconSrc, label, alt, href }) {
  return (
    <div className={styles.navbarLink}>
      <a href={href}>
        <img src={iconSrc} alt={alt} />
      </a>
      <div>{label}</div>
    </div>
  );
}
