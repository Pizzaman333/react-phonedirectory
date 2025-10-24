import { useState } from "react"; 
import { nanoid } from "nanoid";
import styles from "./AddContactForm.module.scss";

const AddContactForm = ({ addContact }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const [nameInputId] = useState(() => nanoid());
  const [telInputId] = useState(() => nanoid());

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact(name, number); 
    setName("");
    setNumber("");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };

  return (
    <form className={styles.addContactForm} onSubmit={handleSubmit}>
      <label htmlFor={nameInputId}>Name</label>
      <input
        type="text"
        id={nameInputId}
        name="name"
        value={name} 
        onChange={handleChange}
        required
      />
      <label htmlFor={telInputId}>Number</label>
      <input
        type="tel"
        id={telInputId}
        onChange={handleChange}
        name="number"
        value={number}
        required
      />
      <button type="submit">Add contact</button>
    </form>
  );
};

export default AddContactForm;

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