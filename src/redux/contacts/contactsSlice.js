import { createSlice } from '@reduxjs/toolkit';
import initialContacts from '../../contacts.json';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: initialContacts,
  },
  reducers: {
    addContact: {
      reducer(state, action) {
        const checkContactName = state.items.find(
          contact =>
            contact.name.toLowerCase() === action.payload.name.toLowerCase()
        );
        if (checkContactName) {
          alert(`${action.payload.name} is allready in contact!`);
          return;
        } else {
          state.items.push(action.payload);
        }
      },
    },
    deleteContact: {
      reducer(state, action) {
        const index = state.items.findIndex(
          contact => contact.id !== action.payload
        );
        state.items.splice(index, 1);
      },
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
const contactsReducer = contactsSlice.reducer;

const persistConfig = {
  key: 'contacts',
  storage,
};

export const persistedReducer = persistReducer(persistConfig, contactsReducer);
