import React from "react";
import GoogleOneTapLogin from "react-google-one-tap-login";
import { UserContext } from "../App";

export default function HomePage() {
  const { user, setUser } = React.useContext(UserContext);

  return (
    <div>
      {user ? (
        <div>
          <h3>Hello {user.name}</h3>
          <button onClick={() => setUser(null)}>Logout</button>
        </div>
      ) : (
        <GoogleOneTapLogin
          onError={(error) => console.log(error)}
          onSuccess={(response) => {
            setUser(response);
          }}
          googleAccountConfigs={{
            client_id:
              "239322560056-kpb3anas3hkqbr3g66itljkq23912vat.apps.googleusercontent.com",
          }}
        />
      )}
    </div>
  );
}
