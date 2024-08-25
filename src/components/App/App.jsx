import { useState } from "react";
import { nanoid } from "nanoid";

import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";

const phonebookContacts = [
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
        name: formValues.username,
        number: formValues.number,
      };
      console.log(newContact);
      return [...contacts, newContact];
    });
  };

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={addContact} />
        <SearchBox
          value={contactFilter}
          onHandleSetContactFilter={handleSetContactFilter}
        />
        <ContactList visibleListContacts={filteredContacts} />
      </div>
    </>
  );
}

export default App;
