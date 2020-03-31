import React from "react";
import css from './ContactListItem.module.css';

const ContactListItem = ({ contact: { name, number, id }, deleteContact }) => {
  return (
    <li className={css.contactListItem}>
      <p>{name}</p>
      <p className={css.contactNumber}>{number}</p>
      <button className={css.delContactButton} type="button" id={id} onClick={deleteContact}>
        <img src="https://picua.org/images/2020/03/26/28740e554c9861b087f5962ed8cd8de7.png" alt="delete" width="40" height="40" onClick={deleteContact} id={id}/>
      </button>
    </li>
  );
};

export default ContactListItem;
