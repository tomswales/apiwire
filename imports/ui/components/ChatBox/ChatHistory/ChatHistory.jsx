import React from 'react';
import {observer} from 'mobx-react';
import {toJS} from 'mobx';
import ChatMessage from './ChatMessage/ChatMessage.jsx'
import ReactDOM from 'react-dom';

//  provides a visual chat dialogue component within a scroll pane
const ChatHistory = observer(class ChatHistory extends React.Component {
    render() {
        let chatHistory = toJS(this.props.state.chatHistory);
        let processedChat = chatHistory.map((item, no) => {
            return <ChatMessage key={no} author={item.author} message={item.message} />
        });
        return (<div className="chat-history">
                    {processedChat}
                </div>
        )
    }
    componentDidMount () {
        this.setScrollHeight();
    }

    componentDidUpdate () {
        this.setScrollHeight();
    }
    
    // ensures that if the conversation overflows the height of the chat pane, the chat will scroll to bottom
    setScrollHeight() {
        var node = ReactDOM.findDOMNode(this);
        node.scrollTop = node.scrollHeight;
    }
});

export default ChatHistory;
