import React, { useState, useEffect } from "react";

export default function Trafficlight() {
  const [light, setLight] = useState("red");

  useEffect(() => {
    const cycle = {
      red: "green",
      green: "yellow",
      yellow: "red",
    };

    const timer = setInterval(() => {
      setLight((prev) => cycle[prev]);
    }, 5000); // change every 1 second

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "80px" }}>
      <div
        style={{
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          background: light === "red" ? "red" : "#300",
          margin: "5px",
        }}
      />
      <div
        style={{
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          background: light === "yellow" ? "yellow" : "#332200",
          margin: "5px",
        }}
      />
      <div
        style={{
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          background: light === "green" ? "green" : "#003300",
          margin: "5px",
        }}
      />
    </div>
  );
}
