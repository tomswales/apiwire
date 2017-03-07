import React from 'react';
import {observer} from 'mobx-react';

/*A React component representing a select menu (filter or sort) in the results grid*/

const SelectItem = observer(class SelectItem extends React.Component {
    render() {

        // render an array of options elements
        let renderOptions = this.props.options.map((item) =>{
            return <option key={item.value} value={item.value}>{item.text}</option>
        });

        // returns a select menu with appropriate names, options and change handler
        return (
            <div className="select-item">
                <label className="select-label" htmlFor={this.props.id}>{this.props.displayText}</label>
                <select value={this.props.value} onChange={this.props.changeHandler} className="drop-down" id={this.props.id}>
                    {renderOptions}
                </select>
            </div>
        )

    }
});

export default SelectItem;
