import { useState } from "react";
import reactLogo from "./assets/react.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div className="card">
        <img src={reactLogo} />
        <div>
          <h5>Card title</h5>
          <p>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#">Go somewhere</a>
        </div>
      </div>
    </div>
  );
}

export default App;
