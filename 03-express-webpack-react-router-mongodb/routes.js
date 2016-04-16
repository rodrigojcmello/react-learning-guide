import React from 'react';
import { Route, IndexRoute } from 'react-router';

import commentBox from './components/CommentBox.js';

module.exports = (
    <Route path="/" component={commentBox}>
    </Route>
);
