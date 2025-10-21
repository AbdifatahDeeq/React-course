import { useEffect, useState } from "react";

const App = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  
  useEffect(() => {
    const MouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
      
    }
    window.addEventListener("mousemove", MouseMove);
    return () => {
      window.removeEventListener("mousemove", MouseMove)
    }
  })




  return (
    <>
      <p>Mouse X position :{position.x}</p>
      <p>Mouse Y position :{position.y}</p>
    </>
  );
}
export default App;