import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromFav } from "../slices/favSlice";

const mapStateToProps = (state) => {
  return {
    favCompanies: state.fav.favCompanies,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    removeFromFavProp: (index) => {
      dispatch(removeFromFav(index));
    },
  };
};

const Favorites = ({ favCompanies, removeFromFavProp }) => {
  return (
    <div>
      <h1>Favorites:</h1>
      <ul className="list-group">
        {favCompanies.map((company, index) => (
          <li className="list-group-item">
            <Link to={"/" + company}>{company}</Link>
            <span className="ml-3" onClick={() => removeFromFavProp(index)}>
              <i class="bi bi-x-square " style={{ color: "red" }}></i>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
