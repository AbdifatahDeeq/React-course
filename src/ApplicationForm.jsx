import React, { useState } from "react";

export default function ApplicationForm() {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    role: "",
    yrsExperience: "",
    skills: [],
    termsAgreement: false,
    notification: false,
  });

  // ⭐ ONE FUNCTION TO HANDLE EVERYTHING
  const handleInput = (e) => {
    const { name, value, type, checked } = e.target;

    // Handle multiple skills (checkbox group)
    if (name === "skills") {
      setInput((prev) => {
        if (checked) {
          return { ...prev, skills: [...prev.skills, value] };
        } else {
          return {
            ...prev,
            skills: prev.skills.filter((skill) => skill !== value),
          };
        }
      });
      return;
    }

    // Handle normal inputs (text, number, select, single checkbox)
    setInput((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form Submitted:", input);
  };

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Developer Application Form</h1>

        {/* FULL NAME */}
        <label className="font-semibold">Full Name</label>
        <input
          type="text"
          name="fullname"
          className="border p-2 w-full rounded mt-1"
          onChange={handleInput}
          value={input.fullname}
        />

        {/* EMAIL */}
        <label className="font-semibold mt-4 block">Email</label>
        <input
          type="email"
          name="email"
          className="border p-2 w-full rounded mt-1"
          onChange={handleInput}
          value={input.email}
        />

        {/* ROLE */}
        <label className="font-semibold mt-4 block">Role</label>
        <select
          name="role"
          className="border p-2 w-full rounded"
          onChange={handleInput}
          value={input.role}
        >
          <option value="">Select your role</option>
          <option value="Frontend Developer">Frontend Developer</option>
          <option value="Backend Developer">Backend Developer</option>
          <option value="Fullstack Developer">Fullstack Developer</option>
          <option value="UI/UX">UI/UX Designer</option>
          <option value="Product Manager">Product Manager</option>
        </select>

        {/* YEARS OF EXPERIENCE */}
        <label className="font-semibold mt-4 block">Years of Experience</label>
        <input
          type="number"
          name="yrsExperience"
          className="border p-2 w-full rounded"
          onChange={handleInput}
          value={
            input.yrsExperience === "" || input.yrsExperience <= 0 ? (
              <p className="text-red-500 text-sm mt-1">
                The year of experience should be more than 0
              </p>
            ) : (
              input.yrsExperience
            )
          }
        />

        {/* SKILLS */}
        <label className="font-semibold mt-4 block">Skills</label>
        <div className="grid grid-cols-2 gap-2 mt-2">
          {[
            "React",
            "JavaScript",
            "TypeScript",
            "Node.js",
            "Python",
            "Java",
            "UI Design",
            "API Development",
          ].map((skill) => (
            <label key={skill} className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="skills"
                value={skill}
                onChange={handleInput}
                checked={input.skills.includes(skill)}
              />
              <span>{skill}</span>
            </label>
          ))}
        </div>

        {/* TERMS AGREEMENT */}
        <label className="flex items-center mt-4 space-x-2">
          <input
            type="checkbox"
            name="termsAgreement"
            onChange={handleInput}
            checked={input.termsAgreement}
          />
          <span>I agree to the terms & conditions</span>
        </label>

        {/* NOTIFICATION */}
        <label className="flex items-center mt-2 space-x-2">
          <input
            type="checkbox"
            name="notification"
            onChange={handleInput}
            checked={input.notification}
          />
          <span>Receive notifications about upcoming opportunities</span>
        </label>

        {/* SUBMIT BUTTON */}
        <button
          className="bg-blue-600 hover:bg-blue-500 w-full text-white py-3 mt-5 rounded-xl font-semibold"
          onClick={handleSubmit}
        >
          Submit Application
        </button>
      </div>
    </div>
  );
}
