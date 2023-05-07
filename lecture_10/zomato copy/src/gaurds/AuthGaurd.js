import { Navigate } from "react-router-dom";
import LoadingPage from "../pages/LoadingPage";
import { useSelector } from "react-redux";

export default function AuthGaurd({ children }) {
  const user = useSelector((state) => state.user);

  if (user == "undefined") {
    return <LoadingPage />;
  } else if (user == null) {
    return <Navigate to={"/login"} />;
  } else {
    return children;
  }
}
