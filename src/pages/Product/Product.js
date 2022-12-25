import { useParams } from "react-router-dom";
import { URL_GET_ALL_PRODUCTS } from "../../utils/urls";
import useHttp from "../../hooks/use-http";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import styles from "./Product.module.css";
import { timeSince } from "../../utils/time";
const Product = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState(null);
  const httpRequest = useHttp();
  useEffect(() => {
    httpRequest.post({
      url: URL_GET_ALL_PRODUCTS + `/${id}`,
      body: JSON.parse(localStorage.getItem("user")),
    });
  }, []);
  useEffect(() => {
    if (httpRequest.data) {
      if (httpRequest.data.status === "ok") {
        console.log(httpRequest.data.data);
        setProductData(httpRequest.data.data);
      } else {
        alert(httpRequest.data.message);
      }
    }
  }, [httpRequest.data]);

  return (
    <div className={styles.main}>
      {httpRequest.loading && <Loader />}
      {productData && (
        <div className={styles.container}>
          <div className={styles.image}>
            <img src="/prod_coming_soon.webp" alt="product" />
          </div>
          <div className={styles.details}>
            <div className={styles.basic_info}>
              <span>{productData.name}</span>
              <span>{productData.description}</span>
            </div>

            <span>{productData.price}</span>
            <span>By {productData.user.name}</span>
            <span>{timeSince(new Date(productData.createdAt))} ago</span>
            <span>Location: {productData.address}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
