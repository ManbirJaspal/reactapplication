import React, {Component} from 'react';
import './landing.css'

import { Signup } from "./signup";

export class Landing extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Signup />
        )
    }
}