import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './commentDetail';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail 
            author="Sam" 
            timeAgo="Today at 4:45PM" 
            avatar={faker.image.avatar()} 
            commentText="Nice blog post" 
            />
            <CommentDetail 
            author="Alex" 
            timeAgo="Today at 2:00PM" 
            avatar={faker.image.avatar()} 
            commentText="Second post"
            />
            <CommentDetail 
            author="Jane" 
            timeAgo="Yesterday at 5:00PM" 
            avatar={faker.image.avatar()} 
            commentText="third post"
            />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));

// https://semantic-ui.com/