import { HiUser } from "react-icons/hi";
import { HiPhone } from "react-icons/hi";

import css from "./Contact.module.css";

export default function Contact({
  contact: { id, name, number },
  onDeleteContact,
}) {
  return (
    <>
      <div>
        <div className={css.contactData}>
          <span>
            <HiUser />
          </span>
          <p>{name}</p>
        </div>
        <div className={css.contactData}>
          <span>
            <HiPhone />
          </span>
          <p>{number}</p>
        </div>
      </div>
      <button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </>
  );
}
