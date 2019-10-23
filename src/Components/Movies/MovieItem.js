import React, { useState } from 'react';

import { 
    Button, 
    Modal,
} from 'react-materialize';

import './Movies.css'

import ReservationMovieForm from './ReservationMovieForm'

export default function MoviesItem(props) {
    const { url, name, description, id } = props

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
                    <span className="card-title">{name}</span> <br/>
                        <Modal header={name} trigger={<Button>Reservar</Button>}>
                            <ReservationMovieForm
                            id={id}
                            description={description}
                            ></ReservationMovieForm>
                            
                        </Modal>
                    </div>
                    

                    
            </div>
          
        </div>   
    );
}