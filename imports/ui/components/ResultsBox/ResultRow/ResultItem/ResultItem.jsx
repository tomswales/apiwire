import React from 'react';
import {observer} from 'mobx-react';
import {toJS} from 'mobx';

/*Provides a single API result in a flexbox*/
const ResultItem = observer(class ResultItem extends React.Component {
    render() {
        return (
            <div className="product-box">
                <div className="product-description">
                    <h4>{this.props.api.name}</h4>
                    <p><strong>{this.props.api.providerName}</strong></p>
                    <p>{this.props.api.category}</p>
                    <a href={this.props.api.api_homepage}>View</a>
                </div>
                <img className="product-image" src={this.props.api.icon_url}/>
            </div>
        )}
});

export default ResultItem;
