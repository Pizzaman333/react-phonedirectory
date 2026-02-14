import { combineReducers } from "redux";
import { ADD_CONTACT, DELETE_CONTACT } from "./contacts-types"; 

const defaultContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
];

const loadInitialContacts = () => {
  const saved = localStorage.getItem("contacts");
  return saved ? JSON.parse(saved) : defaultContacts;
};

const items = (state = loadInitialContacts(), { type, payload }) => {
  switch (type) {
    case ADD_CONTACT:
      return [...state, payload];
    case DELETE_CONTACT:
      return state.filter((contact) => contact.id !== payload);
    default:
      return state;
  }
};

export default combineReducers({ items });