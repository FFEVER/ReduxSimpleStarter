// Official Modules
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'
// User Modules
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';


// API_KEY for Google API
const API_KEY = "AIzaSyDwHbIP5KGEY3wzJpYbKy3OiLxsfdOEgug";

// To install 'youtube search API' =>$npm install --save youtube-api-search

class App extends Component {
    constructor(props){
        super(props);

        this.state = { videos: []};

        // Search function from Youtube API
        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({ videos }); // equal to this.setState({videos:videos});
        });
    }
    render() {
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />,document.querySelector('.container')); // <App /> is React.createElement(App, null);

