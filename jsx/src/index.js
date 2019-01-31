//Import the React and react-dom librairies

import React from 'react';
import ReactDOM from 'react-dom';


// Create a react components
const App = () => {      
    const buttonText = ["Hi", "There"];
    return (
        <div>
                <label className="label" htmlFor="name">
                    Enter Name:
                </label>
                <input id = "name" type="text" />
                <button style={{backgroundColor: 'blue', color: 'white'}}>
                        {buttonText}
                 </button>
        </div>
        );
};

//Take the react component and show it on the screen

ReactDOM.render(   //whenever we use the render function, we are displaying the HTML in the                                 //public module.
<App />, document.querySelector('#root')
); 
