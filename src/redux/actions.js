/*VARIANT VANILLA REDUX*/

// import types from "./types";

// export const addContact = contact => {
//   return { type: types.ADD_CONTACT, payload: contact };
// };
// export const removeContact = id => {
//   return { type: types.REMOVE_CONTACT, payload: id };
// };
// export const getFilterQuery = e => {
//   e.preventDefault();
//   return { type: types.FILTER_CONTACTS, payload: e.target.value };
// };


/* VARIANT REDUX-TOOLKIT */
import {createAction} from '@reduxjs/toolkit';

export const addContact=createAction('ADD_CONTACT');
export const removeContact=createAction('REMOVE_CONTACT');
export const getFilterQuery=createAction('FILTER_CONTACTS', e=>({payload:e.target.value}));
