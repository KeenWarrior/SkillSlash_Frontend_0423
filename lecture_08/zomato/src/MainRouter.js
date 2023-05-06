import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainBottomNavigation from "./MainBottomNavigation";
import OrderPage from "./pages/OrderPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <OrderPage/>
    ),
  },
  {
    path: "/goout",
    element: (
      <div>
        Go out
        <MainBottomNavigation />
      </div>
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
    path: "/profile",
    element: (
      <div>
        Profile
        <MainBottomNavigation />
      </div>
    ),
  },
]);

export default function MainRouter() {
  return  <RouterProvider router={router} />;
}
