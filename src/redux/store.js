import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { 
  persistStore, 
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";  
import contactsReducer from "./contactsSlice";
import filterReducer from "./filterSlice";
import notificationReducer from "./notificationSlice";

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  notification: notificationReducer,
});

const persistConfig = {
  key: "root",  
  storage,     
  blacklist: ["filter", "notification"], 
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);