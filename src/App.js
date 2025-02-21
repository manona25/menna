import { useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState(0);
  const [inputValue, setInputValue] = useState(0);
  
  
  const handleInputChange = (e) => {
    setInputValue(Number(e.target.value) || 0);
  };
  
  const add = () => {
    setResult(result + inputValue);
  };
  
  
  const subtract = () => {
    setResult(result - inputValue);
  };

  return (
    <div className="App">
      <input
        type="number"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter number"
      />
      <button onClick={add}> + </button>
      <button onClick={subtract}> - </button>
      <div className="result">Result: {result}</div>
    </div>
  );
}

export default App;
