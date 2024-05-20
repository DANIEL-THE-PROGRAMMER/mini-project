import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "../store/reducer/authSlice";

const PrivateRoutes = () => {
    const isAuthenticated = useSelector(selectIsAuthenticated);
  
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
