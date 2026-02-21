import { useState } from "react";
import "./styles.css";
  const [count, setCount] = useState(0);
 function Homework_07() {
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
export default Homework_07;