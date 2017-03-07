import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Meteor } from 'meteor/meteor';

export default Providers = new Mongo.Collection('providers');

Providers.deny({
    insert() { return true; },
    update() { return true; },
    remove() { return true; }
});

Providers.schema = new SimpleSchema({

    created: {
        type: Date,
        optional: false
    },
    name: {
        type: String,
        label: "Name",
        optional: false
    },
    text: {
        type: String,
        label: "Headquartered in",
        optional: true
    },
    homepage: {
        type: String,
        label: "Homepage URL",
        optional: true
    },
    icon_url: {
        type: String,
        label: "Icon URL",
        optional: true
    },
    status: {
        type: String,
        label: "Company status",
        optional: true
    }
});

Meteor.startup(() => {
    if (Meteor.isServer) {
        // ensure an index if one is required
    }
});