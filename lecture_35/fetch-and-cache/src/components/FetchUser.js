export default function FetchUser({ user }) {
  if (user) {
    return (
      <div>
        <h1>{user.name}</h1>
        <img src={user.avatar_url} width={100} />
      </div>
    );
  } else {
    return <div>No user</div>;
  }
}
