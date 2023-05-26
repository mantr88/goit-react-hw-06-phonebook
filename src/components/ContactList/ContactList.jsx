import { ContactCard } from 'components/ContactCard/ContactCard';
import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  return (
    <List>
      {contacts.map(contact => (
        <ContactCard key={contact.id} contact={contact} />
      ))}
    </List>
  );
};
