import React, { Component } from 'react'

export class MovieCard extends Component {
    render() {
        const {movie} = this.props
        console.log(this.props.movie);
        return (
                <div className="col-md-3 mb-5">
                    <div className="card card-body bg-dark text-center h-100">
                        <img src={movie.backdrop_path} alt="Movie Cover" />
                        <h5 className="text-light card-title">{movie.title} - {movie.release_date}</h5>
                        <a className="btn btn-primary" href="#">
                        Movie Details
                        <i className="fas fa-chevron-right"/>
                        </a>
                    </div>
                </div>
        )
    }
}

export default MovieCard
