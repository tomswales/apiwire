import React from 'react';
import {observer} from 'mobx-react';
import {toJS} from 'mobx';
import ResultRow from './ResultRow/ResultRow';
import SelectRow from './SelectRow/SelectRow.jsx'

//  the container for the results (APIs matching the search queries)
const ResultsBox = observer(class ResultsBox extends React.Component {
        render() {
            // get the current list of APIs from the mobx store
            let apis = toJS(this.props.state.apis);

            // filter using the current API feature (if one exists)
            if (this.props.state.apiFeatureFilter) {
                apis = apis.filter((item) => {
                    return item.features.includes(this.props.state.apiFeatureFilter);
                })
            }

            // filter using the current industry filter (if one exists)
            if (this.props.state.providerFilter) {
                apis = apis.filter((item) => {
                    return item.providerName == this.props.state.providerFilter;
                })
            }

            // sort using the current sort criterion (if one exists)
            if (this.props.state.sortCriterion) {
                if (this.props.state.sortCriterion == "provider_name") {
                    apis.sort((a, b) => {
                        return a.providerName > b.providerName;
                    })
                }
                else if (this.props.state.sortCriterion == "api_name") {
                    apis.sort((a, b) => {
                        return a.name > b.name;
                    })
                }
            }

            // create an empty array representing rows of three results
            let resultRows =[];
            let i = 0;
            if (apis.length >= 0) {
                while (i< apis.length) {
                    // if there are more than three APIs remaining, create a full row and push it to results
                    if ((apis.length - i) > 3) {
                        resultRows.push(<ResultRow key={i} apis={apis.slice(i, i+3)}/>);
                        i += 3;
                    }
                    // otherwise, count how many APIs there are left, and insert a single row of results containing the remaining APIs
                    else {
                        let remaining = apis.length - i;
                        if (remaining > 0) {
                            resultRows.push(<ResultRow key={i} apis={apis.slice(i, i+remaining)}/>);
                        }
                        break;
                    }
                }
            }

            let toggleArrow, resultsContent;

            // query the section display map in the mobx store to find out whether to display the results section
            if (this.props.state.sectionDisplay.get("results")) {
                resultsContent = (
                    <div>
                        <SelectRow state={this.props.state}/>
                        {resultRows}
                    </div>);
                    toggleArrow = "fa-chevron-up fa fa-2x hide-arrow"
            }
            else {
                toggleArrow = "fa-chevron-down fa fa-2x hide-arrow"
            }

            return (
                <div>
                    <hr/>
                    <h2 className="section-title">Results <span><i className={toggleArrow} onClick={this.handleShowSection.bind(this)}/></span></h2>
                    {resultsContent}
                </div>
            )
        }

        handleShowSection(e) {
            this.props.state.toggleSectionDisplay("results");
        }
    }

);

export default ResultsBox;
