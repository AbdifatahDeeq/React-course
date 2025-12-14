import React, { useState } from "react";

export default function UserForm() {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    experience: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  console.log(formData);

  return (
    <div>
      <h2>User Form</h2>

      <h3>User Name</h3>
      <input
        type="text"
        name="userName"
        value={formData.userName}
        onChange={handleChange}
      />

      <h3>Email</h3>
      <input
        type="text"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />

      <h3>Years of Experience</h3>
      <input
        type="text"
        name="experience"
        value={formData.experience}
        onChange={handleChange}
      />

      <button type="submit">Submit</button>
    </div>
  );
}
