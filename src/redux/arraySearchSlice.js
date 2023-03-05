import { createSlice } from '@reduxjs/toolkit';

const InitialStateArraySearch = { value: [] };

const arraySearchSlice = createSlice({
  name: 'arraySearch',
  initialState: InitialStateArraySearch,

  reducers: {
    setArraySearch(state, action) {
      state.value = action.payload;
    },
  },
});

export const { setArraySearch } = arraySearchSlice.actions;
export const arraySearchReducer = arraySearchSlice.reducer;
