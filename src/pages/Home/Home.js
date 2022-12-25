import { useEffect } from "react";
import useCheckAuthLocal from "../../hooks/check-local-auth";

const Home = () => {
  const checkAuthLocal = useCheckAuthLocal();
  useEffect(() => {
    checkAuthLocal.checkAuth({ redirectToLogin: true });
  }, []);
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
