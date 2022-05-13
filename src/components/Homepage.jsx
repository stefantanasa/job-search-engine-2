import React from "react";
import Results from "./Results";
import SearchBar from "./SearchBar";
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

const Homepage = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");

  const handleSearch = async (job) => {
    try {
      let response = await fetch(
        `https://strive-jobs-api.herokuapp.com/jobs?search=${job}&limit=10`
      );
      if (response.ok) {
        let data = await response.json();
        setSearchResult(data.data);
        console.log("search result: ", data.data);
      }
      console.log("✅Searchwent well!");
    } catch (error) {
      console.log("❌ There is an error: ", error);
    }
  };
  const handleCategory = async () => {
    try {
      let response = await fetch(
        `https://strive-jobs-api.herokuapp.com/jobs/categories`
      );
      if (response.ok) {
        let data = await response.json();
        setCategory(data);
      }
      console.log("✅Geting category went well!");
    } catch (error) {
      console.log("❌ There is an error: ", error);
    }
  };
  console.log("Search result: ", searchResult);
  useEffect(() => {
    handleCategory();
    console.log(category);
  }, []);
  return (
    <Container
      style={{ height: "100vh" }}
      className="d-flex justify-content-center align-items-center"
    >
      <div>
        <SearchBar
          className="bg-dark"
          handleSearch={handleSearch}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          category={category}
        />
        <Results searchResult={searchResult} />
      </div>
    </Container>
  );
};

export default Homepage;
