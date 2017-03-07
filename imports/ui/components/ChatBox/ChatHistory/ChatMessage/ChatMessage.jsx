import React from 'react';
import {observer} from 'mobx-react';
import {toJS} from 'mobx';

// Each message displayed in the chat history. Appears left or right depending on author
const ChatMessage = observer(class ChatMessage extends React.Component {
    render() {
        let containerClass;
        if (this.props.author == "apiwire") {
            containerClass = "chat-message-container left";
        }
        else {
            containerClass = "chat-message-container right";
        }
        let messageClass;
        if (this.props.author == "apiwire") {
            messageClass = "chat-message us"
        }
        else {
            messageClass = "chat-message you"
        }
        return (
            <div className={containerClass}>
                <div className={messageClass}>
                    <strong>{this.props.author}: </strong>
                    {this.props.message}
                </div>
            </div>
        )}
});

export default ChatMessage;
