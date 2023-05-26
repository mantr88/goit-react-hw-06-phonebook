import { useEffect } from 'react';
import { GlobalStyle } from './Utils/GlobalStyle';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { ThemeProvider } from 'styled-components';
import { theme } from './Utils/Theme';
import { Layout } from './Layout/Layout';
import { useSelector } from 'react-redux';

export const App = () => {
  const contacts = useSelector(state => state.contacts);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  // let normalizedFilter = filter.toLowerCase();

  // const visibleContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(normalizedFilter)
  // );

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
        <GlobalStyle />
      </Layout>
    </ThemeProvider>
  );
};
