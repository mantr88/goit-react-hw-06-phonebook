import { useState, useEffect } from 'react';
import { GlobalStyle } from './Utils/GlobalStyle';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { ThemeProvider } from 'styled-components';
import { theme } from './Utils/Theme';
import { Layout } from './Layout/Layout';
import initialContacts from '../contacts';

const getInitialContacts = () => {
  const savedContacts = localStorage.getItem('contacts');
  if (savedContacts !== null) {
    return JSON.parse(savedContacts);
  } else {
    return initialContacts;
  }
};

export const App = () => {
  const [contacts, setContacts] = useState(getInitialContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    const checkContactName = contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (checkContactName) {
      alert(`${newContact.name} is allready in contact!`);
      return;
    } else {
      setContacts(pervState => [...pervState, newContact]);
    }
  };

  const deleteContact = contactId => {
    setContacts(pervState =>
      pervState.filter(contact => contact.id !== contactId)
    );
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  let normalizedFilter = filter.toLowerCase();

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <h1>Phonebook</h1>
        <ContactForm addContact={addContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={changeFilter} />
        <ContactList contacts={visibleContacts} onDelete={deleteContact} />
        <GlobalStyle />
      </Layout>
    </ThemeProvider>
  );
};
