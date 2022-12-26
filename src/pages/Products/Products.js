import { useState, useEffect } from "react";
import useHttp from "../../hooks/use-http";
import { URL_GET_ALL_PRODUCTS } from "../../utils/urls";
import Loader from "../../components/Loader/Loader";
import Product from "../../components/Product/Product";
import styles from "./Products.module.css";
const Products = () => {
  const [products, setProducts] = useState([]);
  const httpRequest = useHttp();

  useEffect(() => {
    httpRequest.post({
      url: URL_GET_ALL_PRODUCTS,
      body: JSON.parse(localStorage.getItem("user")),
    });
  }, []);

  useEffect(() => {
    if (httpRequest.data) {
      if (httpRequest.data.status === "ok") {
        setProducts(httpRequest.data.data);
        console.log(httpRequest.data.data);
      } else {
        alert(httpRequest.data.message);
      }
    }
  }, [httpRequest.data]);

  return (
    <div className={styles.main}>
      {httpRequest.loading && <Loader />}
      {products.map((product) => {
        return (
          <Product
            key={product._id}
            id={product._id}
            name={product.name}
            price={product.price}
            description={product.description}
            image={product.img}
            user={product.user}
            createdAt={product.createdAt}
          />
        );
      })}
    </div>
  );
};

export default Products;
