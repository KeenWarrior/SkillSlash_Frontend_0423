import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../BaseRoutes";

export default function AuthGaurd({ children }) {
  const { user } = useContext(UserContext);

  if (user) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}
