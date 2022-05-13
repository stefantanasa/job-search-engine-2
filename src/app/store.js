import { configureStore } from "@reduxjs/toolkit";
import companyReducer from "../slices/companySlice";
import favReducer from "../slices/favSlice";
import searchReducer from "../slices/searchSlice";

export default configureStore({
  reducer: {
    company: companyReducer,
    fav: favReducer,
    search: searchReducer,
  },
});
