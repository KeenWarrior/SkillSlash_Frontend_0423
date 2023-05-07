import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function UserGaurd({ children }) {
  const user = useSelector((state) => state.user);

  return user ? <Navigate to={"/"} /> : children;
}
