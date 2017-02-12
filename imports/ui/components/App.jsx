import React from 'react';
import {observer} from 'mobx-react';
import {toJS} from 'mobx';

const App = observer(class App extends React.Component {
    render() {
        let content;
        switch(this.props.state.stateMachine) {
            case "dataLoading":
                content = (<p>Loading data...</p>);
                break;
            case "dataLoadFailed":
                content = (<p>Connection to server failed...</p>);
                break;
            case "dataLoaded":
                content =  (<p>Data loaded...</p>);
                break;
            case "connectingToAPI":
                content =  (<p>Connecting to chatbot API...</p>);
                break;
            case "chatBotConnected":
                content = (
                    <div className="search-container">
                        <h2>Describe your business problem</h2>
                        <div className="chatbox">
                            <div className="chat-container">
                                <div className="chat-history">
                                    <div className="chat-message-container left">
                                        <div className="chat-message us">
                                            <strong>APILink: </strong>
                                            Hello and welcome. Im here to help you find the right cognitive API for your business needs. Please tell me what problem you are hoping to solve...
                                        </div>
                                    </div>
                                    <div className="chat-message-container right">
                                        <div className="chat-message you">
                                            <strong>You: </strong>
                                            Hi!
                                        </div>
                                    </div>
                                    <div className="chat-message-container left">
                                        <div className="chat-message us">
                                            <strong>APILink: </strong>
                                            Hello! Please tell me what kind of problem I can help you with...
                                        </div>
                                    </div>
                                    <div className="chat-message-container right">
                                        <div className="chat-message you">
                                            <strong>You: </strong>
                                            Im interested in sorting documents into different types
                                        </div>
                                    </div>
                                    <div className="chat-message-container left">
                                        <div className="chat-message us">
                                            <strong>APILink: </strong>
                                            I think you want to classify documents into different categories. Great! Now please tell me which industry you are interested in
                                        </div>
                                    </div>
                                    <div className="chat-message-container right">
                                        <div className="chat-message you">
                                            <strong>You: </strong>
                                            Im in the pharma industry
                                        </div>
                                    </div>
                                    <div className="chat-message-container left">
                                        <div className="chat-message us">
                                            <strong>APILink: </strong>
                                            OK, so you are interested in the Pharmaceutical industry, and you want to classify documents into different categories. Great - I will look up relevant APIs for you now. Please hold on...
                                        </div>
                                    </div>
                                </div>
                                <textarea placeholder="Type here:" className="message-input-field"></textarea>
                                <div className="chat-control-buttons">
                                    <button className="enter-message-button">Enter message</button>
                                    <button className="start-again-button">Start again</button>
                                </div>
                            </div>
                        </div>
                    </div>
                );
                break;
            case "results":
                content = (
                    <div>
                        <h2>Results</h2>
                        <div className="select-row">
                            <div className="select-item">
                                <label className="select-label" htmlFor="category-select">Filter by industry focus</label>
                                <select id="category-select">
                                    <option selected></option>
                                    <option>Pharmaceutical</option>
                                    <option>Manufacturing</option>
                                    <option>Transport</option>
                                </select>
                            </div>
                            <div className="select-item">
                                <label className="select-label" htmlFor="vendor-select">Filter by API purpose</label>
                                <select id="vendor-select">
                                    <option selected></option>
                                    <option>Identifying objects in images</option>
                                    <option>Identifying objects in videos</option>
                                    <option>Classifying images</option>
                                </select>
                            </div>
                        </div>
                        <div className="product-row">
                            <div className="product-box">
                                <div className="product-description">
                                    <h4>XPS 13</h4>
                                    <p>Dell</p>
                                    <p>Computers</p>
                                    <p>RRP £999.00</p>
                                    <a href="#">View</a>
                                </div>
                                <img className="product-image" src="https://c.s-microsoft.com/en-us/CMSImages/lrn-share-site-ms-logo.png?version=bf62922f-fda3-d328-e220-b699eac0d6c0"/>
                            </div>
                            <div className="product-box">
                                <div className="product-description">
                                    <h4>Mixx 300</h4>
                                    <p>Lenovo</p>
                                    <p>Computers</p>
                                    <p>RRP £498.00</p>
                                    <a href="#">View</a>
                                </div>
                                <img className="product-image" src="http://www.logosays.com/wp-content/uploads/2016/07/2000px-IBM_logo.svg_-1.png"/>
                            </div>
                            <div className="product-box"></div>
                        </div>
                        <div className="product-row">
                            <div className="product-box">
                                <div className="product-description">
                                    <h4>XPS 13</h4>
                                    <p>Dell</p>
                                    <p>Computers</p>
                                    <p>RRP £999.00</p>
                                    <a href="#">View</a>
                                </div>
                                <img className="product-image" src="https://c.s-microsoft.com/en-us/CMSImages/lrn-share-site-ms-logo.png?version=bf62922f-fda3-d328-e220-b699eac0d6c0"/>
                            </div>
                            <div className="product-box">
                                <div className="product-description">
                                    <h4>Mixx 300</h4>
                                    <p>Lenovo</p>
                                    <p>Computers</p>
                                    <p>RRP £498.00</p>
                                    <a href="#">View</a>
                                </div>
                                <img className="product-image" src="http://www.logosays.com/wp-content/uploads/2016/07/2000px-IBM_logo.svg_-1.png"/>
                            </div>
                            <div className="product-box"></div>
                        </div>
                    </div>);
                break;
        }
        return (
            <div className="app-container">
                <div className="title-container">
                    <div className="logo-container">
                        <h1>APILink</h1>
                        <h3 className="animation">Discover your cognitive API</h3>
                    </div>
                </div>
                <div className="content-container">
                    <hr/>
                    {content}
                    <hr/>
                    <button>Try another search</button>
                </div>
                <div className="footer">
                    <p>&copy; Copyright Tom Swales 2017</p>
                </div>
            </div>
        );
    }

    handleAddClick() {
        this.props.state.addExample();
    }
});

export default App;
