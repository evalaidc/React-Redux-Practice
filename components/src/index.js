import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './commentDetail';
import ApprovalCard from './approvalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                <h3>Warning!</h3>
                Are you sure you want to do this?
                </div>
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetail 
                author="Sam" 
                timeAgo="Today at 4:45PM" 
                avatar={faker.image.avatar()} 
                commentText="Nice blog post" 
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                author="Alex" 
                timeAgo="Today at 2:00PM" 
                avatar={faker.image.avatar()} 
                commentText="Second post"
                />                
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                author="Jane" 
                timeAgo="Yesterday at 5:00PM" 
                avatar={faker.image.avatar()} 
                commentText="third post"
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));

// https://semantic-ui.com/