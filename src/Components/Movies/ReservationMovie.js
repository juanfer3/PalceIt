import React, { Component } from 'react';

import { 
    Button, 
    Card, 
    Row, 
    Col, 
    TextInput ,
    CardTitle,
    Modal,
    Table
} from 'react-materialize';

import { getReservationMovies } from '../../Servicios/MoviesServices'
class ReservationMovie extends Component {
    constructor(props){
        super(props)
        this.state={
            reservations: [],
            reservations_list: [],
            search: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    componentDidMount(){
        getReservationMovies().then(data => {
        
        
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

        if(this.state.search != ''){
            
            
        }else{
            console.log('vacio');
            
            let reservations = this.state.reservations
            this.setState({
                reservations_list: reservations,
            })
        }        
    }

    render() {

        return (
            <div className="container">

            <TextInput label="Título" 
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
                        Nombre Reservante
                    </th>
                    <th data-field="price">
                        Correo Electrónico
                    </th>
                    <th data-field="price">
                        Celular
                    </th>
                </tr>
            </thead>
            <tbody>
                {

                
                    this.state.reservations_list.map((res, index) =>
                    <tr key={index}>
                        <td>
                            {res.movie.name}
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
                    )
                    /* */
                }
            </tbody>
            </Table>
            </div>
        );
    }
}

export default ReservationMovie;