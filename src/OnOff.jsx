
import {useState} from "react"
function OnOff() {
  const [on, setON] = useState("false");
  const toggle = () => {
    setON(!on);
    
  };
  const styles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
       height : "100vh",
        backgroundColor: on ? "white" : "black",
        color: on? "black": "white",
        padding: "10px 40px",
        border: "none",
        borderRadius: "8px",
        fontSize: "16px",
        cursor: "pointer",
      }
  return (
    <div style={styles}>
      <h3> The model is: {on ?  "white" : "black"}</h3>
      <div></div>
      <button onClick={toggle}>{on ? "ON" : "OFF"}</button>
    </div>
  );
}

export default OnOff;
