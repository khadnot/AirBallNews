import React from 'react';

import Homepage from './Homepage';
import Login from './Login';
import Signup from './Signup';
import './App.css';

import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Route exact path='/'>
          <Homepage />
        </Route>
        <Route exact path='/login'>
          <Login />
        </Route>
        <Route exact path='/signup'>
          <Signup />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
