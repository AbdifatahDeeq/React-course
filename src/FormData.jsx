import React, { useState } from "react";

function UserForm() {
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

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white shadow-xl rounded-xl p-6 space-y-6"
      >
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Fill the User Information
        </h1>

        {/* Username */}
        <div>
          <label className="block font-medium text-gray-700 mb-1">
            User Name
          </label>
          <input
            type="text"
            name="username"
            value={userData.username}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Checkbox */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
            className="h-4 w-4 text-blue-500"
          />
          <label className="text-gray-700 font-medium">Agree to terms</label>
        </div>

        {!checked && (
          <p className="text-red-500 text-sm">Please select agreed</p>
        )}

        {/* Select Option */}
        <div>
          <label className="block font-medium text-gray-700 mb-1">
            Select an Option
          </label>
          <select
            name="option"
            value={option}
            onChange={(e) => setOption(e.target.value)}
            className="w-full p-2 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Choose Option</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-medium"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default UserForm;
