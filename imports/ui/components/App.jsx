import React from 'react';
import {observer} from 'mobx-react';
import ChatBox from './ChatBox/ChatBox.jsx';
import ResultsBox from './ResultsBox/ResultsBox.jsx'
import State from '/imports/api/States';

// Top-level React presentational component - provides overall structure for the app and
// chooses which components to render
const App = observer(class App extends React.Component {
    render() {
        let content, results;
        // depending on the current state of the application, choose which component to render as content
        switch(this.props.state.stateMachine) {
            case State.DATA_LOADING:
                content = (<p>Connecting to data server...</p>);
                break;
            case State.DATA_LOAD_FAILED:
                content = (<p>Connection to data server failed...</p>);
                break;
            case State.DATA_LOADED:
                content =  (<p>Data loaded...</p>);
                break;
            case State.CONNECTING_TO_API:
                content =  (<p>Connecting to chatbot...</p>);
                break;
            case State.CONNECT_FAILED:
                content =  (<p>Connection to chatbot failed...</p>);
                break;
            case State.CHATBOT_CONNECTED:
                content = <ChatBox state={this.props.state}/>;
                break;
            case State.RESULTS:
                content = <ChatBox state={this.props.state}/>;
                results = <ResultsBox state={this.props.state}/>;
                break;
        }
        return (
            <div className="app-container">
                <div className="title-container">
                    <div className="small-deco">

                    </div>
                    <div className="logo-container">
                        <img className="site-logo" src="/apiwire_white.png"/>
                        <h3 className="animation">Discover cognitive APIs</h3>
                    </div>
                    <div className="decorative">
                        
                    </div>
                </div>
                <div className="content-container">
                    <hr/>
                    {content}
                    {results}
                    <hr/>
                </div>
                <div className="footer">
                    <p className="footer-item">&copy; Copyright Tom Swales 2017</p>
                    <a href="https://www.linkedin.com/in/tomswales/"  className="footer-item">Contact</a>
                </div>
            </div>
        );
    }
});

export default App;
