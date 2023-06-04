import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import React from "react";
import HomePage from "./pages/HomePage";
import AuthGaurd from "./gaurds/AuthGaurd";

const UserContext = React.createContext(null);

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: (
      <AuthGaurd>
        <HomePage />
      </AuthGaurd>
    ),
  },
]);

function BaseRoutes() {
  const [user, setUser] = React.useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <RouterProvider router={router} />
    </UserContext.Provider>
  );
}

export { BaseRoutes, UserContext };
