import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";

const phonebookContacts = JSON.parse(localStorage.getItem("contacts")) || [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

function App() {
  const [contacts, setContacts] = useState(phonebookContacts);

  const [contactFilter, setContactFilter] = useState("");

  const filteredContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(contactFilter.toLowerCase());
  });

  const handleSetContactFilter = (newContactFilter) => {
    setContactFilter(newContactFilter);
  };

  const addContact = (formValues) => {
    setContacts((contacts) => {
      const newContact = {
        id: nanoid(),
        name:
          formValues.username[0].toUpperCase() + formValues.username.slice(1),
        number: formValues.number,
      };
      console.log(newContact);
      return [...contacts, newContact];
    });
  };

  const deleteContact = (id) => {
    setContacts((contacts) => contacts.filter((contact) => contact.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts), [contacts]);
  });

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={addContact} />
        <SearchBox
          value={contactFilter}
          onHandleSetContactFilter={handleSetContactFilter}
        />
        <ContactList
          visibleListContacts={filteredContacts}
          onDeleteContact={deleteContact}
        />
      </div>
    </>
  );
}

export default App;
