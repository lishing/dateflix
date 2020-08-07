import React from 'react';
import MovieList from './MovieList.js'

const Movie = (props) =>{
    return(
        <label htmlFor="search">Search by movie</label>
        <input type="text" value={props.inputValue} onChange={props.moveFilderOnChange}/>
        
    )
}

class MovieList extends React.Component {
    constructor() {
        super();
        this.state = {
            search: 'Put your movie search here'
        };
    }
    updateSearch (event){
        this.setState({search: event.target.value.substr(0, 20)});
    }
    render (){
        return(
            <div>
                <ul>
                    
                </ul>
            </div>
        )
    }
}

export default SearchBar;