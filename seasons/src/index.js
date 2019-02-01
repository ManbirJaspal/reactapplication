import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component{ //this is a class based component.
        
state = { lat: null, errorMessage: ''}; // when we dont know the value of the property we initialized inside the state object, and we are expecting a number, we initialize the value as null.

componentDidMount() {
    window.navigator.geolocation.getCurrentPosition( //function to get the current location.
//success callback
    position => this.setState({ lat: position.coords.latitude}), //we call this.setState( to update the state object) and we pass in an object that has the update to state that i want to make. So, we would be using the "position" object and some property in there to update the lat property in the state object.
        (err) => this.setState({errorMessage: err.Message})
        );
        }


renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
                return <div>Error: {this.state.errorMessage}</div>
            } 
            if (!this.state.errorMessage && this.state.lat) {
                return <SeasonDisplay lat= {this.state.lat} />
            }
            return <Spinner message="Please accept location request" />;
}

        render() {
         return (
         <div className="border red">
             {this.renderContent()}   //call the helper function renderContent().
    </div>
         );       
                
        }
    }

    ReactDOM.render(<App />, document.querySelector('#root'));