import { useParams } from "react-router-dom";
import { URL_GET_ORDER_DETAILS, URL_GET_MY_ITEMS } from "../../utils/urls";
import useHttp from "../../hooks/use-http";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import styles from "./MyItem.module.css";
import { timeSince } from "../../utils/time";

const MyItem = (props) => {
  const { id } = useParams();
  const httpRequest = useHttp(); //for product details
  const httpRequest2 = useHttp(); //for buyer details
  const [myItemData, setmyItemData] = useState(null);
  const [orderDetails, setOrderDetails] = useState(null);
  useEffect(() => {
    httpRequest.post({
      url: URL_GET_MY_ITEMS + `/${id}`,
      body: JSON.parse(localStorage.getItem("user")),
    });
  }, []);
  useEffect(() => {
    // console.log(httpRequest.data);
    if (httpRequest.data) {
      if (httpRequest.data.status === "ok") {
        if (httpRequest.data.data.order) {
          httpRequest2.post({
            url: URL_GET_ORDER_DETAILS + `${httpRequest.data.data.order}`,
            body: JSON.parse(localStorage.getItem("user")),
          });
        }
        // console.log(httpRequest.data.data);
        setmyItemData(httpRequest.data.data);
      } else {
        alert(httpRequest.data.message);
      }
    }
  }, [httpRequest.data]);
  useEffect(() => {
    if (httpRequest2.data) {
      if (httpRequest2.data.status === "ok") {
        // console.log(httpRequest2.data.data);
        setOrderDetails(httpRequest2.data.data);
      }
    }
  }, [httpRequest2.data]);
  return (
    <div className={styles.main}>
      {httpRequest.loading && <Loader />}
      {myItemData && (
        <div className={styles.container}>
          <div className={styles.image}>
            <img src="/prod_coming_soon.webp" alt="product" />
            {/* <img src={productData.img} alt="product" /> */}
          </div>
          <div className={styles.details}>
            <div className={styles.row1}>
              <div className={styles.basic_info}>
                <span className={styles.product_name}>{myItemData.name}</span>
                <span className={styles.product_description}>
                  {myItemData.description}
                </span>
                <span className={styles.time_ago}>
                  Posted {timeSince(new Date(myItemData.createdAt))} ago
                </span>
              </div>
              <div className={styles.price_info}>
                <span className={styles.product_price}>
                  Rs. {myItemData.price}
                </span>
                {/* <span className={styles.purchase_date}>
                  On &nbsp;
                  {"" +
                    new Date(myItemData.createdAt).getDate() +
                    "-" +
                    new Date(myItemData.createdAt).getMonth() +
                    "-" +
                    new Date(myItemData.createdAt).getFullYear()}
                </span> */}
                {/* <span className={styles.product_price}>By You</span> */}
                <div
                  className={
                    myItemData.sold
                      ? styles["status-sold"]
                      : styles["status-unsold"]
                  }
                >
                  {myItemData.sold ? "Sold" : "Unsold"}
                </div>
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
                  <span>You</span>
                </div>
              </div>
              <div className={styles.info_group}>
                <div className={styles.info_group_left}>
                  <img src="/location.png"></img>
                </div>
                <div className={styles.info_group_right}>
                  <span>Location</span>
                  <span>{myItemData.address}</span>
                </div>
              </div>
              <div className={styles.info_group}>
                <div className={styles.info_group_left}>
                  <img src="/calendar.png"></img>
                </div>
                <div className={styles.info_group_right}>
                  <span>On</span>
                  <span>
                    {new Date(myItemData.createdAt).getDate() +
                      "-" +
                      new Date(myItemData.createdAt).getMonth() +
                      "-" +
                      new Date(myItemData.createdAt).getFullYear() +
                      " at " +
                      new Date(myItemData.createdAt).getHours() +
                      ":" +
                      new Date(myItemData.createdAt).getMinutes()}
                  </span>
                </div>
              </div>
            </div>
            {orderDetails && (
              <div className={styles.row2}>
                {/* <div className={styles.info_group}>Product</div> */}
                <div className={styles.info_group}>
                  <div className={styles.info_group_left}>
                    <img src="/account1.png"></img>
                  </div>
                  <div className={styles.info_group_right}>
                    <span>Bought By</span>
                    <span>{orderDetails.user.name}</span>
                  </div>
                </div>
                <div className={styles.info_group}>
                  <div className={styles.info_group_left}>
                    <img src="/location.png"></img>
                  </div>
                  <div className={styles.info_group_right}>
                    <span>Location</span>
                    <span>{myItemData.address}</span>
                  </div>
                </div>
                <div className={styles.info_group}>
                  <div className={styles.info_group_left}>
                    <img src="/calendar.png"></img>
                  </div>
                  <div className={styles.info_group_right}>
                    <span>On</span>
                    <span>
                      {new Date(orderDetails.createdAt).getDate() +
                        "-" +
                        new Date(orderDetails.createdAt).getMonth() +
                        "-" +
                        new Date(orderDetails.createdAt).getFullYear() +
                        " at " +
                        new Date(orderDetails.createdAt).getHours() +
                        ":" +
                        new Date(orderDetails.createdAt).getMinutes()}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MyItem;
