import React, { useState } from 'react';


import { 
    Button, 
    Card, 
    Row, 
    Col, 
    TextInput ,
    CardTitle,
} from 'react-materialize';

export default function MoviesList(props) {
    const { url, name, description } = props
    console.log(props)
    return (
        <div className="col s12 m4">

            <img
            width="200"
            src={url}
            />
            <br/>
            <span className="card-title">{name}</span>
            <p>
                {description}
            </p>

          
        </div>   
    );
}