import { Meteor } from 'meteor/meteor';
import Providers from './providers.js'

if (Meteor.isServer) {
    Meteor.methods({
        addExample: function () {
            console.log("Add a provider")
        },
        removeExample: function(_id) {
            check(_id, "String");
            console.log("Remove a provider")
        }
    })
}