import React from 'react';
import MovieInfo from './MovieInfo.js';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';

class MovieList extends React.Component {
    render () {
      return (
        <CardDeck>
          <Card>
            <Card.Body>
              <Card.Text>
                <MovieInfo description={this.props.description}/>
              </Card.Text>
              <Button variant="primary">Add to Fav</Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title><MovieInfo /></Card.Title>
              {/* <Card.Text>
                <MovieInfo />
              </Card.Text> */}
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title><MovieInfo /></Card.Title>
              {/* <Card.Text>
                <MovieInfo />
              </Card.Text> */}
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </CardDeck>
      )
    }
}

export default MovieList;

