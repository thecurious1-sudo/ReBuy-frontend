import styles from "./Login.module.css";
import { Link } from "react-router-dom";
import useInputField from "../../hooks/input-field";
const Login = () => {
  const email = useInputField("");
  const password = useInputField("");
  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(email.value, password.value);
  };

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.headings}>
          <div className={styles.heading1}>ReBuy</div>
          <div className={styles.heading2}>Login</div>
          <div className={styles.heading3}>
            Login to make an order, access your orders, buy and sell, and more!
          </div>
        </div>
        <hr></hr>
        <form onSubmit={formSubmitHandler} className={styles.login_form}>
          <div className={styles.form_group}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email.value}
              onChange={email.onChange}
            />
          </div>
          <div className={styles.form_group}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password.value}
              onChange={password.onChange}
            />
          </div>
          <div className={styles.form_button}>
            <button>Login</button>
          </div>
        </form>
        <div className={styles.heading3}>
          <Link className={styles.heading3} to="/signup">
            Don't have an account?
          </Link>{" "}
        </div>
      </div>
    </div>
  );
};

export default Login;
