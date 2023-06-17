import { useContext } from "react";
import { UserContext } from "../BaseRoutes";
import Messages from "../components/Messages";
import { AppBar, Toolbar } from "@mui/material";

export default function HomePage() {
  const { user } = useContext(UserContext);

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      width: "100vw",
      height: "100vh"
    }}>

      
      <Messages />
    </div>
  );
}
