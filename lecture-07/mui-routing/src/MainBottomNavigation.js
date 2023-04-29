import {
  FavoriteOutlined,
  LocationOnOutlined,
  RestoreOutlined,
} from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function MainBottomNavigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const [value, setValue] = React.useState(location.pathname);

  return (
    <BottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => {
        navigate(newValue);
        setValue(newValue);
      }}
    >
      <BottomNavigationAction
        value={"/recents"}
        label="Recents"
        icon={<RestoreOutlined />}
      />
      <BottomNavigationAction
        value={"/favorites"}
        label="Favorites"
        icon={<FavoriteOutlined />}
      />
      <BottomNavigationAction
        value={"/nearby"}
        label="Nearby"
        icon={<LocationOnOutlined />}
      />
    </BottomNavigation>
  );
}

export default MainBottomNavigation;
