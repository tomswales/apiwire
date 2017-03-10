A chatbot app build with Meteor JS and using IBM Watson Conversation service.

A write-up of this project is available on Medium here:

https://medium.com/@swalta/journal-of-a-bot-wrangler-88af8c48eab#.9myr0clzq

How to get it up and running:

- install the necessary node modules found in package.json, using:

meteor npm install --save [insert all module names here]

create a settings.json document with the following information in the same format. This should be passed as an environment variable with the name METEOR_SETTINGS to your app:

{
  "public": {

  },
  "private": {
    "ibm_watson_conversation" : {
              "url": "https://gateway.watsonplatform.net/conversation/api",
              "username": "[Your IBM Watson Conversation Username]",
              "password": "[Your IBM Watson Conversation Password]",
              "workspace_id": "[Your IBM Watson Workspace ID]",
              "version_date": "2017-02-12"
          }
  }
}
