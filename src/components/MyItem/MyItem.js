import styles from "./MyItem.module.css";
import { timeSince } from "../../utils/time";
import { Link } from "react-router-dom";

const MyItem = (props) => {
  return (
    <div className={styles.myItem}>
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
        <Link to={`/home/myItems/${props.id}`}>
          <div className={styles.buy}>
            <button>View Item Details</button>
          </div>
        </Link>
        <div className={styles.time}>
          <span>{timeSince(new Date(props.createdAt))} ago</span>
        </div>
      </div>
    </div>
  );
};

export default MyItem;
