import Contact from "../Contact/Contact";

export default function ContactList({ visibleListContacts, onDeleteContact }) {
  return (
    <ul>
      {visibleListContacts.map((contact) => (
        <li key={contact.id}>
          <Contact contact={contact} onDeleteContact={onDeleteContact} />
        </li>
      ))}
    </ul>
  );
}
