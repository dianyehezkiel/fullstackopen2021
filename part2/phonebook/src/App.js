import React, { useState } from 'react';

const App = () => {
  const [ persons, setPersons ] = useState([
    { id: 1, name: 'Arto Hellas', number: '040-123456' },
    { id: 2, name: 'Ada Lovelace', number: '39-44-5323523' },
    { id: 3, name: 'Dan Abramov', number: '12-43-234345' },
    { id: 4, name: 'Mary Poppendieck', number: '39-23-6423122' },
  ]);
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');
  const [ filter, setFilter ] = useState('');

  const addPerson = (event) => {
    event.preventDefault();

    const personExist = persons.find((person) => {
      return person.name.toLowerCase() === newName.toLowerCase();
    });

    if (personExist) {
      alert(`${newName} is already added to phonebook`);
      return;
    } else {
      const newPerson = {
        id: persons.length + 1,
        name: newName,
        number: newNumber,
      };

      setPersons(persons.concat(newPerson));
      setNewName('');
      setNewNumber('');
    }
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredPersons = filter
    ? persons.filter((person) => person.name.toLowerCase().includes(filter.toLowerCase()))
    : persons;

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input 
        placeholder="Name..."
        value={filter}
        onChange={handleFilterChange} />
      </div>
      <h2>Add a New Contact</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input 
            placeholder="Add Name"
            value={newName}
            onChange={handleNameChange} />
        </div>
        <div>number: <input 
          placeholder="Add Phonenumber"
          value={newNumber}
          onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      {filteredPersons.map(person => 
        <p key={person.id}>{person.name} {person.number}</p>)
      }
    </div>
  );
};

export default App;