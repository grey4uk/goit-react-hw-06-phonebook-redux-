import React from "react";
import ContactListItem from "./../contactListItem/ContactListItem";
import css from './ContactList.module.css';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import contactsListTransition from '../transitions/contactsListTransition.module.css';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <TransitionGroup component="ul" className={css.contactList}>
      {contacts.map(contact => (
        <CSSTransition  key={contact.id} timeout={250} classNames={contactsListTransition} unmountOnExit
        >
        <ContactListItem
          contact={contact}
          // key={contact.id}
          deleteContact={deleteContact}
        />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default ContactList;
