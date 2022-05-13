import React from "react";
import JobCard from "./JobCard";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const CompanyDetails = () => {
  const [companyJobs, setCompanyJobs] = useState([]);

  let company = useParams();

  const handleCompanyJobs = async () => {
    try {
      let response = await fetch(
        `https://strive-jobs-api.herokuapp.com/jobs?company=${company.company}`
      );
      if (response.ok) {
        let data = await response.json();
        setCompanyJobs(data.data);
        console.log(companyJobs);
      }
      console.log("✅Search went well!");
    } catch (error) {
      console.log("❌ There is an error: ", error);
    }
  };
  useEffect(() => {
    handleCompanyJobs();
  }, []);

  return (
    <div className="">
      <h1>{company.company}</h1>

      <div className="card-body">
        {companyJobs.map((job) => (
          <JobCard key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default CompanyDetails;
