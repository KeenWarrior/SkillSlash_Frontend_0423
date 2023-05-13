import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function CartEmptyGaurd({ children }) {
  const cart = useSelector((state) => state.cart);

  if (cart.cartItems.size == 0) {
    return <Navigate to={"/hotel"} />;
  } else {
    return children;
  }
}
