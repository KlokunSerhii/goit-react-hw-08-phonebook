import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://64a2fd2cb45881cc0ae5f4cb.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async ({ id, name, phone }, { rejectWithValue }) => {
    try {
      const response = await axios.post('/contacts', {
        id,
        name,
        phone,
      });
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const removeContacts = createAsyncThunk(
  'contacts/deleteContacts',
  async (contactId, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
