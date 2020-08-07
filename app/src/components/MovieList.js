import React from 'react';
import MovieInfo from './MovieInfo.js';

class MovieList extends React.Component {
    render () {
      console.log("something", this.props)
      return (
        <div>
          <MovieInfo movie={this.props.somethingelse[0]}/>
          <MovieInfo movie={this.props.somethingelse[1]}/>
        </div>
      )
    }
}
export default MovieList;

