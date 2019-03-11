import React, {Component} from 'react';
import {signUp} from "../utils/RestUtils";
//import Select from 'react-select';

class Signup extends Component{
    constructor(props) {
        super(props);
        this.state =
            {
                emailId: '',
                fname: '',
                lname: '',
                password: ''
                address1: '',
                city: '',
                state: '', 
                zip: 'null',
                studentType: '',
                majorDept: '',
                gradAssistant: ''
                
            };
    }

    handleSubmit (){
        signUp(this.state.fname, this.state.lname, this.state.emailId, this.state.password);
    }

    handleChange(event) {
        this.setState({ 
            [event.target.fname]: event.target.value,
            [event.target.lname]: event.target.value,
            [event.target.emailId]: event.target.value,
            [event.target.password]: event.target.value
            [event.target.address1]: event.target.value,
            [event.target.address2]: event.target.value,
            [event.target.city]: event.target.value,
            [event.target.state]: event.target.value,
            [event.target.zip]: event.target.value,
            [event.target.studentType]: event.target.value,
            [event.target.majorDept]: event.target.value,
            [event.target.gradAssistant]: event.target.value 
        });
    }
    
//    const usStates = [
//  { value: 'alabama', label: 'Alabama' },
//  { value: 'alaska', label: 'Alaska' },
//  { value: 'arizona', label: 'Vanilla' },
//  { value: 'arkansas', label: 'Arkansas' },
//  { value: 'california', label: 'California' },
//  { value: 'colorado', label: 'Colorado' },
//  { value: 'Connecticut', label: 'Connecticut' },
//  { value: 'delaware', label: 'Delaware' },
//  { value: 'florida', label: 'Florida' },
//  { value: 'georgia', label: 'Georgia' },
//  { value: 'hawaii', label: 'Hawaii' },
//  { value: 'idaho', label: 'Idaho' },
//  { value: 'illinois', label: 'Illinois' },
//  { value: 'indiana', label: 'Indiana' },
//  { value: 'iowa', label: 'Iowa' },
//  { value: 'kansas', label: 'Kansas' },
//  { value: 'kentucky', label: 'Kentucky' },
//  { value: 'louisiana', label: 'Louisiana' },
//]
//    

    render(){
        return(
            <form onSubmit={this.handleSubmit.bind(this)}>
                <div className="container">
                    <div className="row justify-content-center align-items-center css-form-cont">
                        <div className="col-md-6">
                            <h4 className="text-center">Create account</h4>
                            <br/>
                            <div className="form-group">
                                <label htmlFor="fname">First Name</label><span/>
                                <input type="text" className="form-control" name="fname" id="fname" onChange={this.handleChange.bind(this)}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="lname">Last Name</label><span/>
                                <input type="text" className="form-control" name="lname" id="lname" onChange={this.handleChange.bind(this)}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label><span data-name="email"/>
                                <input type="email" className="form-control" name="emailId" id="email" onChange={this.handleChange.bind(this)}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label><span/>
                                <input type="password" className="form-control" name="password" id="password" onChange={this.handleChange.bind(this)}/>
                            </div>
//                            <div className="form-group">
//                                <label htmlFor="address1">Address 1</label><span/>
//                                <input type="text" className="form-control" name="address1" id="address1" onChange={this.handleChange.bind(this)}/>
//                            </div>
//                            <div className="form-group">
//                                <label htmlFor="address2">Address 2</label><span/>
//                                <input type="text" className="form-control" name="address2" id="address2" onChange={this.handleChange.bind(this)}/>
//                            </div>
//                                <div className="form-group">
//                                <label htmlFor="address2">City</label><span/>
//                                <input type="text" className="form-control" name="city" id="city" onChange={this.handleChange.bind(this)}/>
//                            </div>
//                            <div className="form-group">
//                                <label htmlFor="state">Address 2</label><span/>
//                                <input type="text" className="form-control" name="address2" id="address2" onChange={this.handleChange.bind(this)}/>
//                            </div>
                            <div className="text-center">
                                <button type="submit" className="btn btn-primary">Create account</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

        )
    }
}

export default Signup;