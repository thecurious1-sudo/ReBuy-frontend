import { useParams } from "react-router-dom";
import { URL_GET_ALL_PRODUCTS } from "../../utils/urls";
import useHttp from "../../hooks/use-http";
import { useEffect } from "react";
import Loader from "../../components/Loader/Loader";
const Product = () => {
  const { id } = useParams();
  const httpRequest = useHttp();
  useEffect(() => {
    httpRequest.post({
      url: URL_GET_ALL_PRODUCTS + `/${id}`,
      body: JSON.parse(localStorage.getItem("user")),
    });
  }, []);
  useEffect(() => {
    if (httpRequest.data) console.log(httpRequest.data);
  }, [httpRequest.data]);

  return <div>{httpRequest.loading && <Loader />}</div>;
};

export default Product;
