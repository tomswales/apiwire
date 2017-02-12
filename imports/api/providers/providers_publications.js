import { Meteor } from 'meteor/meteor';
import Providers from './providers.js';

if (Meteor.isServer) {
    Meteor.publish('all_providers', () => {
        return Providers.find({}, {sort: {name: 1}});
    });
}