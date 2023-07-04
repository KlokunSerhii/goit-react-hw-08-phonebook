import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialStateContacts';
import {
  addContacts,
  fetchContacts,
  removeContacts,
} from './contactsOperations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.items = payload;
    },
    [fetchContacts.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },

    [addContacts.pending](state) {
      state.isLoading = true;
    },
    [addContacts.fulfilled](state, { payload }) {
      console.log(payload);
      state.isLoading = false;
      state.error = null;
      state.items.push(payload);
      return;
    },
    [addContacts.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },

    [removeContacts.pending](state) {
      state.isLoading = true;
    },
    [removeContacts.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.items.filter(state => state.id !== payload);
    },
    [removeContacts.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
  },
});
export default contactsSlice.reducer;
