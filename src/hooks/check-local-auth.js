import { useNavigate } from "react-router-dom";

const useCheckAuthLoacal = () => {
  const navigate = useNavigate();
  const checkAuth = (config) => {
    const userStringObj = localStorage.getItem("user");
    const user = JSON.parse(userStringObj);
    if (!user) {
      if (config && config.redirectToLogin)
        navigate("/login", { replace: true });
      return;
    }
    if (config && config.redirectToHome) {
      navigate("/home", { replace: true });
      return;
    }
  };
  return { checkAuth };
};
export default useCheckAuthLoacal;
