import {Meteor} from 'meteor/meteor';
import {extendObservable, action, useStrict, toJS, map, observable} from 'mobx';
import States from './../imports/api/States';

export default class AppState {
    constructor() {
        // state can only be updated through actions
        useStrict(true);

            /*MOBX STATE*/
        extendObservable(this, {
            // possible states of the chatbot, including status of connection to the service
            stateMachine: States.INITIALISED,
            setStateMachine: action((state) => {
                this.stateMachine = state;
            }),

            // Manage data
            providers: [],
            setProviders: action((newProviders) => {
                this.providers = newProviders;
            }),
            apis: [],
            setAPIs: action((newAPIs) => {
                this.apis = newAPIs;
            }),
            features: [],
            setFeatures: action((newFeatures) => {
                this.features = newFeatures;
            }),
            categories: [],
            setCategories: action((newFeatures) => {
                this.categories = newFeatures;
            }),

            /*Manage user interface display*/
            sectionDisplay: new observable.map([["search", true],["results", true]]),
            toggleSectionDisplay: action((section) => {
                if (!this.sectionDisplay.get(section)) {
                    this.sectionDisplay.set(section, true);
                }
                else {
                    this.sectionDisplay.set(section, false);
                }
            }),

            /*Manage filter and sort settings*/
            providerFilter: "",
            setProviderFilter: action ((filter) =>{
                if (filter) {
                    this.providerFilter = filter;
                }
                else {
                    this.providerFilter = "";
                }
            }),
            apiFeatureFilter: "",
            setApiFeatureFilter: action ((filter) =>{
                if (filter) {
                    this.apiFeatureFilter = filter;
                }
                else {
                    this.apiFeatureFilter = "";
                }
            }),
            sortCriterion: "provider_name",
            setSortCriterion: action ((criterion) =>{
                if (criterion) {
                    this.sortCriterion = criterion;
                }
                else {
                    this.sortCriterion = "";
                }
            }),

            /*Manage state of user text input*/
            currentMessageInput: "",
            setCurrentMessageInput: action((newMessage)=>{
                this.currentMessageInput = newMessage;
            }),
            clearCurrentMessageInput: action(()=>{
                this.currentMessageInput = "";
            }),

            /*Manage chat history*/
            chatHistory: [],
            pushToChatHistory: action((author, newMessage) => {
                this.chatHistory.push({author: author, message: newMessage});
            }),
            clearChatHistory: action(()=> {
                this.chatHistory = [];
            }),

            /*Manage conversation context for chatbot API*/
            currentContext: {},
            setCurrentContext: action((newContext) => {
                this.currentContext = newContext;
            })
        });

        /*CALL METEOR METHODS*/
        // calls Meteor to add a new example
        this.getData = () =>{
            this.setStateMachine(States.DATA_LOADING);
            Meteor.call("getData", (error, result) => {
                if  (error) {
                    this.setStateMachine(States.DATA_LOAD_FAILED);
                }
                else {
                    this.setProviders(result.providers);
                    this.setAPIs(result.apis);
                    this.setFeatures(result.features);
                    this.setCategories(result.categories);
                    this.setStateMachine(States.DATA_LOADED);
                    this.connectToAPI();
                }
            });
        };

        // performs initial connection to chatbot API and verifies connection status
        this.connectToAPI = () => {
            this.setStateMachine(States.CONNECTING_TO_API);
            Meteor.call("connectToAPI", (error, result) => {
                if  (error) {
                    this.setStateMachine(States.CONNECT_FAILED);
                }
                else {
                    this.pushToChatHistory("apiwire", result.output.text[0]);
                    this.setCurrentContext(result.context);
                    this.setStateMachine(States.CHATBOT_CONNECTED);
                }
            });
        };

        // sends a user message to the chatbot API and updates state with response
        this.sendMessage = (newMessage) => {
            this.pushToChatHistory ("You", newMessage);
            this.setCurrentMessageInput(newMessage);
            let context = toJS(this.currentContext);
            Meteor.call("sendMessageToAPI", newMessage, context, (error, result) => {
                if  (error) {
                    throw new Error;
                }
                else {
                    this.pushToChatHistory("apiwire", result.output.text[0]);
                    this.setCurrentContext(result.context);
                    if (result.context.result == true) {
                        this.setApiFeatureFilter(result.context.intent);
                        this.setStateMachine(States.RESULTS);
                    }
                    else {
                        this.setStateMachine(States.CHATBOT_CONNECTED);
                        this.setApiFeatureFilter("");
                    }
                }
            });
        };

        // called by UI component when the user has clicked send message button or pressed enter in text input
        this.requestSendCurrentMessage = () => {
            try {
                this.sendMessage(this.currentMessageInput);
            }
            catch (Error){
                this.pushToChatHistory("apiwire", "There was an error sending your message");
            }
            this.clearCurrentMessageInput();
        };

        // called by UI component when user has clicked start again button
        this.startAgain = () =>{
            this.clearCurrentMessageInput();
            this.clearChatHistory();
            this.connectToAPI();
        };
    }
}
