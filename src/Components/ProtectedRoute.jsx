import { useLocation, Navigate } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ element }) => {
  const location = useLocation();

  return JSON.parse(localStorage.getItem("signedUser")) ? (
    element
  ) : (
    <Navigate to="/unAuthorized" state={{ from: location }} replace />
  );
};

export default ProtectedRoute;
