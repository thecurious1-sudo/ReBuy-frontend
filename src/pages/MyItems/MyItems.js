import { useEffect } from "react";
import useHttp from "../../hooks/use-http";
import { URL_GET_MY_ITEMS } from "../../utils/urls";
import { useState } from "react";
import MyItem from "../../components/MyItem/MyItem";
import styles from "./MyItems.module.css";
import Loader from "../../components/Loader/Loader";

const MyItems = () => {
  const httpRequest = useHttp();
  const [myItems, setmyItems] = useState([]);
  useEffect(() => {
    httpRequest.post({
      url: URL_GET_MY_ITEMS,
      body: JSON.parse(localStorage.getItem("user")),
    });
  }, []);
  useEffect(() => {
    if (httpRequest.data) {
      // console.log(httpRequest.data);
      if (httpRequest.data.status === "ok") {
        setmyItems(httpRequest.data.data);
      } else {
        alert(httpRequest.data.message);
      }
    }
  }, [httpRequest.data]);
  return (
    <div className={styles.main}>
      <div className={styles.heading}>
        <h1>Your Items</h1>
      </div>
      {httpRequest.loading && <Loader />}
      {myItems.length === 0 && (
        <h1>
          You haven't posted any items yet! Use the Sell button to post an item.
        </h1>
      )}
      {myItems.map((myItem) => {
        return (
          <MyItem
            key={myItem._id}
            id={myItem._id}
            name={myItem.name}
            price={myItem.price}
            description={myItem.description}
            image={myItem.img}
            user={myItem.user}
            myItem_id={myItem._id}
            createdAt={myItem.createdAt}
          />
        );
      })}
    </div>
  );
};

export default MyItems;
