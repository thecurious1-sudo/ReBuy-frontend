import styles from "./Login.module.css";
import { Link } from "react-router-dom";
import useInputField from "../../hooks/input-field";
import useCheckAuthLocal from "../../hooks/check-local-auth";
import { useEffect } from "react";
import useHttp from "../../hooks/use-http";
import { URL_LOGIN } from "../../utils/urls";
import { saveUserInfoLocal } from "../../utils/authenticate";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
const Login = () => {
  const checkAuthLocal = useCheckAuthLocal();
  const httpRequest = useHttp();
  const navigate = useNavigate();
  useEffect(() => {
    checkAuthLocal.checkAuth({ redirectToHome: true });
  }, []);
  const email = useInputField("");
  const password = useInputField("");
  const formSubmitHandler = (e) => {
    e.preventDefault();
    httpRequest.post({
      url: URL_LOGIN,
      body: {
        email: email.value,
        password: password.value,
      },
    });
  };

  useEffect(() => {
    if (httpRequest.data) {
      if (httpRequest.data.status === "ok") {
        alert("User logged in successfully");
        saveUserInfoLocal(httpRequest.data);
        email.setValue("");
        password.setValue("");
        navigate("/home", { replace: true });
      } else {
        alert(httpRequest.data.message);
      }
    }
  }, [httpRequest.data]);

  return (
    <div className={styles.main}>
      {httpRequest.loading && <Loader />}
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
            <button className={styles.login_button}>Login</button>
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
