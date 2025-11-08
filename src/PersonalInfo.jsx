import useForm from "./useForm";

const PersonalInfo = () => {
  const { values, handleChange } = useForm({
    name: "",
    lastname: "",
    email: "",
    message: "",

  });

  const handleSubmit = (e) => {
    e.preventDefault(); 
    alert("Your data has been submitted");
    console.log("Form data:", values);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-3">
      <div>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          name="name"
          type="text"
          value={values.name}
          onChange={handleChange}
          className="border rounded p-1 ml-2"
        />
      </div>
      <div>
        <label htmlFor="name">Last Name:</label>
        <input
          id="name"
          name="name"
          type="text"
          value={values.lastname}
          onChange={handleChange}
          className="border rounded p-1 ml-2"
        />
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          className="border rounded p-1 ml-2"
        />
      </div>

      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={values.message}
          onChange={handleChange}
          className="border rounded p-1 ml-2"
        />
      </div>

      <button type="submit" className="bg-blue-500 text-white p-2 rounded" onClick={handleSubmit} >
        Submit
      </button>
    </form>
  );
};

export default PersonalInfo;
