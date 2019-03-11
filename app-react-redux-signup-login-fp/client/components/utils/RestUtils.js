import axios from 'axios';
import qs from 'qs';

export const url = "http://localhost:8082/";

export function signUp(fname, lname, emailId, password) {
    const response = axios.get(url + "student").then(
        (response) => {
            console.log(response)
        },
        (error) => {
            console.log(error)
        }
    ).catch(function(error) {
        console.log(error);
    });
    console.log(response);
const data = qs.stringify({fname: fname, lname: lname, emailId: emailId, password: password});
    axios.post(url + "student", data ).then(
        (response) => {
            console.log(response)
        },
        (error) => {
            console.log(error)
        }
    );
}

//export function studentDetails(address1, address2, city, state, zip, stype, majorDept, gradAssitant){
//        const response = axios.get(url + "student").then(
//        (response) => {
//            console.log(response)
//        },
//        (error) => {
//            console.log(error)
//        }
//    ).catch(function(error) {
//        console.log(error);
//    });
//    console.log(response);
//    const data = qs.stringify({fname: fname, lname: lname, emailId: emailId, password: password});
//    axios.post(url + "student", data ).then(
//        (response) => {
//            console.log(response)
//        },
//        (error) => {
//            console.log(error)
//        }
//    );
//}
