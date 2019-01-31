import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = function() {
    return (
    <div className="ui container comments">
        <ApprovalCard>
        <div>
        <h4>Warning</h4>
        Are you sure?
        </div>
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail 
            author="Sam" 
            timeAgo="Today at 50:45 pm" 
            comment="good morning" 
            avatar={faker.image.avatar()} 
            />
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail
            author="Alex" 
            timeAgo="Today at 2:00 pm" 
            comment="hello sir!"
            avatar={faker.image.avatar()} 
            />
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail 
            author="Jane" 
            timeAgo="Today at 5:00 pm" 
            comment="good night"
            avatar={faker.image.avatar()} 
            />
        </ApprovalCard>
        </div>
    );
};



ReactDOM.render(<App />, document.querySelector('#root'));