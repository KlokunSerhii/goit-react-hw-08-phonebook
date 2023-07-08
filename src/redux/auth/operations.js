import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
const message = Notiflix.Notify;

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const clearAuthHeader = token => {
  axios.defaults.headers.common.Authorization = '';
};
export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', credentials);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (e) {
      message.failure(
        '😡 Sorry, something went wrong. This user may not exist. Please try again',
        {
          width: '280px',
          position: 'center-top',
          distance: '10px',
          opacity: 0.8,
          borderRadius: '10px',
          timeout: 3000,
          messageMaxLength: 110,
          backOverlay: false,
          plainText: true,
          showOnlyTheLastOne: false,
          clickToClose: true,
          pauseOnHover: true,
        }
      );
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', credentials);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (e) {
      message.failure(
        '😡 Sorry, something went wrong. Maybe this user already exists. Please try again',
        {
          width: '280px',
          position: 'center-top',
          distance: '10px',
          opacity: 0.8,
          borderRadius: '10px',
          timeout: 3000,
          messageMaxLength: 110,
          backOverlay: false,
          plainText: true,
          showOnlyTheLastOne: false,
          clickToClose: true,
          pauseOnHover: true,
        }
      );
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    clearAuthHeader();
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    setAuthHeader(persistedToken);
    try {
      const response = await axios.get('/users/current');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
