import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { deleteUserInfoLocal } from "../../utils/authenticate";
const Navbar = () => {
  const logout = () => {
    deleteUserInfoLocal();
    window.location.href = "/";
  };
  return (
    <nav className={styles.navbar}>
      <div
        onClick={() => window.location.assign("/home")}
        className={styles.heading}
      >
        ReBuy
      </div>
      <div className={styles.navbar__links}>
        <div className={styles.sell}>
          <Link to="/sell" className={styles.navbar_link}>
            <button className={styles.sell_button}>Sell</button>
          </Link>
        </div>
        <div className={styles.profile}>
          <figure tabIndex="-1">
            <img src="/usericon4.png" />
            <nav className={styles.profile_menu}>
              <ul>
                <li>
                  <button>Orders</button>
                </li>

                <li>
                  <button>My Items</button>
                </li>
                <li>
                  <button onClick={logout}>Logout</button>
                </li>
              </ul>
            </nav>
          </figure>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;