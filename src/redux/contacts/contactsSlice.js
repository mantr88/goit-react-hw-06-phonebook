import { createSlice } from '@reduxjs/toolkit';
import initialContacts from '../../contacts.json';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContacts,
  reducers: {
    addContact: {
      reducer(state, action) {
        const checkContactName = state.find(
          contact =>
            contact.name.toLowerCase() === action.payload.name.toLowerCase()
        );
        if (checkContactName) {
          alert(`${action.payload.name} is allready in contact!`);
          return;
        } else {
          state.push(action.payload);
        }
      },
    },
  },
});

export const { addContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
