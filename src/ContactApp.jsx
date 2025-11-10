import { useReducer, useState } from "react";
import { reducer, initialState } from "./ContextReducer";
import ContactContext from "./ContactContext";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";

const ContactApp = () => {
  const [contacts, dispatch] = useReducer(reducer, initialState);
  const [editing, setEditing] = useState(null);

  return (
    <div>
      <h2>Contact App</h2>
      <ContactContext.Provider value={{dispatch}}>
        <ContactForm
          dispatch={dispatch}
          edit={editing}
          clearEditing={() => setEditing(null)}
        />

        <ContactList
          contacts={contacts}
          dispatch={dispatch}
          setEditing={setEditing}
        />
      </ContactContext.Provider>
    </div>
  );
};

export default ContactApp;
