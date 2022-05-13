import { createSlice } from "@reduxjs/toolkit";

const companySlice = createSlice({
  name: "company",
  initialState: {
    companyJobs: [],
  },
  reducers: {},
});

export default companySlice.reducer;
