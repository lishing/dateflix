import React from 'react';

// function MovieCard(props){
//   return(
//     <div className="movie-card">
//       <img src={props.movie.image}/>
//       <h1>Title: {props.movie.title}</h1>
//       <h3>Genre: {props.movie.genre}</h3>
//       <h4>Description: {props.movie.description}</h4>
//       <hr/>
//     </div>
//   )
// }

class MovieInfo extends React.Component {
    render () {
      return (
        <div>
        <h1>Brooklyn 99</h1>
        <img src="https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/product_image_aspect_switcher_170w/public/product-images/csm-tv/brooklyn.jpg?itok=Bhu5nsPf" alt="brooklyn99"/>
        <p>Genre: Comedy</p>
        <p>Description: Ray Holt, an eccentric commanding officer, and his diverse and quirky team of odd detectives solve crimes in Brooklyn, New York City.</p>
      </div>
      )
    }
}

export default MovieInfo;
