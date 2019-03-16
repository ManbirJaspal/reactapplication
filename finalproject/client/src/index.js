import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import { Landing } from '../components/landing/landing';


const App = () => (
    <Landing/>
)

ReactDOM.render(
        <Router>
            <App/>
        </Router>
    , document.getElementById('root'));