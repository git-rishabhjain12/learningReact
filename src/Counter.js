import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    if (count < 10) setCount(count + 1);
  }

  function decrement() {
    if (count > 0) setCount(count - 1);
  }

  const styles = {
    backgroundColor: "#faa346",
    color: "#fff",
    borderRadius: "0.5rem",
  };

  return (
    <>
      <button onClick={increment} style={styles}>
        Increment
      </button>
      <p>{count}</p>
      <button onClick={decrement} style={styles}>
        Decrement
      </button>
    </>
  );
}
