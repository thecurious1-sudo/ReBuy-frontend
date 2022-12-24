import { Link } from "react-router-dom";
import styles from "./Signup.module.css";
import useInputField from "../../hooks/input-field";
const Signup = () => {
  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(
      name.value,
      email.value,
      password.value,
      confirm_password.value
    );
  };
  const name = useInputField("");
  const email = useInputField("");
  const password = useInputField("");
  const confirm_password = useInputField("");

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.headings}>
          <div className={styles.heading1}>ReBuy</div>
          <div className={styles.heading2}>Sign Up</div>
          <div className={styles.heading3}>
            Sign up for a free account to buy and sell items in your local
            community on our online marketplace.
          </div>
        </div>
        <hr></hr>
        <form onSubmit={formSubmitHandler} className={styles.login_form}>
          <div className={styles.form_inputs}>
            <div className={styles.form_group}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                onChange={name.onChange}
                value={name.value}
              />
            </div>

            <div className={styles.form_group}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                onChange={email.onChange}
                value={email.value}
              />
            </div>
            <div className={styles.form_group}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                onChange={password.onChange}
                value={password.value}
              />
            </div>
            <div className={styles.form_group}>
              <label htmlFor="password">Confirm Password</label>
              <input
                type="password"
                id="confirm_password"
                onChange={confirm_password.onChange}
                value={confirm_password.value}
              />
            </div>
          </div>
          <div className={styles.form_button}>
            <button>Sign Up</button>
          </div>
        </form>
        <div className={styles.heading3}>
          <Link className={styles.heading3} to="/login">
            Already have an account?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
