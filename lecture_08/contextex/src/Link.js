import { useContext } from "react";
import { LocationContext } from "./App";

export default function Link({ to, children }) {
  const { setLocation } = useContext(LocationContext);
  return (
    <button
      onClick={() => {
        setLocation(to);
      }}
    >
      {children}
    </button>
  );
}
