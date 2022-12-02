import React from 'react';

export const Filter = ({onFilterContacts, filter}) => {
  return (
    <div>
      <p>Find contacts by name</p>
      <input
        placeholder="name to serch"
        onChange={onFilterContacts}
        value={filter}
        name="filter"
      />
    </div>
  );
};
