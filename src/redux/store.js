// classik redux
import { createStore, combineReducers } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";

import contactsReducer from "./contacts/contacts-reducer";
import filterReducer from "./filter/filter-reducer"; 
import notificationReducer from "./notification/notification-reducer"; 

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  notification: notificationReducer,  
});

export const store = createStore(
  rootReducer, 
  devToolsEnhancer() 
);

// every time the state changes
store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("contacts", JSON.stringify(state.contacts.items));
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