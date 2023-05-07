import { getAuth } from "firebase/auth";
import firebaseApp from "../util/firebase";

const userReducer = (state = "undefined", action) => {
  switch (action.type) {
    case "SET_USER":
      return action.payload;
    case "LOGOUT_USER":
        getAuth(firebaseApp).signOut();
        return null;
    default:
      return state;
  }
};

export default userReducer;
