export default function Home({ setLocation }) {
    console.log(setLocation);
  return (
    <div>
      <h1>Home</h1>
      <button
        onClick={() => {
          setLocation("/about");
        }}
      >
        About
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
