import React from "react";
import { useForm } from "react-hook-form";

export default function StudentRegis() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const submit = (data) => {
    alert(JSON.stringify(data, null, 2));
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="flex bg-blue-200 justify-center items-center min-h-screen"
    >
      <div className="w-1/4 bg-white p-6 rounded shadow">
        <h2 className="mb-6 text-center font-bold text-3xl">
          Student Registration
        </h2>

        {/* Student Name */}
        <div className="mb-4">
          <label className="block text-lg mb-1">Student Name</label>
          <input
            type="text"
            {...register("username", {
              required: "User name is required",
              minLength: {
                value: 5,
                message: "User name must be at least five characters",
              },
            })}
            className="border-2 w-full px-3 py-1"
          />
          {errors.username && (
            <p className="text-sm text-red-500 mt-1">
              {errors.username.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-lg mb-1">Email</label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email",
              },
            })}
            className="border-2 w-full px-3 py-1"
          />
          {errors.email && (
            <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Grade */}
        <div className="mb-4">
          <label className="block text-lg mb-1">Grade Level</label>
          <input
            type="number"
            placeholder="Write the Grade"
            {...register("grade", {
              required: "Grade is required",
              min: {
                value: 1,
                message: "Grade must be greater than 0",
              },
            })}
            min={1}
            className="border-2 w-full px-3 py-1"
          />
          {errors.grade && (
            <p className="text-sm text-red-500 mt-1">{errors.grade.message}</p>
          )}
        </div>

        {/* Subjects */}
        <h2 className="font-semibold mb-2">Subject Interest</h2>
        <div className="mb-4 text-lg">
          <label className="block">
            <input
              type="checkbox"
              value="Mathematics"
              {...register("subject", {
                validate: (value) =>
                  (value && value.length > 0) ||
                  "You have to select at least one subject",
              })}
              className="mr-2"
            />
            Mathematics
          </label>

          <label className="block">
            <input
              type="checkbox"
              value="Science"
              {...register("subject")}
              className="mr-2"
            />
            Science
          </label>

          <label className="block">
            <input
              type="checkbox"
              value="English"
              {...register("subject")}
              className="mr-2"
            />
            English
          </label>

          {errors.subject && (
            <p className="text-sm text-red-500 mt-1">
              {errors.subject.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-red-400 hover:bg-red-500 text-white py-2 w-full rounded"
        >
          Register
        </button>
      </div>
    </form>
  );
}
