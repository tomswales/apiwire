import { Meteor } from 'meteor/meteor';
import Providers from './providers/providers.js';
import APIs from './apis/apis.js';
import Features from './features/features';
import Categories from './categories/categories';
import ConversationV1 from 'watson-developer-cloud/conversation/v1';
import Future from 'fibers/future';
import { check } from 'meteor/check';

if (Meteor.isServer) {
    Meteor.methods({
        getData: function () {
            const providers = Providers.find({}, {sort: {name: 1}}).fetch();
            const apis = APIs.find({}, {sort: {providerName: 1}}).fetch();
            const features = Features.find({}, {sort: {text: 1}}).fetch();
            const categories = Categories.find({}, {sort: {text: 1}}).fetch();
            if (!providers || !apis) {
                throw new Meteor.Error("Could not retrieve initial data")
            }
            return {providers: providers, apis: apis, features: features, categories: categories}
        },
        connectToAPI: function() {
            let conversation = new ConversationV1({
                username: Meteor.settings.private.ibm_watson_conversation.username,
                password: Meteor.settings.private.ibm_watson_conversation.password,
                path: { workspace_id: Meteor.settings.private.ibm_watson_conversation.workspace_id },
                version_date: '2017-02-12'
            });

            let future = new Future();

            conversation.message({}, (error, result)=> {
                if (error) {
                    future.throw(new Meteor.Error("Problem calling API"));
                }
                else {
                    future.return(result);
                }
            });

            return future.wait();
        },
        sendMessageToAPI: function(message, context) {
            check(message, String);
            check(context, Object);
            let conversation = new ConversationV1({
                username: Meteor.settings.private.ibm_watson_conversation.username,
                password: Meteor.settings.private.ibm_watson_conversation.password,
                path: { workspace_id: Meteor.settings.private.ibm_watson_conversation.workspace_id },
                version_date: '2017-02-12'
            });

            let future = new Future();

            conversation.message({input: { text: message}, context : context}, (error, result) => {
                    if (error) {
                        console.log(error.message);
                        future.throw(new Meteor.Error("Problem calling API"));
                    }
                    else {
                        future.return(result);
                    }
                }
            );

            return future.wait();
        }
    })
}