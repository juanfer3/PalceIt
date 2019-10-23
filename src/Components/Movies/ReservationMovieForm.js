import React, { Component,useState  } from 'react';

import { 
    Button, 
    Card, 
    Row, 
    Col, 
    TextInput ,
    Icon,
    DatePicker
} from 'react-materialize';

import { saveReservationMovie } from '../../Servicios/MoviesServices'


export default function ReservationMovieForm(props) {
    const  { id, description } = props
    
    const [ identification, setIdentification ] = useState('')
    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSwVkijfeK2buyFWNh_QxftbBr0TZ06OTmlqPuYwJCZYoufrcmy')
    const [ day_reservation, setDay_reservation ] = useState('')

    

    const saveReservation = () => {
        let reservation = {
            movie_id: id,
            identification,
            name,
            email,
            day_reservation
        }

        console.log(reservation);
        

        
        
        saveReservationMovie(reservation)
            .then(data =>{
                console.log(data);
            })
        
    }

     
     
    return (

        

        <div>

            <p>
                <strong>Sinopsis:</strong><br/>
                { description }
            </p>
            <br/>

            <TextInput label="Identificación" onChange={ e => setIdentification(e.target.value)} />
            <TextInput label="Nombre" onChange={ e => setName(e.target.value)}/>
            <TextInput label="Email"  onChange={ e => setEmail(e.target.value)}/>
            <DatePicker options={{ format: 'yyyy-mm-dd', minDate:new Date('2019-10-10') }} label="Fecha inicial" onChange={ e => setDay_reservation(e)}/>
            <Button onClick={saveReservation}> 
                <Icon left>
                    cloud
                </Icon>
                Reservar
            </Button>
        </div>
    );
    
}
