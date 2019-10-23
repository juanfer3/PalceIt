import React, { useState } from 'react';

import './Movies.css'
import { 
    Button, 
    Card, 
    Row, 
    Col, 
    TextInput ,
    CardTitle,
    Modal,
} from 'react-materialize';

import ReservationMovieForm from './ReservationMovieForm'

export default function MoviesItem(props) {
    const { url, name, description, id } = props
    console.log(props)
    return (
        <div className="col s12 m4 ">
            <div className="container_img">
                    <img
                    className="image_movie"
                    width="200"
                    height="300"
                    src={url}
                    />
                    <div className="middle">
                        <Modal header="Modal Header" trigger={<Button>Reservar</Button>}>
                            <ReservationMovieForm
                            id={id}
                            ></ReservationMovieForm>
                        </Modal>
                    </div>
                    <span className="card-title">{name}</span>
                    <p>
                        {description}
                    </p>

                    
            </div>
          
        </div>   
    );
}