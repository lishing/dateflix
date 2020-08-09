import React from 'react';
import MovieInfo from './MovieInfo.js'
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

class SearchBar extends React.Component {
    // constructor (props) {
    //   super(props)
    //   this.state = {
    //     baseURL: 'http://www.omdbapi.com/?',
    //     apikey: 'apikey=' + '53ab0f24',
    //     query: '&t=',
    //     movieTitle: '',
    //     searchURL: '',
    //     movie: ''
    //   }
    //   this.handleSubmit = this.handleSubmit.bind(this)
    //   this.handleChange = this.handleChange.bind(this)
    // }
    // handleChange (event) {
    //   this.setState({ [event.target.id]: event.target.value })
    // }
    // handleSubmit (event) {
    //   event.preventDefault()
    //   this.setState({
    //     searchURL: this.state.baseURL + this.state.apikey + this.state.query + this.state.movieTitle
    //   }, () => {
    //     fetch(this.state.searchURL)
    //       .then(response => {
    //         return response.json()
    //       }).then(json => this.setState({
    //         movie: json,
    //         movieTitle: ''
    //       }),
    //       err => console.log(err))
    //   })
    // }
    render () {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <FormControl id='movieTitle' type="text" placeholder="Search" className="mr-sm-2" value={this.state.movieTitle}
              onChange={this.handleChange} />
            <label for='movieTitle'></label> 
            <input
              id='movieTitle'
              type='text'
              value={this.state.movieTitle}
              onChange={this.handleChange}
            />
            <input
              type='submit'
              value='Find Movie Info'
            />
            <Button variant="outline-info">Search</Button>
          </form>
          {(this.state.movie)
            ? <MovieInfo movie={this.state.movie} />
            : ''
          }
        </div>
      )
    }
  }

export default SearchBar;