import React from 'react';

//using this loading page using semantic UI
const Spinner = (props) => {
    return(
    <div className="ui active dimmer">
        <div className="ui big text loader">
        {props.message}
        </div>
        </div>
    );
};

Spinner.defaultProps = { //This is going to provide some default properties to the component. We use t                              this if we  have a alternate value for our prop we use defaultProp
    
    message: 'Loading...'
};

export default Spinner;