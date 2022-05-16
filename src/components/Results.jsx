import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import JobCard from "./JobCard";
import { connect } from "react-redux";
import { getResult } from "../slices/searchSlice";

const mapStateToProps = (state) => ({
  searchResultProp: state.search.searchResult,
});
const mapDispatchToProps = (dispatch) => ({
  getSearchResultProp: (query) => {
    dispatch(getResult(query));
  },
});

const Results = ({ searchResult, getSearchResultProp, searchResultProp }) => {
  useEffect(() => {}, []);

  return (
    <Container>
      <Row>
        {searchResult &&
          searchResult.map((job, index) => (
            <JobCard key={job._id} job={job} index={index} />
          ))}
      </Row>
    </Container>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Results);
