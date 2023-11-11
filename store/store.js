import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./reducers";
import userReducer from "./reducers/userReducer";

const persistConfig = {
  key: "root",
  storage,
};

//localde saklamak icin parsistedReduder
const persistedReducer = persistReducer(persistConfig, userReducer);

const store = createStore(persistedReducer);

const persistor = persistStore(store);

export { store, persistor };

//BELİRLİ BİR KALIP BU
