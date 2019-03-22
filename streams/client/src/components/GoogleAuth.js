import React from 'react';

class GoogleAuth extends React.Component {
  state = {isSignedIn: null};

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '690877532163-1t1l77h0fpe6a1gt9cp0b7an7oe0m2g6.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.setState({ isSignedIn: this.auth.isSignedIn.get() });
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    });
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  }

renderAuthButton() {
  if (this.state.isSignedIn === null) {
    return null;

  } else if (this.state.signedIn) {
    return <button className="ui red google button">
      <i clasName="google icon" />
      Sign Out
    </button>
  } else {
    return <button className="ui red google button">
      <i className="google icon" />
      Sign In with Google
    </button>
  }
}

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
