import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getResult = createAsyncThunk(
  "search/getResult",
  async (query, thunkAPI) => {
    try {
      let response = await fetch(
        `https://strive-jobs-api.herokuapp.com/jobs?search=${query}&limit=10`
      );
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
    searchResult: [],
    jobCategory: "",
    loading: false,
    error: false,
  },
  reducers: {
    getTerm: (state, action) => ({
      ...state,
      searchTerm: action.payload,
    }),
  },
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
        searchResult: action.payload.data,
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
export const { getTerm } = searchSlice.actions;
