import ContactItem from "./ContactItem";

const ContactList = ({ contacts, dispatch, setEditing }) => (
  <div>
    <h3>Contacts</h3>
    {contacts.length === 0 ? (
      <p>Review your contact information.</p>
    ) : (
      <ul>
        {contacts.map((contact) => (
          <ContactItem
            key={contact.id}
            contact={contact}
            dispatch={dispatch}
            setEditing={setEditing}
          />
        ))}
      </ul>
    )}
  </div>
);

export default ContactList;
