import styles from "./Sell.module.css";
import { Link } from "react-router-dom";
import useInputField from "../../hooks/input-field";
import { URL_CREATE_PRODUCT } from "../../utils/urls";
import { useNavigate } from "react-router-dom";
import useHttp from "../../hooks/use-http";
import Loader from "../../components/Loader/Loader";
import { useEffect } from "react";
const Sell = () => {
  const httpRequest = useHttp();
  const navigate = useNavigate();
  const name = useInputField("");
  const address = useInputField("");
  const description = useInputField("");
  const price = useInputField("");
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (
      name.value === "" ||
      description.value === "" ||
      price.value === 0 ||
      price.value === "" ||
      address.value === ""
    ) {
      alert("Please fill all the fields");
      return;
    }
    const getUserData = JSON.parse(localStorage.getItem("user"));
    httpRequest.post({
      url: URL_CREATE_PRODUCT,
      body: {
        name: name.value,
        description: description.value,
        price: price.value,
        address: address.value,
        id: getUserData.id,
        token: getUserData.token,
      },
    });
  };

  useEffect(() => {
    if (httpRequest.data) {
      // console.log(httpRequest.data);
      if (httpRequest.data.status === "ok") {
        alert("Product created successfully");
        name.setValue("");
        description.setValue("");
        price.setValue(null);
        address.setValue("");
        navigate(`/home/myItems/${httpRequest.data.data._id}`, {
          replace: true,
        });
      } else {
        alert(httpRequest.data.message);
      }
    }
  }, [httpRequest.data]);

  return (
    <>
      {httpRequest.loading && <Loader />}
      <div className={styles.container}>
        <form onSubmit={formSubmitHandler} className={styles.login_form}>
          <div className={styles.form_inputs}>
            <div className={styles.form_group}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter product's name"
                onChange={name.onChange}
                value={name.value}
              />
            </div>
            <div className={styles.form_group}>
              <label htmlFor="description">Description</label>
              <textarea
                type="text"
                id="description"
                placeholder="Enter product's description"
                onChange={description.onChange}
                value={description.value}
              />
            </div>
            <div className={styles.form_group}>
              <label htmlFor="price">Price</label>
              <input
                type="number"
                id="price"
                placeholder="Enter product's price"
                onChange={price.onChange}
                value={price.value}
              />
            </div>
            <div className={styles.form_group}>
              <label htmlFor="Address">Address</label>
              <input
                type="text"
                id="Address"
                placeholder="Enter Address"
                onChange={address.onChange}
                value={address.value}
              />
            </div>
          </div>
          <div className={styles.form_button}>
            <button className={styles.submit}>Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Sell;
