import React from 'react';

const Spinner = (props) => {
    return (
        <div className="ui active dimmer">
           <div className="ui big text loader">{props.message}</div>
        </div>
    );
};

// backfill message for when loading component in case there isn't one passed in
Spinner.defaultProps = {
    message: 'Loading...'
}

export default Spinner;