import React, { Component } from 'react'
import { connect } from 'react-redux'
import SearchMovie from './SearchMovie'
import Spinner from './Spinner'
import MovieList from './MovieList'

 class Landing extends Component {
    render() {

        const {loading} = this.props
        return (
            <div className="container">
                <SearchMovie/>
                {loading ? <Spinner/> : < MovieList />}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loading : state.movies.loading
})


export default connect(mapStateToProps)(Landing)