import { createSlice } from "@reduxjs/toolkit";

const favSlice = createSlice({
  name: "fav",
  initialState: {
    favCompanies: [],
  },
  reducers: {
    addToFav: (state, action) => {
      return {
        favCompanies: [...state.favCompanies, action.payload],
      };
    },

    removeFromFav: (state, action) => {
      return {
        favCompanies: state.favCompanies.filter(
          (company, i) => i !== action.payload
        ),
      };
    },
  },
});

export default favSlice.reducer;
export const { addToFav, removeFromFav } = favSlice.actions;
