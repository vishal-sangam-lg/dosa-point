import Card from "./Card";
import styles from "./outlets.module.css";
import dosa_point_1 from "../../assets/dosa_point_1.png";
import dosa_point_2 from "../../assets/dosa_point_2.png";

const restaurants = [
  {
    image: dosa_point_1,
    branch: "Kuvempunagar",
    address:
      "Shop No, 1615, Adichunchanagiri Road, opposite Sri Ramana Gnana Kendra, P and T Block, Jayanagar, Kuvempu Nagara, Mysuru, Karnataka 570023",
    link: "https://goo.gl/maps/2Dj9hjnzStk9hj8U9",
    zomato: "https://link.zomato.com/xqzv/rshare?id=37730500eb3b90ea",
    swiggy: "https://www.swiggy.com/menu/628409?source=sharing",
  },
  {
    image: dosa_point_2,
    branch: "Devraj Urs Road",
    address:
      "D Devaraj Urs Rd, Devaraja Mohalla, Shivarampet, Mysuru, Karnataka 570001",
    link: "https://goo.gl/maps/2Dj9hjnzStk9hj8U9",
    zomato: "https://link.zomato.com/xqzv/rshare?id=37730500eb3b90ea",
    swiggy: "https://www.swiggy.com/menu/628409?source=sharing",
  },
];

const desktop = window.innerWidth > 801;

export default function Outlets() {
  return (
    <div className={styles.outletSection}>
      <h1 className={styles.heading}>Our Outlets</h1>
      <div className={desktop ? styles.verticalLine : ""}></div>
      <div className={styles.outletsContainer}>
        {restaurants.map((restaurant) => {
          return (
            <Card
              image={restaurant.image}
              branch={restaurant.branch}
              address={restaurant.address}
              link={restaurant.link}
              zomato={restaurant.zomato}
              swiggy={restaurant.swiggy}
            />
          );
        })}
      </div>
    </div>
  );
}
