import React from "react";
import GoogleOneTapLogin from "react-google-one-tap-login";
import { TokenContext, UserContext } from "../App";
import axios from "../utils/axios";

export default function HomePage() {
  const { user } = React.useContext(UserContext);
  const { token, updateToken } = React.useContext(TokenContext);

  return (
    <div>
      {user ? (
        <div>
          <p>{JSON.stringify(user)}</p>
          <h3>Hello {user.name}</h3>
          <img src={user.picture} />
          <h5>{token}</h5>
          <button
            onClick={() => {
              updateToken(null);
              delete axios.defaults.headers["Authorization"];
            }}
          >
            Logout
          </button>
        </div>
      ) : (
        <GoogleOneTapLogin
          onError={(error) => console.log(error)}
          //   onSuccess={(response) => {
          //     setUser(response);
          //   }}
          googleAccountConfigs={{
            client_id:
              "239322560056-kpb3anas3hkqbr3g66itljkq23912vat.apps.googleusercontent.com",
            callback: (response) => {
              axios.defaults.headers["Authorization"] =
                "Bearer " + response.credential;
              axios.get("/verify").then((res) => {
                updateToken(response.credential);
                console.log(axios.defaults.headers["Authorization"]);
              });
            },
          }}
        />
      )}
    </div>
  );
}
