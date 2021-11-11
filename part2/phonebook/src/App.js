import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const App = () => {
  const [ persons, setPersons ] = useState([]);
  const [ filteredPersons, setFilteredPersons ] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data);
      });
  }, []);

  const filterChange = (filter) => {
    const fp = filter
      ? persons.filter((person) => person.name.toLowerCase().includes(filter.toLowerCase()))
      : null;
        
    setFilteredPersons(fp)
  };

  const addPerson = (newName, newNumber) => {
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

      return 1;
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onChange={filterChange} />
      <h3>Add a New Contact</h3>
      <PersonForm onSubmit={addPerson} />
      <h3>Numbers</h3>
      <Persons persons={filteredPersons? filteredPersons : persons} />
    </div>
  );
};

export default App;