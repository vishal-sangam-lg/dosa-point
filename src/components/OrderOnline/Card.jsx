import styles from "./order.module.css";
import Button from "react-bootstrap/Button";

export default function Card(props) {
  return (
    <div className={styles.card}>
      <div>
        <img src={props.image} height="100" className={styles.img} />
      </div>
      <div>
        <a href={`${props.link}`}>
          <Button variant="outline-success">Order Now !</Button>
        </a>
      </div>
    </div>
  );
}
