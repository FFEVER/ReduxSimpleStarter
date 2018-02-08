import React, { Component } from 'react';

// Class-Based Component
class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = { term: 'Type me!' };
    }
    // We need render() for returning JSX otherwise we'll get an error.
    render() {
        // Every time you change the state, use 'this.setState()'
        return (
            <div className="search-bar">
                <input 
                value = {this.state.term}
                onChange={(event) => this.setState({ term: event.target.value})} />
            </div>
        );
    }
}



// Any file that import this file will automatically use SearchBar
export default SearchBar;