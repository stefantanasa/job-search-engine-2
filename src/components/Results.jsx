import React from "react";
import { Col, Container } from "react-bootstrap";
import JobCard from "./JobCard";

const Results = ({ searchResult }) => {
  return (
    <Container>
      <Col>
        {searchResult.map((job) => (
          <JobCard key={job._id} job={job} />
        ))}
      </Col>
    </Container>
  );
};

export default Results;
