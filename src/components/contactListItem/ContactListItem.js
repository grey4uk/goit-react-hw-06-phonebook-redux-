import React from "react";
import css from "./ContactListItem.module.css";
import { connect } from "react-redux";
import { removeContact } from "../../redux/actions";

const ContactListItem = props => {

  return (
    <li className={css.contactListItem}>
      <p>{props.contact.name}</p>
      <p className={css.contactNumber}>{props.contact.number}</p>
      <button
        className={css.delContactButton}
        type="button"
        // onClick={() => props.removeContact(props.contact.id)}
      >
        <img
          src="https://picua.org/images/2020/03/26/28740e554c9861b087f5962ed8cd8de7.png"
          alt="delete"
          width="40"
          height="40"
          onClick={() => props.removeContact(props.contact.id)}
        />
      </button>
    </li>
  );
};

const mapDTP = {
  removeContact
};

export default connect(null, mapDTP)(ContactListItem);
