import { useParams } from "react-router-dom";
import { URL_GET_ORDER_DETAILS } from "../../utils/urls";
import useHttp from "../../hooks/use-http";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import styles from "./Order.module.css";
import { timeSince } from "../../utils/time";

const Order = (props) => {
  const httpRequest = useHttp(); //for order details
  const [orderData, setOrderData] = useState(null);

  const { id } = useParams();
  // console.log(id);
  useEffect(() => {
    httpRequest.post({
      url: URL_GET_ORDER_DETAILS + `/${id}`,
      body: JSON.parse(localStorage.getItem("user")),
    });
  }, []);
  useEffect(() => {
    // console.log(httpRequest.data);
    if (httpRequest.data) {
      if (httpRequest.data.status === "ok") {
        // console.log(httpRequest.data.data);
        setOrderData(httpRequest.data.data);
      } else {
        alert(httpRequest.data.message);
      }
    }
  }, [httpRequest.data]);
  // return <div>asd</div>;
  return (
    <>
      {httpRequest.loading && <Loader />}
      <div className={styles.main}>
        {orderData && (
          <div className={styles.container}>
            <div className={styles.image}>
              <img src="/prod_coming_soon.webp" alt="product" />
              {/* <img src={productData.img} alt="product" /> */}
            </div>
            <div className={styles.details}>
              <div className={styles.row1}>
                <div className={styles.basic_info}>
                  <span className={styles.product_name}>
                    {orderData.product.name}
                  </span>
                  <span className={styles.product_description}>
                    {orderData.product.description}
                  </span>
                  <span className={styles.time_ago}>
                    Posted {timeSince(new Date(orderData.product.createdAt))}{" "}
                    ago
                  </span>
                </div>
                <div className={styles.price_info}>
                  <span className={styles.product_price}>
                    Rs. {orderData.product.price}
                  </span>
                  <span className={styles.purchase_date}>
                    On &nbsp;
                    {"" +
                      new Date(orderData.createdAt).getDate() +
                      "-" +
                      new Date(orderData.createdAt).getMonth() +
                      "-" +
                      new Date(orderData.createdAt).getFullYear() +
                      " at " +
                      new Date(orderData.createdAt).getHours() +
                      ":" +
                      new Date(orderData.createdAt).getMinutes()}
                  </span>
                  {/* <span className={styles.product_price}>By You</span> */}
                  <div className={styles.status}>Owned</div>
                </div>
              </div>
              <div className={styles.row2}>
                {/* <div className={styles.info_group}>Product</div> */}
                <div className={styles.info_group}>
                  <div className={styles.info_group_left}>
                    <img src="/account1.png"></img>
                  </div>
                  <div className={styles.info_group_right}>
                    <span>Posted By</span>
                    <span>{orderData.product.user.name}</span>
                  </div>
                </div>
                <div className={styles.info_group}>
                  <div className={styles.info_group_left}>
                    <img src="/location.png"></img>
                  </div>
                  <div className={styles.info_group_right}>
                    <span>Location</span>
                    <span>{orderData.product.address}</span>
                  </div>
                </div>
                <div className={styles.info_group}>
                  <div className={styles.info_group_left}>
                    <img src="/calendar.png"></img>
                  </div>
                  <div className={styles.info_group_right}>
                    <span>On</span>
                    <span>
                      {new Date(orderData.product.createdAt).getDate() +
                        "-" +
                        new Date(orderData.product.createdAt).getMonth() +
                        "-" +
                        new Date(orderData.product.createdAt).getFullYear() +
                        " at " +
                        new Date(orderData.product.createdAt).getHours() +
                        ":" +
                        new Date(orderData.product.createdAt).getMinutes()}
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

export default Order;
