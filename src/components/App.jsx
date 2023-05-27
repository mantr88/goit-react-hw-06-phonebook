// import { useEffect } from 'react';
import { GlobalStyle } from './Utils/GlobalStyle';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { ThemeProvider } from 'styled-components';
import { theme } from './Utils/Theme';
import { Layout } from './Layout/Layout';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from 'redux/store';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <PersistGate loading={<div>LOADING...</div>} persistor={persistor}>
        <Layout>
          <h1>Phonebook</h1>
          <ContactForm />
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
          <GlobalStyle />
        </Layout>
      </PersistGate>
    </ThemeProvider>
  );
};
