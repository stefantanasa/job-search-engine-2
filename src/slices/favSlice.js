import { createSlice } from "@reduxjs/toolkit";

const favSlice = createSlice({
  name: "fav",
  initialState: {
    favCompanies: [],
  },
  reducers: {},
});

export default favSlice.reducer;
