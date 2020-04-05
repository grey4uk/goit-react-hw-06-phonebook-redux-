/*VARIANT VANILLA REDUX*/

// import { createStore, combineReducers } from "redux";
// import { contacts } from "./reducers";
// import { devToolsEnhancer } from "redux-devtools-extension";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// const persistConfig = {
//   key: "root",
//   storage,
//   blacklist: ["filter_query"]
// };

// const rootReducer = combineReducers({
//   contacts
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = createStore(persistedReducer, devToolsEnhancer());

// export const persistor = persistStore(store);



 /* VARIANT REDUX-TOOLKIT */

import { contacts } from "./reducers";
import { persistStore, persistReducer, PERSIST } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {configureStore,getDefaultMiddleware,combineReducers } from '@reduxjs/toolkit';


const persistConfig = {
  key: "root",
  storage,
  blacklist: ["filter_query", "_persist"]
};

const rootReducer = combineReducers({
  contacts
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({reducer:persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [PERSIST]
    }
  })

});

export const persistor = persistStore(store);