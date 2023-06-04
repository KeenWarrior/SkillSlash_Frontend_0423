import { useContext } from "react";
import { UserContext } from "../BaseRoutes";
import Messages from "../components/Messages";

export default function HomePage() {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h1> Home Page</h1>
      <h3>{user.name}</h3>
      <img
        src={user.avatar_url}
        alt="avatar"
        style={{
          width: "50px",
          height: "50px",
        }}
      />
      <Messages />
    </div>
  );
}
