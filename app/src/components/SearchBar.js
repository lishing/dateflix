import React from 'react';

class OMDBQueryForm extends React.Component {
    // to uncomment when it's fixed, with API key
    // constructor (props) {
    //   super(props)
    //   this.state = {
    //     baseURL: 'http://www.omdbapi.com/?',
    //     //apikey: 'apikey=' + '98e3fb1f',
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
        <React.Fragment>
          <form onSubmit={this.handleSubmit}>
            <label for='movieTitle'>Title</label>
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
          </form>
          {(this.state.movie)
            ? <MovieInfo movie={this.state.movie} />
            : ''
          }
        </React.Fragment>
      )
    }
  }

// const Movie = (props) =>{
//     return(
//         <label htmlFor="search">Search by movie</label>
//         <input type="text" value={props.inputValue} onChange={props.moveFilderOnChange}/>
        
//     )
// }

// class MovieList extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             search: 'Put your movie search here'
//         };
//     }
//     updateSearch (event){
//         this.setState({search: event.target.value.substr(0, 20)});
//     }
//     render (){
//         let filteredMovies = this.props.movies.filter(
//             (movies) => { 
//                 return movie.title.indexOf(this.state.search) !== -1; 
//             }
//         )
//         return(
//             <div>
//                 <ul>
//                     {filteredMovies.props.MovieList.map((movie)=>{
//                         return <Movies movie={movie} key ={movie.id}/>
//                     })}
//                 </ul>
//                 <input type="text" value={this.state.search}></input>
//             </div>
//         )
//     }
// }

export default SearchBar;