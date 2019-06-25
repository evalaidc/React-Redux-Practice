import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    // State - JS object that contains data relevant to a component
    // update state to get component to update its self - can only be updated using 'setState'
    constructor(props) {
        // pulls properties from the base class (React.Component in this case)
        super(props);

        this.state = {
            lat: null,
            errorMessage: ''
        };

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                // called setState to update state and rerender component
                this.setState({
                    lat: position.coords.latitude
                })
            },
            (err) => {
                this.setState({
                    errorMessage: err.message
                })
            }
        );
    }

    //React says we hve to define render
    render() {
        if(this.state.errorMessage && !this.state.lat) {
            return (
                <div> 
                    Error: {this.state.errorMessage}
                </div>
            ); 
        }

        if( this.state.errorMessage && this.state.lat) {
            return (
                <div> 
                    Latitude: {this.state.lat}
                </div>
            );
        }

        return (
            <div> 
                Loading...
            </div>
        );
    }
}


ReactDOM.render(
    <App />,
    document.querySelector('#root')
)
