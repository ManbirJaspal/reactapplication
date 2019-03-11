import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import { Landing } from '../components/landing/landing';


const App = () => (
    <Landing/>
)

ReactDOM.render(<App/>, document.getElementById('root'));