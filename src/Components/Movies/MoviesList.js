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
       // console.log(this.state.movies);

        return (
            <div className="container">
                <Row>
                    <Col sx={6}>
                        <h3>Películas</h3>
                    </Col>
                    <Col offset='s3' s={3}>
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
                    </Col>
                </Row>
                        
                
                <br/>
                <br/>

                <MovieItem
                     url={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnkSFmodpznlVPUFqL1BZj1j4Ry6JElOlFRp0nkIqhOUmtksbsdA'}
                     description={'movie.description'}
                     name={'movie.name'}
                     id={1}
                    />

                <MovieItem
                     url={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnkSFmodpznlVPUFqL1BZj1j4Ry6JElOlFRp0nkIqhOUmtksbsdA'}
                     description={'movie.description2'}
                     name={'movie.name2'}
                     id={2}
                    />

              

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