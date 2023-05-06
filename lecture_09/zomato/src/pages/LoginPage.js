import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import firebaseApp from "../util/firebase";

const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: "/",
  // We will display Google and Facebook as auth providers.
  signInOptions: [GoogleAuthProvider.PROVIDER_ID],
};

function LoginPage() {
  return (
    <div>
      <h1>My App</h1>
      <p>Please sign-in:</p>
      <StyledFirebaseAuth
        uiConfig={uiConfig}
        firebaseAuth={getAuth(firebaseApp)}
      />
    </div>
  );
}

export default LoginPage;
