import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component{
    state = { images: [] };

    async onSearchSubmit(term) {
        const response = await axios
        .get('https://api.unsplash.com/search/photos', {
            params: {
                query: term
            },
            headers: {
                Authorization: 'Client-ID 8376644ee9b97c77bd1af4155d1d5a07631a98cca889682bf2c57d303d8c14ae'
            }
        })

        console.log(response.data.results)
    }

    render() {        
        return (
        <div className="ui container" style={{marginTop: '10px'}}>
            <SearchBar onSubmit={this.onSearchSubmit} />
        </div>
        )
    }
}


export default App;