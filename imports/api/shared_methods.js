import { Meteor } from 'meteor/meteor';
import Providers from './providers/providers.js';
import APIs from './apis/apis.js'
import ConversationV1 from 'watson-developer-cloud/conversation/v1';

if (Meteor.isServer) {
    Meteor.methods({
        getData: function () {
            const providers = Providers.find().fetch();
            const apis = APIs.find().fetch();
            return {providers: providers, apis: apis}
        },
        connectToBot: function() {
            

            let conversation = new ConversationV1({
                username: Meteor.settings.private.ibm_watson_conversation.username,
                password: Meteor.settings.private.ibm_watson_conversation.password,
                path: { workspace_id: Meteor.settings.private.ibm_watson_conversation.workspace_id }, // replace with workspace ID
                version_date: '2017-02-12'
            });

            conversation.message({}, (err, response) => {
                if (err) {
                    console.error(err); // something went wrong
                    return;
                }

                // Display the output from dialog, if any.
                if (response.output.text.length != 0) {
                    console.log(response.output.text[0]);
                }
            });

        }
    })
}