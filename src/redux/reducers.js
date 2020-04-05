/*VARIANT VANILLA REDUX*/

// import types from "./types";

// const initialState = {
//   contacts: [
//     { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//     { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//     { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//     { id: "id-4", name: "Annie Copeland", number: "227-91-26" }
//   ],
//   filter_query: ""
// };

// export const contacts = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case types.ADD_CONTACT:
//       return { ...state, contacts: [...state.contacts, payload] };
//     case types.REMOVE_CONTACT:
//       return {
//         ...state,
//         contacts: [...state.contacts.filter(contact => contact.id !== payload)]
//       };
//     case types.FILTER_CONTACTS:
//       return { ...state, filter_query: payload };

//     default:
//       return state;
//   }
// };

/* VARIANT REDUX-TOOLKIT */

import { createReducer } from "@reduxjs/toolkit";
import * as actions from "./actions";

const initialState = {
  contacts: [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" }
  ],
  filter_query: ""
};

const onAddContact = (state, { payload }) => ({
  ...state,
  contacts: [...state.contacts, payload]
});
const onRemoveContact = (state, { payload }) => ({
  ...state,
  contacts: [...state.contacts.filter(contact => contact.id !== payload)]
});
const onFilterContact = (state, { payload }) => ({
  ...state,
  filter_query: payload
});

export const contacts = createReducer(initialState, {
  [actions.addContact]: onAddContact,
  [actions.removeContact]: onRemoveContact,
  [actions.getFilterQuery]: onFilterContact,
});
