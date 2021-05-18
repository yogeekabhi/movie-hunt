import React, { Component } from "react";

export default class SearchMovie extends Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid mt-5 text-center">
        <div className="container">
          <h1 className="display-4 mb-3">
            <i className="fa fa-search" /> Search for a movie, TV Series ..
          </h1>
          <form id="searchForm">
            <input
              type="text"
              className="form-control"
              name="searchText"
              placeholder="Search Movie"
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
