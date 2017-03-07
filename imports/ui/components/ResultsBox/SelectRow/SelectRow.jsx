import React from 'react';
import {observer} from 'mobx-react';
import {toJS} from 'mobx';
import SelectItem from './SelectItem/SelectItem.jsx';

/*A React component representing a select menu (filter or sort) in the results grid*/

const SelectRow = observer(class SelectRow extends React.Component {
    render() {
        let providers = toJS(this.props.state.providers);
        let extractedProviders = providers.map ((item) =>{
            return {value: item.name, text: item.name};
        });
        let providerList = [{value: "", text:""}].concat(extractedProviders);
        let features= toJS(this.props.state.features);
        let featureList = [{value: "", text:""}].concat(features);
        return (
            <div className="select-row">
                <SelectItem
                    displayText={"Filter by provider"}
                    id={"category-select"}
                    value={this.props.state.providerFilter}
                    changeHandler={this.handleProviderFilterChange.bind(this)}
                    options={providerList}
                />
                <SelectItem
                    displayText={"Filter by API feature"}
                    id={"api-select"}
                    value={this.props.state.apiFeatureFilter}
                    changeHandler={this.handleAPIFeatureFilterChange.bind(this)}
                    options={featureList}
                />
                <SelectItem
                    displayText={"Sort search results by"}
                    id={"sort-by"}
                    value={this.props.state.sortCriterion}
                    changeHandler={this.handleSortCriterionChange.bind(this)}
                    id={"sort-by"}
                    options={[{value: "provider_name", text:"Provider name (A-Z)"}, {value: "api_name", text:"API Name (A-Z)"}]}
                />
            </div>
        )

    }

    handleProviderFilterChange (e) {
        this.props.state.setProviderFilter(e.target.value);
    }

    handleAPIFeatureFilterChange (e) {
        this.props.state.setApiFeatureFilter(e.target.value);
    }

    handleSortCriterionChange(e) {
        this.props.state.setSortCriterion(e.target.value);
    }
});

export default SelectRow;
