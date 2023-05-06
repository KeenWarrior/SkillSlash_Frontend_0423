import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { useContext } from "react";
import { UserContext } from "./App";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import firebaseApp from "./util/firebase";

export default function MainAppBar() {
  const { user } = useContext(UserContext);

  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography flexGrow={1} variant="h6">Zomato</Typography>
        {!user && (
          <Button
            onClick={() => {
              navigate("/login");
            }}
            variant="contained"
          >
            Login
          </Button>
        )}

        {user && (
          <>
            <Typography variant="body1">{"Hello " + user.displayName}</Typography>
            <Button  variant="contained"
              onClick={() => {
                getAuth(firebaseApp).signOut();
              }}
            >
              Logout
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}
