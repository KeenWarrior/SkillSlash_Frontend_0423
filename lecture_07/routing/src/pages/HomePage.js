import { Link, useNavigate } from "react-router-dom";

function HomePage() {
  let navigate = useNavigate();

  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/about/">About</Link>
      <button
        onClick={() => {
          setTimeout(() => {
            navigate("/about/");
          }, 2000);
        }}
      >
        About
      </button>
    </div>
  );
}

export default HomePage;
