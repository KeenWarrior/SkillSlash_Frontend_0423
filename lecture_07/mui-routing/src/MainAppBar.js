import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { MenuOpen } from "@mui/icons-material";

function MainAppBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuOpen />
        </IconButton>
        <Typography variant="h6" flexGrow={1}>
          News
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
}

export default MainAppBar;