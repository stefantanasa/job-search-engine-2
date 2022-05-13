import { createSlice } from "@reduxjs/toolkit";

const favSlice = createSlice({
  name: "fav",
  initialState: {
    favCompanies: [],
  },
  reducers: {
    addToFav: (state, action) => {
      return {
        favCompanies: [...state.favCompanies],
      };
    },
  },
});

export default favSlice.reducer;
export const { addToFav } = favSlice.actions;
