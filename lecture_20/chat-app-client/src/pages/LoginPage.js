import React, { useContext } from "react";
import ReactDOM from "react-dom";
import GoogleOneTapLogin from "react-google-one-tap-login";
import { UserContext } from "../BaseRoutes";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import axios from "../utils/axios";

export default function LoginPage() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  return (
    <GoogleOneTapLogin
      googleAccountConfigs={{
        client_id:
          "239322560056-kpb3anas3hkqbr3g66itljkq23912vat.apps.googleusercontent.com",
        callback: (response) => {
          const token = response.credential;
          axios.defaults.headers["Authorization"] = `Bearer ${token}`;
          console.log(token);
          axios.get("users/me").then((response) => {
            if (response.status === 200) {
              console.log(response.data);
              setUser(response.data);
            }
          });
        },
      }}
    />
  );
}
