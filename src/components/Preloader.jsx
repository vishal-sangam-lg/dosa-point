import logo from "../assets/pint-logo.svg";
import styles from "./Preloader.module.css";

export default function Preloader() {
  return (
    <div className={styles.preloader}>
      <div className={styles.logoContainer}>
        <img className={styles.logo} src={logo} alt="logo" />
      </div>
    </div>
  );
}
