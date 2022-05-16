import React from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import { Dropdown, DropdownButton } from "react-bootstrap";
import Results from "./Results";
import { connect } from "react-redux";
import { getSearchTerm } from "../slices/searchSlice";

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
  getSearchTermProp: (e) => {
    dispatch(getSearchTerm(e));
  },
});

const SearchBar = ({
  getSearchTermProp,
  handleSearch,
  setSearchTerm,
  searchTerm,
  category,
  searchResult,
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
            handleSearch(searchTerm);
          }}
          className="btn btn-outline-success my-2 my-sm-0"
          type="submit"
        >
          Search
        </button>
      </div>
      <div className="row">
        <Results searchResult={searchResult} />
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
