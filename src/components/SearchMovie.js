import React, { Component } from "react";
import { connect } from "react-redux";
import { searchMovie, fetchMovies } from "../actions/searchAction";

class SearchMovie extends Component {
  handleChange = (e) => {
    //  e.target.value;
    this.props.searchMovie(e.target.value);
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.fetchMovies(this.props.text);
  };

  render() {
    return (
      <div className="jumbotron jumbotron-fluid mt-5 text-center">
        <div className="container">
          <h1 className="display-4 mb-3">
            <i className="fa fa-search" /> Search for a movie, TV Series ..
          </h1>
          <form id="searchForm" onSubmit={this.handleSubmit}>
            <input
              type="text"
              className="form-control"
              name="searchText"
              placeholder="Search Movie"
              onChange={this.handleChange}
            />
            <button className="btn btn-primary btn-bg mt-3" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  text: state.movies.text,
});

export default connect(mapStateToProps, { searchMovie, fetchMovies })(
  SearchMovie
);
