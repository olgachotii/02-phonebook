import React, { Component } from "react";
import { nanoid } from "nanoid";
// import { Formik } from "formik";

export class ContactList extends Component {
  state = {
    name: "",
    number: "",
  };

  handlChenge = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  reset = () => {
    this.setState({
      name: "",
      number: "",
    });
  };

  createContact = (name, number) => {
    return { id: nanoid(4), name, number };
  };

  handleSubmit = (e) => {
    const { name, number } = this.state;
    e.preventDefault();

    const newContact = this.createContact(name, number);
    this.props.onSubmit(newContact);

    this.reset();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            tipe="text"
            value={this.state.name}
            onChange={this.handlChenge}
            name="name"
            type="text"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          ></input>
        </label>
        <label>
          Number
          <input
            type="tel"
            value={this.state.number}
            onChange={this.handlChenge}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit" className="TodoList__btn">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactList;
