import Contact from "../Contact/Contact";
import styles from "./ContactList.module.scss";

const ContactList = ({ contacts, onDelete }) => (
  <ul className={styles.contactList}>
    {contacts.map((contact) => (
      <Contact
        name={contact.name}
        tel={contact.number}
        key={contact.id}
        id={contact.id}
        onDelete={onDelete}
      />
    ))}
  </ul>
);
export default ContactList;
