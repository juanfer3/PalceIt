import React from 'react';
import logo from './logo.svg';
import './App.css';


import MoviesList from './Components/Movies/MoviesList';
import Navbar from 'react-materialize/lib/Navbar';

function App() {
  return (
    <div>
        <Navbar/>
        <br/>
        <br/>
        <br/>
        <br/>
        <MoviesList/>
       
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
