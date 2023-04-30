export default function Contact({setLocation}) {
  return (
    <div>
      <h1>Contact</h1>
      <button
        onClick={() => {
          setLocation("/about");
        }}
      >
        About
      </button>
      <button
        onClick={() => {
          setLocation("/home");
        }}
      >
        Home
      </button>
    </div>
  );
}
