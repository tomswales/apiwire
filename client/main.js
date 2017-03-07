import React from 'react'
import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom'

// Import global CSS stylesheet
import '/imports/ui/stylesheets/styles.css';

// import the React Router component
import renderRoutes from '/imports/startup/client/routes.jsx'

// import the mobx state management class
import AppState from './AppState'

// create a new mobx state manager
let state = new AppState();

// initialise the connection to the chatbot API
state.getData();

// render the React components to main.html document
ReactDOM.render(renderRoutes(state), document.getElementById("app"));
