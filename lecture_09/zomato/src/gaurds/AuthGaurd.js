import { useContext } from "react";
import { UserContext } from "../App";
import { Navigate } from "react-router-dom";
import LoadingPage from "../pages/LoadingPage";

export default function AuthGaurd({ children }) {
  let { user } = useContext(UserContext);

  if (!user) {
    return <Navigate to={"/login"} />;
  } else {
    return children;
  }
}
