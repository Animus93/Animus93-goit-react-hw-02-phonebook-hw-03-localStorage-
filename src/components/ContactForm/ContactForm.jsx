import React from 'react';
import { nanoid } from 'nanoid';

export class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
  };

  onCreateContact = data => {
    const key = data.currentTarget.name;
    const value = data.currentTarget.value;
    this.props.ArrayOfContacts.find(
      contact => contact[key].toLocaleLowerCase() === value.toLocaleLowerCase()
    )
      ? alert(`${value} уже есть в контактах!`)
      : this.setState({
          [key]: value,
        });
  };

  onUpdateState = event => {
    event.preventDefault();
    const ID = nanoid();
    const UpdatedArrayOfContacts = [
      { id: ID, name: this.state.name, number: this.state.number },
      ...this.props.ArrayOfContacts,
    ];
    this.setState({
      name: '',
      number: '',
    });
    return this.props.updateContacts(UpdatedArrayOfContacts);
  };

  render() {
    return (
      <form onSubmit={this.onUpdateState}>
        <h2>Phoneboock</h2>
        <input
          placeholder="Name"
          onChange={this.onCreateContact}
          value={this.state.name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <input
          placeholder="Phone number"
          onChange={this.onCreateContact}
          value={this.state.number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
