import React from 'react'
import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom'

// Import global CSS stylesheet
import '/imports/ui/stylesheets/styles.css';
import renderRoutes from '/imports/startup/client/routes.jsx'
import AppState from './AppState'

let state = new AppState();
console.log("Here");
ReactDOM.render(renderRoutes(state), document.getElementById("app"));