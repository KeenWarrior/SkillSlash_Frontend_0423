import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { useContext, useState } from "react";
import axios from "../utils/axios";
import { UserContext } from "../BaseRoutes";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);

  const navigate = useNavigate();

  return (
    <div>
      <h1>Login Page</h1>
      <TextField
        label="Username"
        value={username}
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <TextField
        label="Password"
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          axios
            .post("users/verify", {
              username: username,
              password: password,
            })
            .then((response) => {
              if (response.status === 200) {
                setUser(response.data);
                const encoded = btoa(`${username}:${password}`);
                axios.defaults.headers.common[
                  "Authorization"
                ] = `Basic ${encoded}`;

                navigate("/");



                // axios.get("users/me").then((response) => {
                //   if (response.status === 200) {
                //     console.log("Auth Set Properly", response.data);
                //   }
                // });
              }
            });
        }}
      >
        Login
      </Button>
    </div>
  );
}
