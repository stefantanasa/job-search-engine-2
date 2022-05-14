import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import JobCard from "./JobCard";

const Results = ({ searchResult }) => {
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

export default Results;
