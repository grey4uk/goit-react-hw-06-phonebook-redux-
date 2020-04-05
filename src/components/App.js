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
import { connect } from "react-redux";
import { getFilterQuery, addContact } from "../redux/actions";

class App extends Component {
  state = {
    isVisibleLogo: false,
    message: ""
  };

  componentDidMount() {
    this.setState(prev => ({ isVisibleLogo: !prev.isVisibleLogo }));
  }

  handleToggle = e => {
    this.setState({ message: "" });
  };

  submitContact = data => {
    const isNumberExist = this.props.contacts.some(
      contact => contact.number === data.number
    );
    if (!isNumberExist && data.number) {
      if (data.name) {
        this.props.addContact(data);
        this.setState({ message: "" });
      } else {
        this.setState({ message: "Empty name" });
      }
    } else {
      this.setState({ message: "This number exist or empty" });
    }
  };

  filterContact = data => {
    return data.filter(contact =>
      contact.name.toLowerCase().includes(this.props.filter_query.toLowerCase())
    );
  };

  render() {
    const { isVisibleLogo, message } = this.state;
    const isVisibleFilter =
      this.props.contacts.length > 1 || this.props.filter_query ? true : false;
    return (
      <div className={css.phonebook}>
        <CSSTransition
          in={message ? true : false}
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
            <Filter />
          </CSSTransition>
        </div>
        <div>
          <ContactList
            contacts={
              this.props.filter_query === ""
                ? this.props.contacts
                : this.filterContact(this.props.contacts)
            }
          />
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
  filter_query: PropTypes.string
};

const mapSTP = state => {
  // console.log('state', state)
  return {
    contacts: state.contacts.contacts,
    filter_query: state.contacts.filter_query
  };
};

export default connect(mapSTP, { getFilterQuery, addContact })(App);
