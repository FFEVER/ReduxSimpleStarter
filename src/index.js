// Official Modules
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'
// User Modules
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './compone nts/video_detail';


// API_KEY for Google API
const API_KEY = "AIzaSyDwHbIP5KGEY3wzJpYbKy3OiLxsfdOEgug";

// To install 'youtube search API' =>$npm install --save youtube-api-search

class App extends Component {
    constructor(props){
        super(props);

        this.state = { 
            videos: [],
            selectedVideo: null
        };
        this.videoSearch('surfboards');
    }

    videoSearch(term) {
        // Search function from Youtube API
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0],
            }); // 
        });
    }
    render() {
        return (
            <div>
                <SearchBar onSearchTermChange={(term) => this.videoSearch(term)}/>
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos} />
            </div>
        );
    }
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />,document.querySelector('.container')); // <App /> is React.createElement(App, null);

