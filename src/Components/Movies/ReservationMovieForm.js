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
    const [ email, setEmail ] = useState('')
    const [ day_reservation, setDay_reservation ] = useState('')
    const [ alert, setAlert ] = useState(false)

    const saveReservation = () => {
        let reservation = {
            movie_id: id,
            identification,
            name,
            email,
            day_reservation
        }


        saveReservationMovie(reservation)
            .then(data =>{
                setIdentification('')
                setName('')
                setEmail('')
                setDay_reservation('')
                setAlert(true)
                setTimeout(() => {
                    setAlert(false)
                  }, 3000);
               
            })
        
    }

     
     
    return (

        <div>
            <p>
                <strong>Sinopsis:</strong><br/>
                { description }
            </p>
            <br/>

            <div className={alert ? 'card-panel white-text teal darken-1' : 'hidden'}>
                Resgistro Exitoso
            </div>

            <TextInput label="Identificación" value={identification} onChange={ e => setIdentification(e.target.value)} />
            <TextInput label="Nombre" value={name} onChange={ e => setName(e.target.value)}/>
            <TextInput label="Email" value={email} onChange={ e => setEmail(e.target.value)}/>
            <DatePicker value={day_reservation} options={{ format: 'yyyy-mm-dd', minDate:new Date('2019-10-10') }} label="Dia de reserva" onChange={ e => setDay_reservation(e)}/>
            <Button onClick={saveReservation}> 
                <Icon left>
                    cloud
                </Icon>
                Reservar
            </Button>
        </div>
    );
    
}
