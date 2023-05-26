import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  redusers: {
    changeFilter: {
      reducer(state, action) {
        console.log(action.payload);
        state = action.payload;
      },
    },
  },
});

export const { changeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
