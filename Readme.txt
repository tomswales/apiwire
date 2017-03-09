How to get it up and running:

- install the necessary node modules found in package.json, using:

meteor npm install --save [insert all module names here]

create a settings.json document in the root folder with the following information:

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



