import { useNavigate, useParams } from "react-router-dom";
import { URL_CREATE_ORDER, URL_GET_ALL_PRODUCTS } from "../../utils/urls";
import useHttp from "../../hooks/use-http";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import styles from "./Product.module.css";
import { timeSince } from "../../utils/time";
const Product = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [productData, setProductData] = useState(null);
  const httpRequest = useHttp(); //for product details
  const httpRequest2 = useHttp(); //for making offer
  useEffect(() => {
    httpRequest.post({
      url: URL_GET_ALL_PRODUCTS + `/${id}`,
      body: JSON.parse(localStorage.getItem("user")),
    });
  }, []);
  useEffect(() => {
    if (httpRequest.data) {
      if (httpRequest.data.status === "ok") {
        // console.log(httpRequest.data.data);
        setProductData(httpRequest.data.data);
      } else {
        alert(httpRequest.data.message);
      }
    }
  }, [httpRequest.data]);
  const makeOfferHandler = () => {
    // console.log(
    //   id,
    //   JSON.parse(localStorage.getItem("user")).id,
    //   JSON.parse(localStorage.getItem("user")).token
    // );
    httpRequest2.post({
      url: URL_CREATE_ORDER,
      body: {
        productId: id,
        id: JSON.parse(localStorage.getItem("user")).id,
        token: JSON.parse(localStorage.getItem("user")).token,
      },
    });
  };
  useEffect(() => {
    if (httpRequest2.data) {
      // console.log(httpRequest2.data);
      if (httpRequest2.data.status === "ok") {
        alert("Offer made successfully");
        // window.location.reload();
        navigate(`/home/orders/${httpRequest2.data.data._id}`);
      } else {
        alert(httpRequest2.data.message);
      }
    }
  }, [httpRequest2.data]);

  return (
    <>
      {httpRequest.loading && <Loader />}
      {httpRequest2.loading && <Loader />}
      <div className={styles.main}>
        {productData && (
          <div className={styles.container}>
            <div className={styles.image}>
              <img src="/prod_coming_soon.webp" alt="product" />
              {/* <img src={productData.img} alt="product" /> */}
            </div>
            <div className={styles.details}>
              <div className={styles.row1}>
                <div className={styles.basic_info}>
                  <span className={styles.product_name}>
                    {productData.name}
                  </span>
                  <span className={styles.product_description}>
                    {productData.description}
                  </span>
                  <span className={styles.time_ago}>
                    Posted {timeSince(new Date(productData.createdAt))} ago
                  </span>
                </div>
                <div className={styles.price_info}>
                  <span className={styles.product_price}>
                    Rs. {productData.price}
                  </span>
                  {productData.user._id !==
                    JSON.parse(localStorage.getItem("user")).id && (
                    <button
                      onClick={makeOfferHandler}
                      className={productData.sold ? styles.disabled : ""}
                      disabled={productData.sold}
                    >
                      Make Offer
                    </button>
                  )}
                  <div
                    // className={
                    //   styles.status + " " + !productData.sold
                    //     ? styles["status-unsold"]
                    //     : ""
                    // }
                    className={
                      productData.sold
                        ? styles["status-sold"]
                        : styles["status-unsold"]
                    }
                  >
                    {productData.sold ? "Sold" : "Unsold"}
                  </div>
                </div>
              </div>
              <div className={styles.row2}>
                <div className={styles.info_group}>
                  <div className={styles.info_group_left}>
                    <img src="/account1.png"></img>
                  </div>
                  <div className={styles.info_group_right}>
                    <span>Posted By</span>
                    <span>{productData.user.name}</span>
                  </div>
                </div>
                <div className={styles.info_group}>
                  <div className={styles.info_group_left}>
                    <img src="/location.png"></img>
                  </div>
                  <div className={styles.info_group_right}>
                    <span>Location</span>
                    <span>{productData.address}</span>
                  </div>
                </div>
                <div className={styles.info_group}>
                  <div className={styles.info_group_left}>
                    <img src="/calendar.png"></img>
                  </div>
                  <div className={styles.info_group_right}>
                    <span>On</span>
                    <span>
                      {new Date(productData.createdAt).getDate() +
                        "-" +
                        new Date(productData.createdAt).getMonth() +
                        "-" +
                        new Date(productData.createdAt).getFullYear() +
                        " at " +
                        new Date(productData.createdAt).getHours() +
                        ":" +
                        new Date(productData.createdAt).getMinutes()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Product;
