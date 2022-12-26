import styles from "./Order.module.css";
import { timeSince } from "../../utils/time";
import { Link } from "react-router-dom";
const Order = (props) => {
  return (
    <div className={styles.order}>
      <div className={styles.image}>
        <img src={"/prod_coming_soon.webp"} alt={props.name} />
        {/* <img src={props.image} alt={props.name} /> */}
      </div>
      <div className={styles.info}>
        <div className={styles.name}>{props.name}</div>
        <div className={styles.price}>Rs. {props.price}</div>
        <div className={styles.description}>{props.description}</div>
      </div>
      <div className={styles.footer}>
        <Link to={`/home/orders/${props.id}`}>
          <div className={styles.buy}>
            <button>View Order Details</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Order;
