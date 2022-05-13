import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    favCompanies: state.fav.favCompanies,
  };
};

const Favorites = () => {
  return <h1>Favorites</h1>;
};

export default connect(mapStateToProps)(Favorites);
