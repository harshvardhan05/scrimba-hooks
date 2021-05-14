import React, {useState} from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  function decrement(){
    setCount(prevCount => prevCount - 1)
  }
  function double(){
    setCount(prevCount => (prevCount === 0 ? 1 : prevCount ) * 2)
  }
  function half(){
    setCount(prevCount => (prevCount) / 2)
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>setCount(prevCount => prevCount + 1)}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={double}>Double</button>
      <button onClick={half}>Half</button>

    </div>
  );
}

export default App;
