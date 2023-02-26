import { createSlice } from '@reduxjs/toolkit';

const offsetInitialState = {
  value: 40,
};

const offsetSlice = createSlice({
  name: 'offset',
  initialState: offsetInitialState,

  reducers: {
    setOffset(state, action) {
      state.value = action.payload;
    },
  },
});

export const { setOffset } = offsetSlice.actions;
export const offsetReducer = offsetSlice.reducer;
