// Official Modules
import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'
// User Modules
import SearchBar from './components/search_bar';


// API_KEY for Google API
const API_KEY = "AIzaSyDwHbIP5KGEY3wzJpYbKy3OiLxsfdOEgug";

YTSearch({key: API_KEY, term: 'surfboards'},function(data){
    console.log(data);
})

// To install 'youtube search API' =>$npm install --save youtube-api-search


// Create a new component. This component should produce some HTML.
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}
/*ES5 Syntax
const App = function(){
    return <div>Hi!</div>;
}
*/

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />,document.querySelector('.container')); // <App /> is React.createElement(App, null);

