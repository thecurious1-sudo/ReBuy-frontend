import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/ui/button/Button";
import styles from "./LandingPage.module.css";
const LandingPage = () => {
  const navigate = useNavigate();
  const navigateToSignup = () => {
    navigate("/signup");
  };
  return (
    <div className={styles.main}>
      <nav className={styles.navbar}>
        <div className={styles.heading}>ReBuy</div>
        <div className={styles.navbar__links}>
          <Link to="/login" className={styles.navbar__link}>
            Login
          </Link>
          <Link to="/signup" className={styles.navbar__link}>
            Signup
          </Link>
        </div>
      </nav>
      <div className={styles.content}>
        <div className={styles.content__left}>
          <div className={styles.content__left_heading}>
            Find, <span className={styles.highlight_text}>Buy</span>
            <br></br>
            And <span className={styles.highlight_text}>Sell</span>
          </div>
          <div className={styles.content__left_description}>
            Find what you're looking for and connect with local buyers and
            sellers on our platform. From home goods to vehicles, we have
            something for everyone. Start shopping and selling locally today!
          </div>
          <Button text="Sign Up" onClick={navigateToSignup}></Button>
        </div>
        <div className={styles.content__right}>
          <img src="/bg.svg"></img>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
