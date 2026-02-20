import { createStore, combineReducers } from 'redux';
import { contactsReducer } from './contacts/reducer';
import { filterReducer } from './filter/reducer';

const defaultContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const persistedContacts = localStorage.getItem('contacts');
const initialContacts = persistedContacts ? JSON.parse(persistedContacts) : defaultContacts;

const preloadedState = {
  contacts: { items: initialContacts },
  filter: '',
};

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

export const store = createStore(rootReducer, preloadedState);

store.subscribe(() => {
  const { contacts } = store.getState();
  localStorage.setItem('contacts', JSON.stringify(contacts.items));
});

// using Redux Toolkit
// import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import { 
//   persistStore, 
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";  
// import contactsReducer from "./contactsSlice";
// import filterReducer from "./filterSlice";
// import notificationReducer from "./notificationSlice";

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filter: filterReducer,
//   notification: notificationReducer,
// });

// const persistConfig = {
//   key: "root",  
//   storage,     
//   blacklist: ["filter", "notification"], 
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store);