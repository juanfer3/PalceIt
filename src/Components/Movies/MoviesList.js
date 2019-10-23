import React, { Component,useState } from 'react';

import './Movies.css'

import { getMovies } from '../../Servicios/MoviesServices'

import { 
    Button, 
    Card, 
    Row, 
    Col, 
    TextInput ,
    CardTitle,
    Modal,
    Icon
} from 'react-materialize';

import MovieItem from './MovieItem';
import MovieForm from './MovieForm';



class MoviesList extends Component {

    constructor(props){
        super(props)
        this.state={
            movies: []
        }

        this.addMovie  = this.addMovie.bind(this)

    }

    componentDidMount(){
       getMovies().then(rsp => {
        this.setState({
            movies: rsp
        })
            
       });
    }

    addMovie(movie){
        
        this.state.movies.push(movie)
        
        this.setState({
            movies: this.state.movies
        })
        /* */
    }
    

    render() {
        console.log(this.state.movies);

        return (
            <div className="container">
                <Modal className="modalMovieForm" header="Crear Película" trigger={
                <Button> 
                    <Icon left>
                        cloud
                    </Icon>
                    Crear Nueva Película
                </Button>}>
                    
                    <MovieForm
                    addMovie={this.addMovie}
                    />

                </Modal>
                
                <br/>
                <br/>



              

                <div className="row">
                { 
                    this.state.movies.map( (movie, i) => 
                     <MovieItem
                     key={i}
                     url={movie.image_url}
                     description={movie.description}
                     name={movie.name}
                     />
                  )  
                 }
                 </div>
            </div>
        );
    }
}

export default MoviesList;