import { createSlice } from '@reduxjs/toolkit';

const offsetInitialState = {
  number: 40,
};

const offSetSlice = createSlice({
  name: 'offset',
  initialState: offsetInitialState,

  reducers: {
    setOffset(state, action) {
      state.number = action.payload;
    },
  },
});

export const { setOffset } = offSetSlice.actions;
export const offSetReducer = offSetSlice.reducer;
