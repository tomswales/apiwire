import React from 'react';
import {observer} from 'mobx-react';
import ResultItem from './ResultItem/ResultItem.jsx'

/*A React component representing a single row of results in the results grid*/

const ResultRow = observer(class ResultRow extends React.Component {
    render() {
        // renders any APIs passed in as props
        let apis = this.props.apis;
        let apisToRender = apis.map ((item) => {
            return <ResultItem key={item._id} api={item}/>
        });

        // generates enough empty. flat containers to fill out the row
        let fillerItems = [];
        for (let i=0; i<(3-apisToRender.length); i++) {
            fillerItems.push((<div key={i + "_empty"} className="empty-box"></div>));
        }

        // returns a row of APIs and empty containers
        return (
            <div className="product-row">
                {apisToRender}
                {fillerItems}
            </div>
        )}
});

export default ResultRow;
