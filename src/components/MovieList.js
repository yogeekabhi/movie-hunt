import React, { Component } from "react";
import { connect } from "react-redux";
import MovieCard from "./MovieCard";

class MovieList extends Component {
  render() {

    console.log(this.props.movies);
     const move = this.props.movies.map((movie, index) => {
            return (
              <div className="col-md-3 mb-5">
                <div className="card card-body bg-dark text-center h-100">
                  <img
                    className="w-100 mb-2"
                    src={movie.poster_path}
                    alt="Movie Cover"
                  />
                  <h5 className="text-light card-title">
                    {movie.title} - {movie.release_date}
                  </h5>
                  <a className="btn btn-primary" href="#">
                    Movie Details
                    <i className="fas fa-chevron-right" />
                  </a>
                </div>
              </div>
            );
          })


    return (
    <div className="row">
        MOVIE LIST
        {move}
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies.movies.results
});

export default connect(mapStateToProps)(MovieList);
