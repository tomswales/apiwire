import {Meteor} from 'meteor/meteor';
import {extendObservable, action, useStrict, toJS, map} from 'mobx';

export default class AppState {
    constructor() {
        // state can only be updated through actions
        useStrict(true);

        /* stateMachine: ["initialised", "dataLoading", "dataLoadFailed", "dataLoaded", "connectingToAPI", "connectFailed", "chatBotConnected", "results"] */

            /*MOBX STATE*/
        extendObservable(this, {
            stateMachine: "initialised",
            providers: [],
            apis: [],
            chatHistory: [],
            updateChatHistory: action((author, newMessage, context) => {
                this.chatHistory = this.chatHistory.concat([]).push({author: author, message: newMessage, context: context});
            }),
            updateProviders: action((newProviders) => {
                this.providers = newProviders;
            }),
            setStateMachine: action((state) => {
                this.stateMachine = state;
            }),
            updateAPIs: action((newAPIs) => {
                this.apis = newAPIs;
            })
        });

        /*FUNCTIONS TO CALL METEOR METHODS*/
        // calls Meteor to add a new example
        this.getData = () =>{
            this.setStateMachine("dataLoading");
            Meteor.call("getData", (error, result) => {
                if  (error) {
                    console.log(error.message);
                    this.setStateMachine("dataLoadFailed");
                }
                else {
                    this.updateProviders(result.providers);
                    this.updateAPIs(result.apis);
                    this.setStateMachine("dataLoaded");
                }
            });
        };

        this.connectToAPI = () => {
            this.setStateMachine("dataLoading");
            Meteor.call("connectToBot", (error, result) => {
                if  (error) {
                    console.log(error.message);
                    this.setStateMachine("connectFailed");
                }
                else {
                    this.updateChatHistory("APILink", result.message, result.context);
                    this.setStateMachine("chatBotConnected");
                }
            });
        }
    }
}
