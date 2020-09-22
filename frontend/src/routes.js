import React from 'react';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Main from './pages/main';
import Registro from './pages/registro';
import Dashboard from './pages/dashboard';


const Routes =()=>(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main}/>
            <Route exact path="/registro" component={Registro}/>
            <Route exact path='/dashboard' component={Dashboard}/>
        </Switch>
    </BrowserRouter>

);


export default Routes;