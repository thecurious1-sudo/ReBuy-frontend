import { useEffect } from "react";
import styles from "./Home.module.css";
import Navbar from "../../components/Navbar/Navbar";
import useCheckAuthLocal from "../../hooks/check-local-auth";
import Products from "../../components/Products/Products";
import { Routes, Route } from "react-router-dom";
import Product from "../Product/Product";
import Sell from "../Sell/Sell";
const Home = () => {
  const checkAuthLocal = useCheckAuthLocal();
  useEffect(() => {
    checkAuthLocal.checkAuth({ redirectToLogin: true });
  }, []);
  return (
    <div className={styles.main}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="product/:id" element={<Product />} />
        <Route path="sell" element={<Sell />} />
      </Routes>
    </div>
  );
};

export default Home;
