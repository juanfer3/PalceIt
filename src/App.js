import React from 'react';

import Navbar from 'react-materialize/lib/Navbar';
import NavItem from 'react-materialize/lib/NavItem';

import './App.css';
import logo from './logo.svg';

import MoviesList from './Components/Movies/MoviesList';
import ReservationMovie from './Components/Movies/ReservationMovie';

import { HashRouter, Switch, Route } from "react-router-dom"

function App() {
  return (
    <div>
        <Navbar

        

        className="blue darken-3"
        brand={<h2>PlaceIt</h2> } alignLinks="right"
        >
          <NavItem href="">
            Películas
          </NavItem>
          <NavItem href="">
            Reservaciones
          </NavItem>
        </Navbar>
        <br/>
        <br/>
        
        <HashRouter> {/* envolvemos nuestra aplicación en el Router  */}
              <Switch>
                <Route path='/' exact component={MoviesList} />
                <Route path='/movies_list' component={MoviesList}/>
                <Route path='/reservations_movies' component={ReservationMovie}/>
              </Switch>
        </HashRouter>
       {/*
            <Route >
              <Switch>
                <Route exact={true} path="/" component={MoviesList}/>
                <Route  path="/movies" component={MoviesList}/>
              </Switch>
            </Route>
       /* */}
      </div>
  );
}

export default App;
