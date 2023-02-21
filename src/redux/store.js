import { configureStore } from '@reduxjs/toolkit';
import { offSetReducer } from './offSetSlice';

export const store = configureStore({
  reducer: {
    offset: offSetReducer,
  },
});
