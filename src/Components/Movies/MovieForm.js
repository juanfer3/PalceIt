import React, { Component,useState  } from 'react';

import { 
    Button, 
    Card, 
    Row, 
    Col, 
    TextInput ,
    Icon,
    DatePicker,

} from 'react-materialize';


import { saveMovie } from '../../Servicios/MoviesServices'

export default function MoviesForm(props) {
    const  { addMovie, movies } = props
    
    const [ name, setName ] = useState('')
    const [ description, setDescription ] = useState('')
    const [ imageUrl, setImageUrl ] = useState('')
    const [ startDate, setStartDate ] = useState('')
    const [ endDate, setEndDate ] = useState('')
    const [ alert, setAlert ] = useState(false)

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
                
                setName('')
                setDescription('')
                setStartDate('')
                setEndDate('')
                setImageUrl('')

                setAlert(true)

                addMovie(data)

                setTimeout(() => {
                    setAlert(false)
                  }, 3000);
            })
    }

     
    return (
        <div>

            <div className={alert ? 'card-panel white-text teal darken-1' : 'hidden'}>
                Resgistro Exitoso
            </div>
            <TextInput label="Título" value={name} onChange={ e => setName(e.target.value) }  />
            <TextInput label="Sipnosis"  value={description} onChange={ e => setDescription(e.target.value)}/>
            <TextInput label="url" value={imageUrl} onChange={ e => setImageUrl(e.target.value)}/>
            <DatePicker options={{ format: 'yyyy-mm-dd'}} label="Fecha inicial" onChange={ e => setStartDate(e)} value={startDate}/>
            <DatePicker options={{ format: 'yyyy-mm-dd'}} label="Fecha inicial" onChange={ e =>  setEndDate(e)}  value={endDate}/>
            <Button onClick={saveData}> 
                <Icon left>
                    control_point 
                </Icon>
                Crear Nueva Película
            </Button>
        </div>
    );
    
}
