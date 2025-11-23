import React, { useState } from "react";

function FormData() {
  const [checked, setChecked] = useState(false);
  const [option, setOption] = useState("");

  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", userData, checked, option);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleChecked = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Fill the user information</h1>

        <h3>User Name:</h3>
        <input
          type="text"
          name="username"
          value={userData.username}
          onChange={handleChange}
        />

        <h3>Email:</h3>
        <input
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />

        <h3>Password:</h3>
        <input
          type="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
        />

        <h3>Check Agreed:</h3>
        <input type="checkbox" checked={checked} onChange={handleChecked} />

        {!checked && <p style={{ color: "red" }}>Please select agreed</p>}

        <h3>Select the appropriate option</h3>
        <select
          name="option"
          value={option}
          onChange={(e) => setOption(e.target.value)}
        >
          <option value="">Choose Option</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
        </select>

        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormData;
