import React from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import { Dropdown, DropdownButton } from "react-bootstrap";
import Results from "./Results";
import { connect } from "react-redux";
import { getTerm } from "../slices/searchSlice";
import { getResult } from "./../slices/searchSlice";

const mapStateToProps = (state) => {
  return {
    searchTermProp: state.search.searchTerm,
    searchResultProp: state.search.searchResult,
  };
};
const mapDispatchToProps = (dispatch) => ({
  getSearchTermProp: (e) => {
    dispatch(getTerm(e));
  },
  getSearchResultProp: (query) => {
    dispatch(getResult(query));
  },
});

const SearchBar = ({
  searchResultProp,
  getSearchResultProp,
  getSearchTermProp,
  searchTermProp,
  // handleSearch,
  // setSearchTerm,
  // searchTerm,
  // category,
  // searchResult,
}) => {
  return (
    <div className="container">
      <div className="row">
        <input
          className="form-control mr-sm-2 "
          type="search"
          placeholder="Search job"
          aria-label="Search"
          onChange={(e) => {
            getSearchTermProp(e.target.value);
            console.log(e.target.value);
          }}
        />
        {/* <DropdownButton
        id="dropdown-basic-button"
        title="Category"
        variant={"success"}
      >
        {category &&
          category.map((cat) => <Dropdown.Item href="#">{cat}</Dropdown.Item>)}
      </DropdownButton> */}
        <button
          onClick={() => {
            getSearchResultProp(searchTermProp);
          }}
          className="btn btn-outline-success my-2 my-sm-0"
          type="submit"
        >
          Search
        </button>
      </div>
      <div className="row">
        <Results searchResult={searchResultProp} />
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
