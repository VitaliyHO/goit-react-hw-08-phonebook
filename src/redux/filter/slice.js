import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    filterValue: "",
  },
  reducers: {
    setFilteredName: {
      reducer(state, action) {
        state.filterValue = action.payload;
      },
    },
  },
});

export const { setFilteredName } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
