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

export default function MoviesItem(props) {
    const { url, name, description } = props
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
                    <div class="middle">
                        <Modal header="Modal Header" trigger={<Button>Reservar</Button>}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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