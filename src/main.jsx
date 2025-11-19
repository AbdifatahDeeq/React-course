import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // <-- important!
import Student from "./Student";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Student />
  </React.StrictMode>
);
