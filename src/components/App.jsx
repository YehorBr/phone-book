import { Form } from './Form/Form';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { Container } from './Container/Container';
import { GlobalStyle } from 'GlobalStyle';
import { useState, useEffect } from 'react';

export const App = () => {
  const [contacts, setContacts] = useState([]);

  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    if (contacts) {
      const parsedContacts = JSON.parse(contacts);
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    if(contacts.length === 0) return;
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    const isContactExist = contacts.some(
      contact =>
        contact.name === newContact.name || contact.number === newContact.number
    );
    if (isContactExist) {
      alert('Rosie Simpson is already in contacts');
      return;
    }
    setContacts(prevState => [...prevState, newContact]);
  };

  const deleteContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  const filterChange = e => {
    setFilter(e.target.value);
  };

  const filtered = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <Container>
        <h1 style={{ color: '#2f4f2f' }}>Phonebook</h1>

        <Form addContact={addContact} />

        <h2 style={{ color: '#2f4f2f' }}>Contacts</h2>

        <Filter filterValue={filter} filterChange={filterChange} />

        {contacts.length === 0 ? (
          <p>У вас немає контактів!</p>
        ) : (
          <ContactsList deleteContact={deleteContact} contacts={filtered} />
        )}
      </Container>

      <GlobalStyle />
    </>
  );
};
