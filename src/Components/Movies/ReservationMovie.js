import React, { Component } from 'react';

import { 
    Button, 
    Card, 
    Row, 
    Col, 
    TextInput ,
    CardTitle,
    Modal,
    Table,
    DatePicker
} from 'react-materialize';

import { getReservationMovies } from '../../Servicios/MoviesServices'
class ReservationMovie extends Component {
    constructor(props){
        super(props)
        this.state={
            reservations: [],
            reservations_list: [],
            //days: new Date('2014-04-03'),
            search: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    componentDidMount(){
        getReservationMovies().then(data => {
            console.log(data);
            
        
            this.setState({
                reservations: data,
                reservations_list: data
            })
            /* */
                
        });
     }

     handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })

              
    }

    render() {
        let list = []
        if(this.state.reservations){
            
 
            list = this.state.reservations
            .filter(value => {
                if(value.day_reservation.indexOf(this.state.search) >= 0){
                    
                    return value.day_reservation.indexOf(this.state.search) >= 0
                }
            })
            .map((res, index) => 
            <tr key={index}>
                <td>
                    {res.movie.name}
                </td>
                <td>
                    {res.day_reservation}
                </td>
                <td>
                    {res.name}
                </td>
                <td>
                    {res.email}
                </td>
                <td>
                    {res.identification}
                </td>
                
            </tr>
            );
            
            console.log(list);
            
            
        }

        return (
            <div className="container">

            <h2>
                { /*this.state.days.toDateString()*/ }
            </h2>
            

            <TextInput label="Filtar por fecha yyyy-mm-dd" 
            name="search"
            value={this.state.search}
            onChange={e => this.handleChange(e)}
            />

            <Table>
            <thead>
                <tr>
                    <th data-field="id">
                        Película
                    </th>
                    <th data-field="name">
                        Fecha Reserva
                    </th>
                    <th data-field="name">
                        Nombre Reservante
                    </th>
                    <th data-field="price">
                        Correo Electrónico
                    </th>
                    <th data-field="price">
                        Identificación
                    </th>
                </tr>
            </thead>
            <tbody>
                {list}
                
            </tbody>
            </Table>
            </div>
        );
    }
}

export default ReservationMovie;