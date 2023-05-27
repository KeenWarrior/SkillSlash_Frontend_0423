import useLocalStorage from "./hooks/useLocalStorage";

export default function CustomComp() {
  const [count, setCount] = useLocalStorage("count", { value: 0 });
  return (
    <div>
      <h1>CustomComp</h1>
      <h3>{count.value}</h3>
    </div>
  );
}
