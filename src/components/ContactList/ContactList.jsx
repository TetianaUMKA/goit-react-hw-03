import Contact from "../Contact/Contact";

import css from "./ContactList.module.css";

export default function ContactList({ visibleListContacts, onDeleteContact }) {
  return (
    <ul className={css.list}>
      {visibleListContacts.map((contact) => (
        <li className={css.item} key={contact.id}>
          <Contact contact={contact} onDeleteContact={onDeleteContact} />
        </li>
      ))}
    </ul>
  );
}
