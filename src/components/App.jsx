import React from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'PPC-Specialist', number: '459-12-56' },
      { id: 'id-2', name: 'Tanya', number: '443-89-12' },
      { id: 'id-3', name: 'Volodya', number: '645-17-79' },
      { id: 'id-4', name: 'Sasha', number: '227-91-26' },
      { id: 'id-5', name: 'Pavlo', number: '324-11-90' },
      { id: 'id-6', name: 'Ira', number: '156-24-33' },
      { id: 'id-7', name: 'Sister', number: '124-54-31' },
    ],
    filter: '',
  };

  componentDidMount () {
    const prevContacts = JSON.parse(localStorage.getItem('contacts'));
    if(prevContacts && prevContacts.length > 0){
      this.setState({contacts: prevContacts})
    }
  }

  componentDidUpdate (prevProps, prevState) {
    const {contacts} = this.state
    if(contacts !== prevState.contacts){
      localStorage.setItem('contacts',JSON.stringify(this.state.contacts));
    }
  };

  updateContacts = data => {
    this.setState({ contacts: data });
  };

  onFilterContacts = nameToSerch => {
    this.setState({ filter: nameToSerch.currentTarget.value });
  };

  render() {
    return (
      <div className="container">
        <ContactForm
          ArrayOfContacts={this.state.contacts}
          updateContacts={this.updateContacts}
        />

        <div className="contacts">
          <h2>Contacts</h2>
          <Filter
            onFilterContacts={this.onFilterContacts}
            filter={this.state.filter}
          />
          <ContactList
            ArrayOfContacts={this.state.contacts}
            filter={this.state.filter}
            updateContacts={this.updateContacts}
          />
        </div>
      </div>
    );
  }
}
