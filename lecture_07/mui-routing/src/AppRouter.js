import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RecentsPage from "./pages/RecentsPage";
import FavoritesPage from "./pages/FavoritesPage";
import NearbyPage from "./pages/NearbyPage";

const router = createBrowserRouter([
  {
    path: "/recents",
    element: <RecentsPage />,
  },
  {
    path: "/favorites",
    element: <FavoritesPage />,
  },
  {
    path: "/nearby",
    element: <NearbyPage />,
  },
]);

function AppRouter() {
  return <RouterProvider router={router} />;
}

export default AppRouter;
