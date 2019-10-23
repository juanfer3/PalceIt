import React, { Component,useState } from 'react';

import { 
    Button, 
    Card, 
    Row, 
    Col, 
    TextInput ,
    CardTitle,
    Modal,
    Icon,
    DatePicker
} from 'react-materialize';

import MovieForm from './MovieForm';
import MovieItem from './MovieItem';

import { getMovies } from '../../Servicios/MoviesServices'


class MoviesList extends Component {

    constructor(props){
        super(props)
        this.state={
            movies: [],
            search: []
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
                                    control_point
                                </Icon>
                                Crear Nueva Película
                            </Button>}>
                                
                                <MovieForm
                                addMovie={this.addMovie}
                                />

                        </Modal>
                    </Col>
                    <Col s={12}>
                        <TextInput label="Filtar por fecha yyyy-mm-dd" 
                        name="search"
                        value={this.state.search}
                        onChange={e => this.handleChange(e)}
                        />
                    </Col>
                </Row>
                        
                
            

              

                <div className="row">
                { 
                    this.state.movies.map( (movie, i) => 
                     <MovieItem
                     key={i}
                     url={movie.image_url}
                     description={movie.description}
                     name={movie.name}
                     id={movie.id}
                     />
                  )  
                 }
                 </div>
            </div>
        );
    }
}

export default MoviesList;