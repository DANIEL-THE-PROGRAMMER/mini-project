import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  const authString = localStorage.getItem("auth");
  const auth = authString ? JSON.parse(authString) : { authenticated: false };

  

  return auth.authenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
