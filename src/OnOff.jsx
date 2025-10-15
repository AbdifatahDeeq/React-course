
import {useState} from "react"
function OnOff() {
  const [on, setON] = useState("false");
  const toggle = () => {
    setON(!on);
  };
  return (
    <button
      onClick={toggle}
      style={{
        backgroundColor: on ? "green" : "red",
        color: "white",
        padding: "10px 40px",
        border: "none",
        borderRadius: "8px",
        fontSize: "16px",
        cursor: "pointer",
      }}
    >
      {on ? "ON" : "OFF"}
    </button>
  );
}

export default OnOff;
