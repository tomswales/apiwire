import React from 'react';
import {observer} from 'mobx-react';
import {toJS} from 'mobx';
import ChatHistory from './ChatHistory/ChatHistory.jsx'

//  the container for the chat components
const ChatBox = observer(class ChatBox extends React.Component {
    render() {
        let toggleArrow, chatContent;
        // only render the chat box if it is set to visible in the state manager
        if (this.props.state.sectionDisplay.get("search") == true) {
            chatContent = (<div className="chatbox">
                <div className="chat-container">
                    <ChatHistory state={this.props.state}/>
                    <input placeholder="Type here:"
                              className="message-input-field pt-intent-primary"
                              onChange={this.handleMessageInputChange.bind(this)}
                              value={this.props.state.currentMessageInput}
                              onKeyUp={this.handleKeyUp.bind(this)}></input>
                    <div className="chat-control-buttons">
                        <div className="chat-control-button">
                            <button className="enter-message-button" onClick={this.handleSendMessageClick.bind(this)}>Enter message</button>
                        </div>
                        <div className="chat-control-button">
                            <button className="start-again-button" onClick={this.handleStartAgainClick.bind(this)}>Start again</button>
                        </div>
                    </div>
                </div>
            </div>);
            toggleArrow = "fa-chevron-up fa fa-2x hide-arrow"
        }
        else {
            toggleArrow = "fa-chevron-down fa fa-2x hide-arrow"
        }

        return (<div className="search-container">
                <h2 className="section-title">Describe your business problem <span><i onClick={this.handleShowSection.bind(this)} className={toggleArrow}/></span></h2>
                {chatContent}
            </div>
        )
    }

    handleKeyUp(e) {
        if(e.keyCode == 13){
            console.log("Enter Key pressed");
            this.props.state.requestSendCurrentMessage();
        }
    }

    handleMessageInputChange(e) {
        this.props.state.setCurrentMessageInput(e.target.value);
    }
    
    handleStartAgainClick(e) {
        this.props.state.startAgain();
    }

    handleShowSection(e) {
        this.props.state.toggleSectionDisplay("search");
    }

    handleSendMessageClick(e) {
        this.props.state.requestSendCurrentMessage();
    }

});

export default ChatBox;