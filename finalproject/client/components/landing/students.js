import React, {Component} from 'react';
import axios from 'axios';
import {url} from "../utils/RestUtils";

export class Students extends Component{
    students;

    constructor(props) {
        super(props);
        this.state = {
            students: [],
        }
    }

    componentDidMount() {
        axios.get(url + "student").then(
            function(response) {
                this.setState({ students: response.data });
            }.bind(this),
            function(error) {
                console.log(error)
            }
        );
    }

    render(){
        return(
            <div>
                {JSON.stringify(this.state.students)}
            </div>

        )
    }
}

