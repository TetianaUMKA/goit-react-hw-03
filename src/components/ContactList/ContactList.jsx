import Contact from "../Contact/Contact";

export default function ContactList({ visibleListContacts }) {
  return (
    <ul>
      {visibleListContacts.map((contact) => (
        <li key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
}
