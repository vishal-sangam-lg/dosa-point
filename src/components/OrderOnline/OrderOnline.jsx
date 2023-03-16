import styles from "./order.module.css";
import Card from "./Card";

import zomato from "../../assets/zomato.webp";
import swiggy from "../../assets/swiggy.webp";

const data = [
  {
    image: zomato,
    title: "Zomato",
    link: "https://link.zomato.com/xqzv/rshare?id=37730500eb3b90ea",
  },
  {
    image: swiggy,
    title: "Swiggy",
    link: "https://www.swiggy.com/menu/628409?source=sharing",
  },
];

export default function OrderOnline() {
  return (
    <div>
      <h1 className={styles.heading}>Order Online</h1>
      <div className={styles.orderOnlineContainer}>
        {data.map((i) => {
          return <Card image={i.image} title={i.title} link={i.link} />;
        })}
      </div>
    </div>
  );
}
