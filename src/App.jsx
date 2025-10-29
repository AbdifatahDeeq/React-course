import { useState } from "react";


const App = () => {
  const [Increase, setIncrease] = useState(0)
  
  const disc = Increase <= 1;
  


  return (
    <>
      <h1> Counter:{Increase}</h1>
      <button disabled={disc} onClick={() => setIncrease(Increase - 1)}>
        Decrease{" "}
      </button>
      <button onClick={() => setIncrease(Increase + 1)}>Increase </button>
    </>
  );
  
}
export default App;