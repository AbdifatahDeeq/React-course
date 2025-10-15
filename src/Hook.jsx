import { useState } from "react";

  
const Hook = () => {
  const [count, setCount]= useState(0)
  const increment = () => {
   setCount(count+1);

  } 

  return (
    <div>
      <p>clicked {count} times</p>
      <button onClick={increment}>click</button>
    </div>
  );
  
}
export default Hook;