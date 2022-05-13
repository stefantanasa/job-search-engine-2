import { createSlice } from "@reduxjs/toolkit";

const companySlice = createSlice({
  name: "company",
  initialState: {
    jobs: [],
  },
  reducers: {
    searchJobs: () => {
      console.log("Search jobs");
    },
  },
});

export default companySlice.reducer;
