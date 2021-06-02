import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import Login from './Login';
import Signup from './Signup';
import Players from './Players';
import GameInfo from './GameInfo';
import News from './News';
import Teams from './Teams';
import Homepage from './Homepage';

function Routes() {
    return (
        <div className='Routes'>
            <Switch>
                <Route exact path='/'>
                    <Homepage />
                </Route>

                <Route exact path='/login'>
                    <Login />
                </Route>

                <Route exact path='/signup'>
                    <Signup />
                </Route>
                
                <Route exact path='/players'>
                    <Players />
                </Route>

                <Route exact path='/game-info'>
                    <GameInfo />
                </Route>
                
                <Route exact path='/news'>
                    <News />
                </Route>

                <Route exact path='/teams'>
                    <Teams />
                </Route>

                <Redirect to='/' />

            </Switch>
        </div>)
}

export default Routes;