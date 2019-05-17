import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './commentDetail';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));

// https://semantic-ui.com/