import React from 'react';
import {Router, Route, browserHistory} from 'react-router';

// Components
import App from './components/shared/App';
import NotFound from './components/shared/NotFound';

import TodoList from './components/home/TodoList';

const routes = (
    <Router history={browserHistory}>
        <Route component={App}>
            <Route path="/" component={TodoList} />
            <Route path="*" component={NotFound} />
        </Route>
    </Router>
);

export default routes;
