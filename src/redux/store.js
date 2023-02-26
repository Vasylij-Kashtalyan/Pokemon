import { configureStore } from '@reduxjs/toolkit';
import { offsetReducer } from './offsetSlice';
import { limitReducer } from './limitSlice';

export const store = configureStore({
  reducer: {
    offset: offsetReducer,
    limit: limitReducer,
  },
});
