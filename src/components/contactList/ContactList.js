import React from "react";
import ContactListItem from "./../contactListItem/ContactListItem";
import css from "./ContactList.module.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import contactsListTransition from "../transitions/contactsListTransition.module.css";

const ContactList = props => {
  // console.log('LIST props', props)
  return (
    <TransitionGroup component="ul" className={css.contactList}>
      {props.contacts.map(contact => (
        <CSSTransition
          key={contact.id}
          timeout={250}
          classNames={contactsListTransition}
          unmountOnExit
        >
          <ContactListItem contact={contact} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default ContactList;
