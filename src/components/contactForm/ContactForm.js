import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import css from './ContactForm.module.css'

class ContactForm extends Component {
  state = {
    name: "",
    number: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.submitContact({
      name: this.state.name,
      number: this.state.number,
      id: uuidv4()
    });
    this.setState({
      name: "",
      number: ""
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit} className={css.contactForm}>
          <div className={css.addFormInputBlock}>
          <div>
            <label>
             <p>Name</p>
              <input
                placeholder="name..."
                type="text"
                name="name"
                onChange={this.handleChange}
                value={name}
                className={css.addFormInput}
              />
            </label>
          </div>
          <div>
            <label>
             <p>Number</p>
              <input
                type="tel"
                // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                placeholder="phone number..."
                name="number"
                onChange={this.handleChange}
                value={number}
                className={css.addFormInput}
              />
            </label>
          </div>
          </div>
          <div>
            <button type="submit" className={css.addContact}>
            <img src="https://picua.org/images/2020/03/26/9d15304ff5875b52f04c09fdae146a40.png" alt="delete" width="40" height="40" />
            </button>
          </div>
        </form>
      </>
    );
  }
}

export default ContactForm;
