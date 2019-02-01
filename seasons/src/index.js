    import React from 'react';
    import ReactDOM from 'react-dom';

    class App extends React.Component{ //this is a class based component.
        
        state = { lat: null, errorMessage: ''}; // when we dont know the value of the property we initialized inside the state object, and we are expecting a number, we initialize the value as null.

        componentDidMount() {
        window.navigator.geolocation.getCurrentPosition( //function to get the current location.
        //success callback
        position => this.setState({ lat: position.coords.latitude}), //we call this.setState( to update the state object) and we pass in an object that has the update to state that i want to make. So, we would be using the "position" object and some property in there to update the lat property in the state object.
        (err) => this.setState({errorMessage: err.Message})
        );
        }

        componentDidUpdate() {
            console.log('component updated');
        }

        render() {
                if (this.state.errorMessage && !this.state.lat) {
                return <div>Error: {this.state.errorMessage}</div>
            } 
            if (!this.state.errorMessage && this.state.lat) {
                return <div>Latitude: {this.state.lat}</div> 
            }
            return <div>Loading!</div>;
        }
    }

    ReactDOM.render(<App />, document.querySelector('#root'));