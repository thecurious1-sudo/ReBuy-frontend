import styles from "./Product.module.css";
import { timeSince } from "../../utils/time";
import { Link } from "react-router-dom";
const Product = (props) => {
  return (
    <div className={styles.product}>
      <div className={styles.image}>
        <img src={"/prod_coming_soon.webp"} alt={props.name} />
      </div>
      <div className={styles.info}>
        <div className={styles.name}>{props.name}</div>
        <div className={styles.price}>Rs. {props.price}</div>
        <div className={styles.description}>{props.description}</div>
        {/* <p>Time since: {timeSince(new Date(props.createdAt))}</p> */}
      </div>
      {/* <div className={styles.time}>{timeSince(new Date(props.createdAt))}</div> */}

      <div className={styles.footer}>
        <Link to={`/home/product/${props.id}`}>
          <div className={styles.buy}>
            <button>Buy</button>
          </div>
        </Link>
        <div className={styles.time}>
          <span>{timeSince(new Date(props.createdAt))} ago</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
