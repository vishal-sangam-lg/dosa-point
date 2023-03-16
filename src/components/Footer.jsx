import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <p className={styles.footerItem}>Contact Us @9998887771</p>
      <p className={styles.footerItem}>Feedback @hello.dosapoint.com</p>
      {/* <p className={styles.footerItem}>Complaint</p> */}
    </div>
  );
}
