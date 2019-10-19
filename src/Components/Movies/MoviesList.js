import React, { Component,useState } from 'react';

import './Movies.css'

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
       getMovies().then(rsp => {
        this.setState({
            movies: rsp
        })
            
       });
    }

    


    render() {
        console.log(this.state.movies);

        return (
            <div>
            
                <a className="waves-effect waves-light btn modal-trigger btn-rigth" href="#modal1">Crear Pelicula</a>

                <br/>
                <br/>

                <div className="row">
                { 
                    this.state.movies.map( (movie, index) => 
                     <MovieItem
                     url={movie.image_url}
                     description={movie.description}
                     name={movie.name}
                     key={index}
                     />
                  )  
                 }
                 </div>
            </div>
        );
    }
}

export default MoviesList;