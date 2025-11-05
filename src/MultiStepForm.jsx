import React, { useReducer } from "react";
import { formReducer, initialState } from "./FormReducer";

const MultiStepForm = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleChange = (e) => {
    dispatch({
      type: "UPDATE_FIELD",
      field: e.target.name,
      value: e.target.value,
    });
  };

  const next = () => dispatch({ type: "NEXT" });
  const prev = () => dispatch({ type: "PREV" });
  const reset = () => dispatch({ type: "RESET" });

  const handleSubmit = () => {
    alert("The form was submitted successfully!");
    reset();
  };

  return (
    <>
      <h2>Multi-Step Form</h2>

      {state.step === 1 && (
        <div>
          <h3>Step 1: Your Name</h3>
          <label>First Name:</label>
          <input
            name="firstname"
            type="text"
            value={state.firstname}
            onChange={handleChange}
          />
          <br />
          <label>Last Name:</label>
          <input
            name="lastname"
            type="text"
            value={state.lastname}
            onChange={handleChange}
          />
          <br />
          <button onClick={next}>Next</button>
        </div>
      )}

      {state.step === 2 && (
        <div>
          <h3>Step 2: Contact Info</h3>
          <label>Email:</label>
          <input
            name="email"
            type="email"
            value={state.email}
            onChange={handleChange}
          />
          <br />
          <label>Password:</label>
          <input
            name="password"
            type="password"
            value={state.password}
            onChange={handleChange}
          />
          <br />
          <label>Phone Number:</label>
          <input
            name="phone"
            type="tel"
            value={state.phone}
            onChange={handleChange}
          />
          <br />
          <button onClick={prev}>Back</button>
          <button onClick={next}>Next</button>
        </div>
      )}

      {state.step === 3 && (
        <div>
          <h3>Step 3: Review</h3>
          <p>
            <strong>First Name:</strong> {state.firstname}
          </p>
          <p>
            <strong>Last Name:</strong> {state.lastname}
          </p>
          <p>
            <strong>Email:</strong> {state.email}
          </p>
          <p>
            <strong>Phone:</strong> {state.phone}
          </p>
          <button onClick={prev}>Back</button>
          <button onClick={handleSubmit}>Confirm</button>
        </div>
      )}

      {state.step > 3 && (
        <div>
          <h3>Form Completed</h3>
          <button onClick={reset}>Start Over</button>
        </div>
      )}
    </>
  );
};

export default MultiStepForm;
