import React, {Component} from 'react';
import './landing.css'

import { Route, Switch } from 'react-router-dom';
import { Signup } from './signup';
import { Students } from './students';
import { Login } from './Login';
import SearchBar from './SearchBar';


export class Landing extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Switch>
                <Route path="/search" component={SearchBar} />
                <Route path="/signup" component={Signup} />
                <Route path="/students" component={Students} />
                <Route path="/login" component={Login}/>
                <Route path="/" component={Signup} />
            </Switch >
        )
    }
}
