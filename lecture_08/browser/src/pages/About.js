export default function About({ setLocation }) {
  return (
    <div>
      <h1>About</h1>
      <button
        onClick={() => {
          setLocation("/home");
        }}
      >
        Home
      </button>
      <button
        onClick={() => {
          setLocation("/contact");
        }}
      >
        Contact
      </button>
    </div>
  );
}
