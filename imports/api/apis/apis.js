import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Meteor } from 'meteor/meteor';

export default APIs = new Mongo.Collection('apis');

APIs.deny({
    insert() { return true; },
    update() { return true; },
    remove() { return true; }
});

APIs.schema = new SimpleSchema({

    created: {
        type: Date,
        label: "Created",
        optional: false
    },
    providerId: {
        type: String,
        label: "Provider ID",
        optional: false
    },
    providerName: {
        type: String,
        label: "Provider Name",
        optional: false
    },
    name: {
        type: String,
        label: "Name",
        optional: true
    },
    types: {
        type: [String],
        label: "Types",
        optional: false
    },
    industries: {
        type: [String],
        label: "Industries",
        optional: false
    },
    availability: {
        type: String,
        label: "Availability",
        optional: false
    }
});

Meteor.startup(() => {
    if (Meteor.isServer) {
        APIs._ensureIndex({ "providerId": 1}, {background: true})
    }
});
