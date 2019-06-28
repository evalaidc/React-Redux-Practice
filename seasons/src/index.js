import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './seasonDisplay';
import Spinner from './spinner';

class App extends React.Component {
    // this gets made by babel as though in the constructor like previous code. both valid
    state = {
        lat: null,
        errorMessage: ''
    };

    componentDidMount() {
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

    renderContent() {
        if(this.state.errorMessage && !this.state.lat) {
            return (
                <div> 
                    Error: {this.state.errorMessage}
                </div>
            ); 
        }

        if(!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />;
        }

        return (
            <Spinner message="Please accept location request"/>
        );
    }

    //React says we hve to define render
    render() {
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        )
    }
}


ReactDOM.render(
    <App />,
    document.querySelector('#root')
)
