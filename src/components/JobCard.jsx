import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addToFav, removeFromFav } from "../slices/favSlice";
import { useState } from "react";
const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToFavProp: (company) => {
      dispatch(addToFav(company));
    },
    removeFromFavProp: (index) => {
      dispatch(removeFromFav(index));
    },
  };
};

const JobCard = ({ job, addToFavProp, removeFromFavProp, index }) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{job.title}</h5>
        <Link to={`/${job.company_name}`}>
          <h6 className="card-subtitle mb-2 text-muted">{job.company_name}</h6>
        </Link>

        <p>{job.publicat}</p>
        <i
          className={liked ? "bi bi-heart-fill" : "bi bi-heart"}
          onClick={() => {
            addToFavProp(job.company_name);
            setLiked(true);
          }}
        ></i>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(JobCard);
