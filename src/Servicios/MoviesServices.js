import axios from 'axios';

// const URL = 'https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=d6c8cd5b2e080637e0f3c77eeb023bf5&format=json'
const URL = 'http://localhost:3000/';


function getMovies() {
    
    return axios.get(URL + 'movies')
        .then(function(response){
            return response
        })
        
}

export {
    getMovies
}