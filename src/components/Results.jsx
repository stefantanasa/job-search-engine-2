import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import JobCard from "./JobCard";
import { connect } from "react-redux";

const mapStateToProps = (state) => {};
const mapDispatchToProps = (dispatch) => {
getSearchResultProp: (url) => {
  dispatch(getResult(url));
};
const Results = ({ getSearchResultProp }) => {
  return (
    <Container>
      <Row>
        {getSearchResultProp("https://strive-jobs-api.herokuapp.com/jobs?search=$dev&limit=10").map((job, index) => (
          <JobCard key={job._id} job={job} index={index} />
        ))}
      </Row>
    </Container>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Results);
