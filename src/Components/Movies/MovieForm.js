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


import { saveMovie } from '../../Servicios/MoviesServices'

export default function MoviesForm(props) {
    const  { addMovie, movies } = props

    const [ name, setName ] = useState('')
    const [ description, setDescription ] = useState('')
    const [ imageUrl, setImageUrl ] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSwVkijfeK2buyFWNh_QxftbBr0TZ06OTmlqPuYwJCZYoufrcmy')
    const [ startDate, setStartDate ] = useState('')
    const [ endDate, setEndDate ] = useState('')

    const saveData = () => {
        let movie = {
            name,
            description,
            image_url: imageUrl,
            start_date: startDate,
            end_date: endDate,
        }

        saveMovie(movie)
            .then(data =>{
                addMovie(data)
            })
    }

     
    return (
        <div>
            <TextInput label="Título" onChange={ e => setName(e.target.value)} />
            <TextInput label="Sipnosis" onChange={ e => setDescription(e.target.value)}/>
            <TextInput label="url" value={imageUrl} onChange={ e => setImageUrl(e.target.value)}/>
            <DatePicker options={{ format: 'yyyy-mm-dd'}} label="Fecha inicial" onChange={ e => setStartDate(e)}/>
            <DatePicker options={{ format: 'yyyy-mm-dd'}} label="Fecha inicial" onChange={ e => setStartDate(e)}/>
            <Button onClick={saveData}> 
                <Icon left>
                    control_point 
                </Icon>
                Crear Nueva Película
            </Button>
        </div>
    );
    
}
