import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { LoginContext } from "../../context/LoginContext";

const PrivateRouter = () => {
  const { login } = useContext(LoginContext);

  return <>{login ? <Outlet /> : <Navigate to="/login" />}</>;
};

export default PrivateRouter;
