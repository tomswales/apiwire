import React from 'react';
import { Meteor } from 'meteor/meteor';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import App from '../../ui/components/App.jsx';
import NotFound from '../../ui/components/NotFound.jsx';

const renderRoutes = (state) => {
    return (
        <BrowserRouter>
          <Switch>
            <Route exactly pattern="/" render={() => <App state={state}/>} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
    )
};

export default renderRoutes;
