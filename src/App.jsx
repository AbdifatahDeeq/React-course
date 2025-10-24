import { useEffect, useState } from "react";

const App = () => {
  const [input, setInput] = useState("");
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer;

    // ✅ Run timer only when "running" is true AND time > 0
    if (running && time > 0) {
      timer = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    }
    // ✅ Stop automatically when time hits 0
    else if (time === 0) {
      setRunning(false);
    }

    // ✅ Cleanup to avoid multiple timers
    return () => clearInterval(timer);
  }, [running, time]);

  const handleStart = () => {
    if (input && !running) {
      setTime(Number(input));
      setRunning(true);
    }
  };

  const handleStop = () => {
    setRunning(false);
  };

  const handleReset = () => {
    setRunning(false);
    setTime(0);
    setInput("");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <input
        onChange={(e) => setInput(e.target.value)}
        value={input}
        type="number"
        placeholder="Enter seconds"
      />
      {/* ✅ Show actual countdown value, not input */}
      <p>Time left: {time} seconds</p>

      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default App;
