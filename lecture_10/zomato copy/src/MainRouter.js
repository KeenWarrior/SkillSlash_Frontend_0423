import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainBottomNavigation from "./MainBottomNavigation";
import OrderPage from "./pages/OrderPage";
import LoginPage from "./pages/LoginPage";
import UserGaurd from "./gaurds/UserGaurd";
import AuthGaurd from "./gaurds/AuthGaurd";
import HotelPage from "./pages/HotelPage";
import CheckoutPage from "./pages/CheckoutPage";
import CartEmptyGaurd from "./gaurds/CartEmptyGaurd";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthGaurd>
        <OrderPage />
      </AuthGaurd>
    ),
  },
  {
    path: "/goout",
    element: (
      <AuthGaurd>
        <div>
          Go out
          <MainBottomNavigation />
        </div>
      </AuthGaurd>
    ),
  },
  {
    path: "/gold",
    element: (
      <div>
        Gold
        <MainBottomNavigation />
      </div>
    ),
  },
  {
    path: "/search",
    element: (
      <div>
        Search
        <MainBottomNavigation />
      </div>
    ),
  },
  {
    path: "/hotel/:id",
    element: <HotelPage />,
  },
  {
    path: "/checkout",
    element: (
      <CartEmptyGaurd>
        <CheckoutPage />
      </CartEmptyGaurd>
    ),
  },
  {
    path: "/profile",
    element: (
      <div>
        Profile
        <MainBottomNavigation />
      </div>
    ),
  },

  {
    path: "/login",
    element: (
      <UserGaurd>
        <LoginPage />
      </UserGaurd>
    ),
  },
]);

export default function MainRouter() {
  return <RouterProvider router={router} />;
}
