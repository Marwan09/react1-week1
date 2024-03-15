import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./Cpmponents/Todo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>To Do List</h1>
        <div className="main">
          <ul>
            <li>
              <Todo title="Get out of bed" time="Wed Sep 13 2023" />
            </li>
            <li>
              <Todo title="Brush teeth" time="Thur Sep 13 2024" />
            </li>
            <li>
              <Todo title="Eat breakfast" time="Fri Sep 13 2024" />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
