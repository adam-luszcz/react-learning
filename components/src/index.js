import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail
                author="Sam"
                timeAgo="Today at 4:45PM"
                commentText="Cool post!"
                avatar={faker.image.avatar()}
            />
            <CommentDetail
                author="Alex"
                timeAgo="Today at 2:00AM"
                commentText="Thank you for posting this!"
                avatar={faker.image.avatar()}
            />
            <CommentDetail
                author="Jane"
                timeAgo="Yesterday at 3:00PM"
                commentText="Oh, that's bad..."
                avatar={faker.image.avatar()}
            />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
