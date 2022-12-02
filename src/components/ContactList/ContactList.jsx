import React from 'react';

export const ContactList = ({ ArrayOfContacts, filter, updateContacts }) => {
  function onDelete(data) {
    return updateContacts(
      ArrayOfContacts.filter(
        contact => contact.id !== data.target.dataset.index
      )
    );
  }

  return ArrayOfContacts.filter(contact => {
    return contact.name
      .toLocaleLowerCase()
      .includes(filter.toLocaleLowerCase());
  }).map(contact => {
    return (
      <li className="contact" key={contact.id}>
        {contact.name} {contact.number}
        <button data-index={contact.id} key={contact.id} onClick={onDelete}>
          Delete
        </button>
      </li>
    );
  });
};
