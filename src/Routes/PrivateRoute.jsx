import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../Components/Loader";
import { AuthContext } from "../Pages/Authentication/AuthProvider";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <Loader/>;
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;
