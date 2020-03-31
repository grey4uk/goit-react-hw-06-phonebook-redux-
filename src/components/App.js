import React, { Component } from "react";
import ContactForm from "./contactForm/ContactForm";
import ContactList from "./contactList/ContactList";
import Filter from "./filter/Filter";
import css from "./App.module.css";
import ghostLogoTransition from "./transitions/ghostLogoTransition.module.css";
import filterFormTransition from "./transitions/filterFormTransition.module.css";
import alertMessageTransition from "./transitions/alertMessageTransition.module.css";

import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";

// import 'pnotify/dist/PNotifyBrightTheme.css';
// import PNotify from 'pnotify/dist/es/PNotify';
// import PNotifyButtons from 'pnotify/dist/es/PNotifyButtons';

// PNotify.alert('Notice me, senpai!');

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" }
    ],
    filter: "",
    isVisibleLogo: false,
    message: ""
  };

  componentDidMount() {
    const contacts =
      localStorage.getItem("contacts") !== null
        ? JSON.parse(localStorage.getItem("contacts"))
        : this.state.contacts;
    this.setState(prev => ({ contacts, isVisibleLogo: !prev.isVisibleLogo }));
  }

  handleToggle = e => {
    this.setState({ message: "" });
  };

  componentDidUpdate() {
    const { contacts } = this.state;
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }

  submitContact = data => {
    const isNumberExist = this.state.contacts.some(
      contact => contact.number === data.number
    );
    !isNumberExist
      ? this.setState(prevState =>
          data.name
            ? {
                contacts: [...prevState.contacts, data],
                message: ""
              }
            : this.setState({ message: "Empty name" })
        )
      : this.setState({ message: "This number exist" });
  };

  deleteContact = e => {
    const id = e.target.id;
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    }));
  };

  getFilteredContacts = e => {
    this.setState({
      filter: e.target.value
    });
  };

  filterContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  render() {
    const { isVisibleLogo, contacts, message } = this.state;
    const isVisibleFilter = contacts.length > 1 ? true : false;
    return (
      <div className={css.phonebook}>
        <CSSTransition
          in={message}
          timeout={250}
          classNames={alertMessageTransition}
          unmountOnExit
        >
          <div className={css.alertMessage}>
            <span>{message}</span>
            <button
              onClick={this.handleToggle}
              className={css.alertClose}
            ></button>
          </div>
        </CSSTransition>
        <div>
          <CSSTransition
            in={isVisibleLogo}
            timeout={500}
            classNames={ghostLogoTransition}
            unmountOnExit
          >
            <h1 className={css.title}>Phonebook</h1>
          </CSSTransition>

          <ContactForm submitContact={this.submitContact} />

          <CSSTransition
            in={isVisibleFilter}
            timeout={250}
            classNames={filterFormTransition}
            unmountOnExit
          >
            <Filter getFilteredContacts={this.getFilteredContacts} />
          </CSSTransition>
        </div>
        <div>
          {isVisibleFilter ? (
            <ContactList
              contacts={this.filterContacts()}
              deleteContact={this.deleteContact}
            />
          ) : (
            <ContactList
              contacts={this.state.contacts}
              deleteContact={this.deleteContact}
            />
          )}
        </div>
      </div>
    );
  }
}

App.defaultProps = {
  contacts: []
};

App.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string
};

export default App;
