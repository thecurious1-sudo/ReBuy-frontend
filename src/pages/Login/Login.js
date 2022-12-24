import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.main}>
      <div className={styles.left}></div>
      <div className={styles.right}>
        <div className={styles.right_heading}>Welcome to ReBuy</div>
      </div>
    </div>
  );
};

export default Login;
