import React from 'react';

class MovieInfo extends React.Component {
    render () {
      return (
        <div>
          <h1>Title: {this.props.movie.Title}</h1>
          <img src={this.props.movie.Poster} alt={this.props.movie.Title} />
          <h3>Genre: {this.props.movie.Genre}</h3>
          <h4>Description: {this.props.movie.Plot}</h4>
        </div>
      )
    }
}
  
  export default MovieInfo;
