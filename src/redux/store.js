import { configureStore } from '@reduxjs/toolkit';
import { offsetReducer } from './offsetSlice';
import { limitReducer } from './limitSlice';
import { arraySearchReducer } from './arraySearchSlice';

export const store = configureStore({
  reducer: {
    offset: offsetReducer,
    limit: limitReducer,
    arraySearch: arraySearchReducer,
  },
});
