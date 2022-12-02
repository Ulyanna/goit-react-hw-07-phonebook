import { createSlice } from "@reduxjs/toolkit";

const filtersInitialState = {
  filterWord: '',
};

const filterSlice = createSlice({
    name: 'filter',
    initialState: filtersInitialState,
    reducers: {
    setStatusFilter(state, action) {
      state.status = action.payload;
    },
  },
})

export const { setStatusFilter } = filterSlice.actions;