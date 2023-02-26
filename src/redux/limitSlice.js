import { createSlice } from '@reduxjs/toolkit';

const limitInitialState = {
  value: 100,
};

const limitSlice = createSlice({
  name: 'limit',
  initialState: limitInitialState,

  reducers: {
    setLimit(state, action) {
      state.value = action.payload;
    },
  },
});

export const { setLimit } = limitSlice.actions;
export const limitReducer = limitSlice.reducer;
