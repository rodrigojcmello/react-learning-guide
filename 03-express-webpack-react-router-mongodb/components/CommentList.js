import React from 'react';
import Comment from './Comment';

export default class CommentList extends React.Component {
    render() { return (
            <div className="commentList">
                <Comment/>
            </div>
        );
    }
}
