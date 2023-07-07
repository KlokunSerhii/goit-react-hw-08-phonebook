import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer,  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsSlice from './contacts/sliceContacts';
import sliceFilters from './filters/sliceFilters';
import authSlice from './auth/slice';
import sliceModal from './modal/sliceModal';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const persistedReducer = persistReducer(authPersistConfig, authSlice);

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    contacts: contactsSlice,
    filter: sliceFilters,
    modal: sliceModal,
  },

  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);
