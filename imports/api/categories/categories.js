import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Meteor } from 'meteor/meteor';

export default Categories = new Mongo.Collection('categories');

Categories.deny({
    insert() { return true; },
    update() { return true; },
    remove() { return true; }
});

Categories.schema = new SimpleSchema({

    value: {
        type: String,
        label: "Value",
        optional: false
    },
    text: {
        type: String,
        label: "Text",
        optional: false
    }
});

Meteor.startup(() => {
    if (Meteor.isServer) {
        Categories._ensureIndex({ "providerId": 1}, {background: true})
    }
});
