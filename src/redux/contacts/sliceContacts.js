import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialStateContacts';
import {
  addContacts,
  fetchContacts,
  removeContacts,
} from './contactsOperations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const handleFulfilledGet = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.items = payload;
};

const handleFulfilledAdd = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.items.push(payload);
};

const handleFulfilledRemove = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  const index = state.items.findIndex(contact => contact.id === payload.id);
  state.items.splice(index, 1);
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled]: handleFulfilledGet,
    [fetchContacts.rejected]: handleRejected,

    [addContacts.pending]: handlePending,
    [addContacts.fulfilled]: handleFulfilledAdd,
    [addContacts.rejected]: handleRejected,

    [removeContacts.pending]: handlePending,
    [removeContacts.fulfilled]: handleFulfilledRemove,
    [removeContacts.rejected]: handleRejected,
  },
});
export default contactsSlice.reducer;
