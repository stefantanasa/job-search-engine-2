import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getResult = createAsyncThunk(
  "search/getResult",
  async (url, thunkAPI) => {
    try {
      let response = await fetch(url);
      if (response.ok) {
        let data = await response.json();
        return data;
      } else {
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      console.log("❌ There is an error: ", error);
      return thunkAPI.rejectWithValue();
    }
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchTerm: "",
    searchResult: ["search Result []"],
    jobCategory: "",
    loading: false,
    error: false,
  },
  reducers: {},
  extraReducers: {
    [getResult.pending]: (state, action) => {
      return {
        ...state,
        loading: true,
      };
    },
    [getResult.fulfilled]: (state, action) => {
      return {
        ...state,
        loading: false,
        searchResult: action.payload,
      };
    },
    [getResult.rejected]: (state, action) => {
      return {
        ...state,
        loading: false,
        error: true,
      };
    },
  },
});

export default searchSlice.reducer;
