import axios from "axios";
import React from "react";

function GitHub() {
  let [username, setUsername] = React.useState("");
  let [user, setUser] = React.useState(null);

  const fetchProfile = async () => {
    let url = `https://api.github.com/users/${username}`;
    try {
      let response = await axios.get(url);
      if (response.status === 200) {
        console.log(response.data);
        setUser(response.data);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.log(error);
      setUser(null);
    }
  };

  return (
    <div>
      <h1>GitHub Profile fetcher</h1>
      <input
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        type="text"
        placeholder="GitHub username"
      />
      <h3>{username}</h3>
      <button onClick={fetchProfile}>Fetch Profile</button>
      <hr />
      {user && (
        <div>
          <img width={"200px"} src={user.avatar_url} alt="avatar" />
          <h3>{user.name}</h3>
          <h3>{user.location}</h3>
          <h3>{user.bio}</h3>
          <h3>{user.company}</h3>
        </div>
      )}
    </div>
  );
}

export default GitHub;
