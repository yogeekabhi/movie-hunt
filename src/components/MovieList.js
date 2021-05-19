import React, { Component } from "react";
import { connect } from "react-redux";
import MovieCard from "./MovieCard";

class MovieList extends Component {
  render() {

    const content = this.props.movies.map((movie, index) => <MovieCard key={index} movie={movie}/>)

    return (
    <div className="row">
        {content}
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies.movies
});

export default connect(mapStateToProps)(MovieList);
