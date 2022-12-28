const REACT_APP_BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

// module.exports.URL_SIGNUP = "http://localhost:4000/user/signup";
// module.exports.URL_LOGIN = "http://localhost:4000/user/login";
// module.exports.URL_GET_ALL_PRODUCTS = "http://localhost:4000/products";
// module.exports.URL_CREATE_PRODUCT = "http://localhost:4000/products/new";
// module.exports.URL_CREATE_ORDER = "http://localhost:4000/orders/new";
// module.exports.URL_GET_ALL_ORDERS_BY_USER = "http://localhost:4000/orders";
// module.exports.URL_GET_ORDER_DETAILS = "http://localhost:4000/orders/";
// module.exports.URL_GET_MY_ITEMS = "http://localhost:4000/myitems";

module.exports.URL_SIGNUP = REACT_APP_BACKEND_URL + "/user/signup";
module.exports.URL_LOGIN = REACT_APP_BACKEND_URL + "/user/login";
module.exports.URL_GET_ALL_PRODUCTS = REACT_APP_BACKEND_URL + "/products";
module.exports.URL_CREATE_PRODUCT = REACT_APP_BACKEND_URL + "/products/new";
module.exports.URL_CREATE_ORDER = REACT_APP_BACKEND_URL + "/orders/new";
module.exports.URL_GET_ALL_ORDERS_BY_USER = REACT_APP_BACKEND_URL + "/orders";
module.exports.URL_GET_ORDER_DETAILS = REACT_APP_BACKEND_URL + "/orders/";
module.exports.URL_GET_MY_ITEMS = REACT_APP_BACKEND_URL + "/myitems";
