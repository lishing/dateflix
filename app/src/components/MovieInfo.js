import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';

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
	// viewMovie(){
	//   console.log("view movie")
	//   console.log(this.props.movie.title)
	// }
	render() {
		const singleMovie = this.props.singleMovie;
		console.log("title >>> ", singleMovie.title)
		console.log("description >>> ", singleMovie.description)
		return (
			<>
				<CardDeck>
					<Card>
						<Card.Body>
							<Card.Text>
							</Card.Text>
							<Button variant="primary">Add to Fav</Button>
						</Card.Body>
					</Card>
					<Card>
						<Card.Img variant="top" src="holder.js/100px160" />
						<Card.Body>
							<Card.Title>{singleMovie.title}</Card.Title>
							<Card.Text>
								{singleMovie.description}
							</Card.Text>
							<Button variant="primary">Go somewhere</Button>
						</Card.Body>
					</Card>
					<Card>
						<Card.Img variant="top" src="holder.js/100px160" />
						<Card.Body>
							<Card.Title>dadsasddas</Card.Title>
							{/* <Card.Text>
			          <MovieInfo />
			        </Card.Text> */}
							<Button variant="primary">Go somewhere</Button>
						</Card.Body>
					</Card>
				</CardDeck>
				<div>
					<h1>Brooklyn 99</h1>
					<img src="https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/product_image_aspect_switcher_170w/public/product-images/csm-tv/brooklyn.jpg?itok=Bhu5nsPf" alt="brooklyn99" />
					<p>Genre: Comedy</p>
					<p>Description: Ray Holt, an eccentric commanding officer, and his diverse and quirky team of odd detectives solve crimes in Brooklyn, New York City.</p>
				</div>
				<div>
					<h2>test</h2>
					{/* <h2>{this.props.movie.title}</h2> */}
					{/* <p>{this.props.movie.overview}</p> */}
					<p>test2</p>
					<input type="button" value="view more"></input>
					{/* <input type="button" onClick={this.viewMovie.bind(this)} value="view more"></input> */}
				</div>
			</>
		)
	}
}

export default MovieInfo;