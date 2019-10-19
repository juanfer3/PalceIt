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
    const [count, setCount] = useState(0)
    
    console.log(props)
    return (
        <Col m={4} s={12}>
            <div class="card">
                <div class="card-image">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSwVkijfeK2buyFWNh_QxftbBr0TZ06OTmlqPuYwJCZYoufrcmyle-1.jpg"/>
                <span class="card-title">Card Title</span>
                </div>
                <div class="card-content">
                <p>I am a very simple card. I am good at containing small bits of information.
                I am convenient because I require little markup to use effectively.</p>
                </div>
                <div class="card-action">
                <a href="#">This is a link</a>
                </div>
            </div>
        </Col>
    );
}