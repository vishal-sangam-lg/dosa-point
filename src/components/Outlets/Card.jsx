import styles from "./outlets.module.css";
import map from "../../assets/map.gif";
import googlemap from "../../assets/google-maps.png";
import zomato from "../../assets/zomato.webp";
import swiggy from "../../assets/swiggy.webp";

export default function Card(props) {
  return (
    <div className={styles.card}>
      <img src={props.image} alt={props.branch} height="300" width="300" />
      <div className={styles.branch}>{props.branch}</div>
      <div className={styles.address}>{props.address}</div>
      <div className={styles.links}>
        <a href={`${props.link}`}>
          <img
            src={googlemap}
            height="40"
            width="40"
            className={styles.link}
            alt="map"
          />
        </a>
        <a href={`${props.link}`}>
          <img
            src={zomato}
            height="40"
            width="40"
            className={styles.link}
            alt="zomato"
          />
        </a>
        <a href={`${props.link}`}>
          <img
            src={swiggy}
            height="50"
            width="50"
            className={styles.link}
            alt="swiggy"
          />
        </a>
      </div>
    </div>
  );
}
