import { useState, useEffect } from "react";

const emptyContact = { id: null, name: "", email: "", phone: "" };

const ContactForm = ({ dispatch, edit, clearEditing }) => {
  const [contact, setContact] = useState(emptyContact);

  useEffect(() => {
    if (edit) setContact(edit);
  }, [edit]);

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!contact.name && !contact.email && !contact.phone) return;

    if (edit
    ) {
      dispatch({ type: "edit", payload: contact });
      clearEditing();
    } else {
      dispatch({
        type: "add",
        payload: { ...contact, id: Date.now(), favorite: false },
      });
    }

    setContact(emptyContact);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>{edit ? "Edit Contact" : "Add Contact"}</h3>

      <input
        name="name"
        placeholder="Name"
        value={contact.name}
        onChange={handleChange}
        required
      /> <br />
      <input
        name="email"
        type="email"
        placeholder="Email"
        value={contact.email}
        onChange={handleChange}
        required
      /> <br />
      <input
        name="phone"
        placeholder="Phone"
        value={contact.phone}
        onChange={handleChange}
        required
      /> <br />

      <button type="submit">{edit ? "Update" : "Add"}</button>
      {edit && (
        <button type="button" onClick={clearEditing}>
          Cancel
        </button>
      )}
    </form>
  );
};

export default ContactForm;
