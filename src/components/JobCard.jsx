import React from "react";
import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  return (
    <ul className="cards">
      <li>
        <span className="card">
          <img
            src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            className="card__image"
            alt=""
          />
          <div className="card__overlay">
            <div className="card__header">
              <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                <path />
              </svg>
              <img
                className="card__thumb"
                src="https://images.unsplash.com/photo-1586473219010-2ffc57b0d282?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                alt=""
              />
              <div className="card__header-text">
                <h3 className="card__title">{job.title}</h3>
                <span className="card__status">{job.publicat}</span>
              </div>
            </div>
            <Link to={`/${job.company_name}`}>
              <h3
                style={{ textDecoration: "none" }}
                className="card__description"
              >
                {job.company_name}
              </h3>
              <i className="bi bi-heart"></i>
              <i className="bi bi-heart-fill"></i>
            </Link>
            <p></p>
          </div>
        </span>
      </li>
    </ul>
  );
};

export default JobCard;
