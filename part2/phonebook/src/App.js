import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import personServices from "./services/person";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterInput, setFilterInput] = useState("");
  const [message, setMessage] = useState({type: null, message: null})

  useEffect(() => {
    personServices.getAll().then(initialPersons => setPersons(initialPersons))
  }, []);

  const personsToShow = persons.filter((person) =>
    person.name.toLowerCase().includes(filterInput.toLowerCase())
  );

  // Handler Functions
  const handleFilterChange = (event) => {
    setFilterInput(event.target.value);
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
    };
    if (persons.find((person) => person.name === newName)) {
      if (window.confirm(`${newName} is already in the phonebook, replace old number with a new one?`)) {
        const existingPerson = persons.find((person) => person.name === newName)
        const newPerson = {...existingPerson, number: newNumber}
        personServices.updatePerson(existingPerson.id, newPerson).then(updatedPerson => {
          setPersons(persons.map(p => p.id === updatedPerson.id ? updatedPerson : p))
          setMessage(
            {
              type: 'success', 
              message:`Updated ${updatedPerson.name}'s number`
            })
            setTimeout(()=> setMessage({type: null, message: null}), 5000)
        }).catch(error => {
          setMessage(
            {
              type: 'error',
              message: error
            }
          )
        })
      } else return
    } else {
      personServices.addPerson(personObject).then(
        returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setMessage(
            {
              type: 'success',
              message: `Added ${returnedPerson.name}`
            })
          setTimeout(()=> setMessage({type: null, message: null}), 5000)
          setNewName("");
          setNewNumber("");
        })
    }

  };
  const deletePerson = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
      personServices.deletePerson(id).then(_ => {
        setPersons(persons.filter(p => p.id !== id))
      })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
      <Filter
        filterInput={filterInput}
        handleFilterChange={handleFilterChange}
      />
      <h3>Add</h3>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />
      <h3>Numbers</h3>
      <Persons personsToShow={personsToShow} deletePerson={deletePerson} />
    </div>
  );
};

export default App;
