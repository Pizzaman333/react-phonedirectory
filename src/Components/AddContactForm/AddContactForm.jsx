// -------------------------------------------------------- V3 ------------------------------------------------------- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";  
import { addContact, selectContacts } from "../../redux/contactsSlice"; 
import { showNotification } from "../../redux/notificationSlice"; 
import { nanoid } from "nanoid";
import styles from "./AddContactForm.module.scss";

const AddContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  
  const [nameInputId] = useState(() => nanoid());
  const [telInputId] = useState(() => nanoid());

  const handleSubmit = (e) => {
    e.preventDefault();

    const isDuplicate = contacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isDuplicate) {
      dispatch(showNotification({ 
        message: `${name} is already in contacts!`, 
        type: "error" 
      }));
      return;
    }

    dispatch(addContact(name, number));

    dispatch(showNotification({ 
        message: "Contact added successfully!", 
        type: "success" 
    }));

    setName("");
    setNumber("");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if(name === "name") setName(value);
    if(name === "number") setNumber(value);
  };

  return (
    <form className={styles.addContactForm} onSubmit={handleSubmit}>
       <label htmlFor={nameInputId}>Name</label>
       <input 
         id={nameInputId} 
         type="text" 
         name="name" 
         value={name} 
         onChange={handleChange} 
         required 
       />
       
       <label htmlFor={telInputId}>Number</label>
       <input 
         id={telInputId} 
         type="tel" 
         name="number" 
         value={number} 
         onChange={handleChange} 
         required 
       />
       
       <button type="submit">Add contact</button>
    </form>
  );
};

export default AddContactForm;



// -------------------------------------------------------- V2 ------------------------------------------------------- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// import { useState } from "react"; 
// import { nanoid } from "nanoid";
// import styles from "./AddContactForm.module.scss";

// const AddContactForm = ({ addContact }) => {
//   const [name, setName] = useState("");
//   const [number, setNumber] = useState("");

//   const [nameInputId] = useState(() => nanoid());
//   const [telInputId] = useState(() => nanoid());

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     addContact(name, number); 
//     setName("");
//     setNumber("");
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
    
//     switch (name) {
//       case "name":
//         setName(value);
//         break;
//       case "number":
//         setNumber(value);
//         break;
//       default:
//         return;
//     }
//   };

//   return (
//     <form className={styles.addContactForm} onSubmit={handleSubmit}>
//       <label htmlFor={nameInputId}>Name</label>
//       <input
//         type="text"
//         id={nameInputId}
//         name="name"
//         value={name} 
//         onChange={handleChange}
//         required
//       />
//       <label htmlFor={telInputId}>Number</label>
//       <input
//         type="tel"
//         id={telInputId}
//         onChange={handleChange}
//         name="number"
//         value={number}
//         required
//       />
//       <button type="submit">Add contact</button>
//     </form>
//   );
// };

// export default AddContactForm;



// -------------------------------------------------------- V1 ------------------------------------------------------- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// import { Component } from "react";
// import { nanoid } from "nanoid";
// import styles from "./AddContactForm.module.scss";

// class AddContactForm extends Component {
//   state = {
//     name: "",
//     number: "",
//   }; 

//   nameInputId = nanoid();
//   telInputId = nanoid();

//   handleSubmit = (e) => {
//     e.preventDefault();
//     const { name, number } = this.state;
//     const { addContact } = this.props;
//     addContact(name, number);
//     this.setState({ name: "", number: "" });
//   };

//   handleChange = (e) => {
//     const { name, value } = e.target;
//     this.setState({ [name]: value });
//   };

//   render() {
//     return (
//       <form className={styles.addContactForm} onSubmit={this.handleSubmit}>
//         <label htmlFor={this.nameInputId}>Name</label>
//         <input
//           type="text"
//           id={this.nameInputId}
//           name="name"
//           value={this.state.name}
//           onChange={this.handleChange}
//           required
//         />
//         <label htmlFor={this.telInputId}>Number</label>
//         <input
//           type="tel"
//           id={this.telInputId}
//           onChange={this.handleChange}
//           name="number"
//           value={this.state.number}
//           required
//         />
//         <button type="submit">Add contact</button>
//       </form>
//     );
//   }
// }

// export default AddContactForm;