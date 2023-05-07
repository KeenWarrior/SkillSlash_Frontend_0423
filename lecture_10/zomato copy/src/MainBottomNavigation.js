import { FavoriteOutlined } from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function MainBottomNavigation() {
  const location = useLocation();
  const navigate = useNavigate();
  const [value, setValue]  = useState(location.pathname);

  return (
    <BottomNavigation
        style={{
            width: "100vw",
        }}
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
        navigate(newValue);
      }}
    >
      <BottomNavigationAction
        value={"/"}
        label="Order"
        icon={<FavoriteOutlined />}
      />
      <BottomNavigationAction
        value={"/goout"}
        label="Go Out"
        icon={<FavoriteOutlined />}
      />
      <BottomNavigationAction
        value={"/gold"}
        label="Gold"
        icon={<FavoriteOutlined />}
      />
      <BottomNavigationAction
        value={"/search"}
        label="Search"
        icon={<FavoriteOutlined />}
      />
      <BottomNavigationAction
        value={"/profile"}
        label="Profile"
        icon={<FavoriteOutlined />}
      />
    </BottomNavigation>
  );
}
