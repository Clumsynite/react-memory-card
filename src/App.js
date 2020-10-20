import React, {useState} from "react";
import Navbar from "./Components/Navbar";
import Cards from "./Components/Cards";

function App() {
  const [score, setScore] = useState(0)
  const [best, setBest] = useState(0)

  const increaseScore = () => {
    setScore(score + 1)
  }
  const resetScore = () => {
    setBest(score)
    setScore(0)
  }

  return (
    <div className="App">
      <Navbar score={score} best={best}/>
      <div className="container mt-3">
        <Cards increaseScore={increaseScore} resetScore={resetScore}/>
      </div>
    </div>
  );
}

export default App;
