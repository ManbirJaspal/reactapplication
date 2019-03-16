import axios from 'axios';
import qs from 'qs';

export const url = "http://localhost:8082/";

export function signUp(email, password, fname, lname, address1, address2, city, state, zip, stype, majorDept, gradAssistant) {
    const data = qs.stringify({email: email, password: password, fname: fname, lname: lname, address1: address1, address2: address2, city: city, state: state, zip: zip, stype: stype, majorDept: majorDept, gradAssistant: gradAssistant});
    axios.post(url + "student", data ).then(
        function(response){
            console.log(response)
        },
        function(error) {
            console.log(error)
        }
    );
}

