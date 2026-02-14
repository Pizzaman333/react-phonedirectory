import { nanoid } from 'nanoid';
import { ADD_CONTACT, DELETE_CONTACT, CHANGE_FILTER } from './contacts-types';

export const addContact = (name, number) => ({
  type: ADD_CONTACT,
  payload: {
    id: nanoid(),
    name,
    number,
  },
});

export const deleteContact = (contactId) => ({
  type: DELETE_CONTACT,
  payload: contactId,
});

export const changeFilter = (value) => ({
  type: CHANGE_FILTER,
  payload: value,
});