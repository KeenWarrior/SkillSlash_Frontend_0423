import logo from "./logo.svg";
import "./App.css";
import {
  AppBar,
  Avatar,
  BottomNavigation,
  BottomNavigationAction,
  Button,
  Snackbar,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import {
  RestoreOutlined,
  FavoriteOutlined,
  LocationOnOutlined,
} from "@mui/icons-material";

function App() {
  let [open, setOpen] = React.useState(false);
  let [value, setValue] = React.useState("Recents");

  let handleClose = (event, reason) => {
    setOpen(false);
  };

  return (
    <div className="App">
      <AppBar>
        <Toolbar>
          <Avatar className="logo" src={logo} />
          <Typography variant="body1" flexGrow={1}>
            Title of my page
          </Typography>
          <Typography>Login</Typography>
        </Toolbar>
      </AppBar>
      <div className="center">
        <Button
          className="mybutton"
          variant="contained"
          onClick={() => setOpen(true)}
        >
          Hello from MUI
        </Button>

        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message="Note archived"
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        />
      </div>

      <BottomNavigation
        className="bottom-nav"
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Recents" icon={<RestoreOutlined />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteOutlined />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnOutlined />} />
      </BottomNavigation>
    </div>
  );
}

export default App;
