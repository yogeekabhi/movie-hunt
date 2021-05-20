import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchMovie} from '../actions/searchAction'

export class Movie extends Component {

    componentDidMount(){
        
        this.props.fetchMovie(this.props.match.params.id)
    }

    render() {
       
       console.log(this.props.movie);
        return (
            <div>
                <h1>Movie</h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    movie : state.movies.movie
})


export default connect(mapStateToProps, {fetchMovie})(Movie)
