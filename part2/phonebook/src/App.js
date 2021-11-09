import React, { useState } from 'react';

const App = () => {
  const [ persons, setPersons ] = useState([
    {  id: 1, name: 'Arto Hellas', number: '08123456789' },
  ]);
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');

  const addPerson = (event) => {
    event.preventDefault();

    const personExist = persons.find(person => person.name === newName);

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

  return (
    <div>
      <h2>Phonebook</h2>
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
      {persons.map(person => 
        <p key={person.id}>{person.name} {person.number}</p>)
      }
    </div>
  );
};

export default App;