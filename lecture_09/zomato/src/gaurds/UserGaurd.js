import { useContext } from "react";
import { UserContext } from "../App";
import { Navigate } from "react-router-dom";

export default function UserGaurd({ children }) {
  let { user } = useContext(UserContext);

  return user ? <Navigate to={"/"} /> : children;
}
