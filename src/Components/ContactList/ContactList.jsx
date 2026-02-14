import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/contacts-actions"; 
import { showNotification } from "../../redux/notification/notification-reducer";
import Contact from "../Contact/Contact";
import styles from "./ContactList.module.scss";

const ContactList = () => {
  const dispatch = useDispatch();
  
  const contacts = useSelector((state) => state.contacts.items); 
  const filter = useSelector((state) => state.filter);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = (id) => {
    dispatch(deleteContact(id));

     dispatch(showNotification({ 
            message: "Contact deleted successfully!", 
            type: "info" 
        }));
  };

  return (
    <ul className={styles.contactList}>
      {filteredContacts.map((contact) => (
        <Contact
          key={contact.id}
          id={contact.id}
          name={contact.name}
          tel={contact.number}
          onDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

export default ContactList;

// using RT
// import { useSelector, useDispatch } from "react-redux";
// import { selectContacts, deleteContact } from "../../redux/contactsSlice";
// import { selectFilter } from "../../redux/filterSlice";
// import { showNotification } from "../../redux/notificationSlice"; 
// import Contact from "../Contact/Contact";
// import styles from "./ContactList.module.scss";

// const ContactList = () => {
//   const dispatch = useDispatch();
//   const contacts = useSelector(selectContacts);
//   const filter = useSelector(selectFilter);

//   const filteredContacts = contacts.filter((contact) =>
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//   );

//   const handleDelete = (id) => {
//     dispatch(deleteContact(id));

//       dispatch(showNotification({ 
//         message: "Contact deleted successfully!", 
//         type: "info" 
//     }));
//   };

//   return (
//     <ul className={styles.contactList}>
//       {filteredContacts.map((contact) => (
//         <Contact
//           name={contact.name}
//           tel={contact.number}
//           key={contact.id}
//           id={contact.id}
//           onDelete={handleDelete}  
//         />
//       ))}
//     </ul>
//   );
// };

// export default ContactList;


// import Contact from "../Contact/Contact";
// import styles from "./ContactList.module.scss";

// const ContactList = ({ contacts, onDelete }) => (
//   <ul className={styles.contactList}>
//     {contacts.map((contact) => (
//       <Contact
//         name={contact.name}
//         tel={contact.number}
//         key={contact.id}
//         id={contact.id}
//         onDelete={onDelete}
//       />
//     ))}
//   </ul>
// );
// export default ContactList;
