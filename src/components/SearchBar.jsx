import React from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import { Dropdown, DropdownButton } from "react-bootstrap";
const SearchBar = ({ handleSearch, setSearchTerm, searchTerm, category }) => {
  return (
    <div className="d-flex">
      <input
        className="form-control mr-sm-2"
        type="search"
        placeholder="Search job"
        aria-label="Search"
        onChange={(e) => {
          setSearchTerm(e.target.value);
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
  );
};

export default SearchBar;
