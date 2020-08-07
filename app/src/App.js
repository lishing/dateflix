import React from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './components/MovieList.js';
import SearchBar from './components/SearchBar';

const movies = [{title: "titanic", description: "blablabla"}, 
                {title: "simba", description: "blablabla"}, 
                {title: "little mermaid", description: "blablabla"}];

class App extends React.Component {
  render () {
    return (
      <div>
        {/* <Header /> */}
        <Movie somethingelse={movies}/>
        <SearchBar />
      </div>
    )
  }
}

export default App;
