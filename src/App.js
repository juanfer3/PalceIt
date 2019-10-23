import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter, Switch, Route } from "react-router-dom"
//import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MoviesList from './Components/Movies/MoviesList';
import ReservationMovie from './Components/Movies/ReservationMovie';
import Navbar from 'react-materialize/lib/Navbar';

function App() {
  return (
    <div>
        <Navbar
        className="blue darken-3"
        brand={<h2>PlaceIt</h2> } alignLinks="right"
        />
        <br/>
        <br/>
        
        <HashRouter> {/* envolvemos nuestra aplicación en el Router  */}
              <Switch>
                <Route path='/' exact component={MoviesList} />
                <Route path='/movies_list' component={MoviesList}/>
                <Route path='/reservations_movies/:id' component={ReservationMovie}/>
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
