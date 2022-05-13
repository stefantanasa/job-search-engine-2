import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// const getResult = createAsyncThunk(
//   "search/getResult",
//   async (url, thunkAPI) => {
//     try {
//       let response = await fetch(url);
//       if (response.ok) {
//         let data = await response.json();
//         return data;
//       } else {
//         return thunkAPI.rejectWithValue();
//       }
//     } catch (error) {
//       console.log("❌ There is an error: ", error);
//       return thunkAPI.rejectWithValue();
//     }
//   }
// );

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchTerm: "",
    searchResult: [],
    jobCategory: "",
  },
  reducers: {},
});

export default searchSlice.reducer;
