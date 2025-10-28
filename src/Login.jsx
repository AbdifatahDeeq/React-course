import { useState } from "react";

const Login = () => {
  const [Username, setUserName] = useState("");
  const [Password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [message, setMessage] = useState("");

  const Loginhandle = () => {
    if (Username && Password) {
      setIsLoggedIn(true);
      setMessage("");
    } else {
      setMessage("Please enter the user validation ");
    }
  };

  const logout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      setIsLoggedIn(false);
      setUserName("");
      setPassword("");
    }
  };

  // Styles
  const inputStyle = {
    padding: "10px",
    margin: "5px 10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    width: "200px",
  };

  const buttonStyle = {
    padding: "10px 30px",
    margin: "2px",
    backgroundColor: "blue",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "grey",
    width: "50%",
    marginTop: "50px",
    fontFamily: "Arial, sans-serif",
    color: "white",
    margin : "auto",
  };

  return (
    <div style={containerStyle}>
      {!isLoggedIn ? (
        <>
          <label htmlFor="Username">Username</label>
          <input
            style={inputStyle}
            type="text"
            onChange={(e) => setUserName(e.target.value)}
            value={Username}
          placeholder="Enter the user name"/>

          <label htmlFor="password">Password</label>
          <input
            style={inputStyle}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={Password}
         placeholder="Enter the Pasword" />

          <button style={buttonStyle} onClick={Loginhandle}>
            Login
          </button>

          {message && (
            <p>{message}</p>
          )}
        </>
      ) : (
        <>
          <h1>Welcome, {Username}!</h1>
          <button style={buttonStyle} onClick={logout}>
            Logout
          </button>
        </>
      )}
    </div>
  );
};

export default Login;
