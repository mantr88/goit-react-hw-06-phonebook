import { useState, useEffect } from 'react';
import { GlobalStyle } from './Utils/GlobalStyle';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { ThemeProvider } from 'styled-components';
import { theme } from './Utils/Theme';
import { Layout } from './Layout/Layout';
import initialContacts from '../contacts';
import { useSelector } from 'react-redux';

const getInitialContacts = () => {
  const savedContacts = localStorage.getItem('contacts');
  if (savedContacts !== null) {
    return JSON.parse(savedContacts);
  } else {
    return initialContacts;
  }
};

export const App = () => {
  const [filter, setFilter] = useState('');
  const contacts = useSelector(state => state.contacts);

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const deleteContact = contactId => {
  //   setContacts(pervState =>
  //     pervState.filter(contact => contact.id !== contactId)
  //   );
  // };

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
        <ContactForm />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={changeFilter} />
        <ContactList contacts={visibleContacts} />
        <GlobalStyle />
      </Layout>
    </ThemeProvider>
  );
};
