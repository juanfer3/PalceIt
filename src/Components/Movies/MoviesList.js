import React, { Component } from 'react';

import { 
    Button, 
    Row, 
    Col, 
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
            search: ''
        }

        this.addMovie  = this.addMovie.bind(this)
        this.handleChange = this.handleChange.bind(this)
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
    }


    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })         
    }
    

    render() {
        let list = []
        if(this.state.movies.length > 0){
            
                if(this.state.search != ''){
                    list = this.state.movies
                    .filter((value) => {
                        if(new Date(value.start_date) <= new Date(this.state.search)&& new Date(value.end_date) >= new Date(this.state.search) ){
                            
                            return value;
                        }
                    })
                    .map((movie, i) => 
                        <MovieItem
                        key={i}
                        url={movie.image_url}
                        description={movie.description}
                        name={movie.name}
                        id={movie.id}
                        />
                    );
                }else{
                    list = this.state.movies
                    .map((movie, i) => 
                        <MovieItem
                        key={i}
                        url={movie.image_url}
                        description={movie.description}
                        name={movie.name}
                        id={movie.id}
                        />
                    );
                }
        }

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
                    
                </Row>
                <Col md={12} sm={12}>
                    <DatePicker 
                    label='Filtrar por Fecha yyyy-mm-dd'
                    options={{ format: 'yyyy-mm-dd', minDate:new Date('2019-10-10') }}  
                    onChange={ e => this.setState({ search: e })}/>
                </Col>
                        
                <div className="row">
                    {list}
                    <br/>
                 </div>
            </div>
        );
    }
}

export default MoviesList;