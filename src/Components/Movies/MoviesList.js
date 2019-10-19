import React, { Component } from 'react';

import { getMovies } from '../../Servicios/MoviesServices'
import MovieItem from './MovieItem';

import { 
    Button, 
    Card, 
    Row, 
    Col, 
    TextInput ,
    CardTitle,
} from 'react-materialize';




class MoviesList extends Component {

    constructor(props){
        super(props)
        this.state={
            movies: []
        }
    }

    componentDidMount(){
       getMovies().then(data => {
            console.log(data);
       });
    }


    render() {
        return (
            <div>
                <Row>
                    {
                        this.state.movies.map( movie=>
                            <MovieItem></MovieItem>
                        )  
                    }
                </Row>
            </div>
        );
    }
}

export default MoviesList;