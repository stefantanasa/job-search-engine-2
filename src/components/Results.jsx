import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import JobCard from "./JobCard";
import { connect } from "react-redux";
import { getResult } from "../slices/searchSlice";

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
  getSearchResultProp: (query) => {
    dispatch(getResult(query));
  },
});

const Results = ({ searchResult, getSearchResultProp }) => {
  useEffect(() => {
    getSearchResultProp("dev");
  }, []);

  return (
    <Container>
      <Row>
        {searchResult.map((job, index) => (
          <JobCard key={job._id} job={job} index={index} />
        ))}
      </Row>
    </Container>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Results);
