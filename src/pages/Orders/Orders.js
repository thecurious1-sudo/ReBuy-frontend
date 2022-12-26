import { useEffect } from "react";
import useHttp from "../../hooks/use-http";
import { URL_GET_ALL_ORDERS_BY_USER } from "../../utils/urls";
import { useState } from "react";
import Order from "../../components/Order/Order";
import styles from "./Orders.module.css";
import Loader from "../../components/Loader/Loader";

const Orders = () => {
  const httpRequest = useHttp();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    httpRequest.post({
      url: URL_GET_ALL_ORDERS_BY_USER,
      body: JSON.parse(localStorage.getItem("user")),
    });
  }, []);
  useEffect(() => {
    if (httpRequest.data) {
      console.log(httpRequest.data);
      if (httpRequest.data.status === "ok") {
        setOrders(httpRequest.data.data);
      } else {
        alert(httpRequest.data.message);
      }
    }
  }, [httpRequest.data]);

  return (
    <div className={styles.main}>
      {httpRequest.loading && <Loader />}
      {orders.length === 0 && <h1>No orders yet</h1>}
      {orders.map((order) => {
        const product = order.product;
        return (
          <Order
            key={order._id}
            id={order._id}
            name={product.name}
            price={product.price}
            description={product.description}
            image={product.img}
            user={product.user}
            product_id={product._id}
          />
        );
      })}
    </div>
  );
};

export default Orders;
