import React from "react";
import { useForm } from "react-hook-form";

const CustomerRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data, null, 2));
   
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex justify-center bg-amber-100 w-full h-screen py-10"
    >
      <div className="flex flex-col my-2 px-6 py-2 bg-white h-full">
        <h1 className="text-3xl font-semibold py-2">Customer Registration</h1>

        {/* Customer Name */}
        <div>
          <label className="text-lg font-bold">Customer Name</label>
          <input
            {...register("customerName", { required: "User name is required" })}
            className="border-2 px-4 my-4 w-full"
          />
          {errors.customerName && (
            <p className="text-red-400 text-sm">
              {errors.customerName.message}
            </p>
          )}
        </div>

        {/* Customer Email */}
        <div>
          <label className="text-lg font-bold">Customer Email</label>
          <input
            {...register("customerEmail", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email address",
              },
            })}
            className="border-2 px-4 my-4 w-full"
          />
          {errors.customerEmail && (
            <p className="text-red-400 text-sm">
              {errors.customerEmail.message}
            </p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="text-lg font-bold">Password</label>
          <input
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 10,
                message: "Password must be at least 10 characters",
              },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).+$/,
                message:
                  "Password must include uppercase, lowercase, number, and special character",
              },
            })}
            className="border-2 px-4 w-full my-4"
          />
          {errors.password && (
            <p className="text-red-400 text-sm">{errors.password.message}</p>
          )}
        </div>

        {/* Confirm Password */}
        <div>
          <label className="text-lg font-bold">Confirm Password</label>
          <input
            type="password"
            {...register("confirmPassword", {
              required: "Confirm password is required",
              validate: (value) =>
                value === watch("password") || "Passwords do not match",
            })}
            className="border-2 px-4 w-full my-4"
          />
          {errors.confirmPassword && (
            <p className="text-red-400 text-sm">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        {/* Customer Level */}
        <div>
          <label className="text-lg font-bold">Customer Level</label>
          <input
            type="number"
            {...register("level", { required: "Customer Level is required" })}
            className="border-2 px-4 w-full my-4"
          />
          {errors.level && (
            <p className="text-red-400 text-sm">{errors.level.message}</p>
          )}
        </div>

        {/* Customer Category (Manual Checkboxes, max 2) */}
        <div>
          <label className="text-lg font-bold">
            Customer Category (Select up to 2)
          </label>
          <br />

          <label>
            <input
              type="checkbox"
              value="International"
              {...register("customerCategory", {
                validate: (value) =>
                  value?.length <= 2 || "You can select up to 2 categories",
              })}
              className="mr-2"
            />
            International
          </label>
          <br />

          <label>
            <input
              type="checkbox"
              value="Local"
              {...register("customerCategory")}
              className="mr-2"
            />
            Local
          </label>
          <br />

          <label>
            <input
              type="checkbox"
              value="Online"
              {...register("customerCategory")}
              className="mr-2"
            />
            Online
          </label>
          <br />

          {errors.customerCategory && (
            <p className="text-red-400 text-sm">
              {errors.customerCategory.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="border-1 p-2 w-full bg-red-500 shadow-2xl rounded-l text-white mt-4"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default CustomerRegister;
