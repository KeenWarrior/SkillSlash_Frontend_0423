import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
export default function MainAppBar() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography flexGrow={1} variant="h6">
          Zomato
        </Typography>
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
            <Typography variant="body1">
              {"Hello " + user.displayName}
            </Typography>
            <Button
              variant="contained"
              onClick={() => {
                dispatch({ type: "LOGOUT_USER" });
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
