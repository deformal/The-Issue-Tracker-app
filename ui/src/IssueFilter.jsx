import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import URLSearchParams from 'url-search-params'


class IssueFilter extends React.Component {
  constructor({ location: { search } }) {
    super();
    const params = new URLSearchParams(search);
    this.state = {
      status: params.get('status') || "",
      effortMin: params.get('effortMin') || "",
      effortMax: params.get('effortMax') || "",
      changed: false
    }
    this.onChangeStatus = this.onChangeStatus.bind(this);
    this.onChangeEffortMin = this.onChangeEffortMin.bind(this);
    this.onChangeEffortMax = this.onChangeEffortMax.bind(this);
    this.applyFilter = this.applyFilter.bind(this);
    this.showOtiginalFilter = this.showOriginalFilter.bind(this);

  }

  componentDidUpdate(prevProps) {
    const { location: { search: prevSearch } } = prevProps;
    const { location: { search } } = this.props;
    if (prevSearch !== search) {
      this.showOtiginalFilter();
    }
  }

  onChangeStatus(e) {

    this.setState({ status: e.target.value, changed: true })
  }
  onChangeEffortMin(e) {
    const effortString = e.target.value;
    if (effortString.match(/^\d*$/)) {
      this.setState({ effortMin: e.trget.value, changed: true });
    }
  }
  onChangeEffortMax(e) {
    const effortString = e.target.value;
    if (effortString.match(/^\d*$/)) {
      this.setState({ effortMax: e.target.value, changed: true });
    }
  }

  showOriginalFilter() {
    const { location: { search } } = this.props;
    const params = new URLSearchParams(search);
    this.setState({
      status: params.get('status') || "",
      effortMin: params.get('effortMin') || "",
      effortMax: params.get('effrotMax') || "",
      changed: false
    })
  }
  applyFilter() {
    const { status, effortMax, effortMin } = this.state;
    const { history } = this.props;
    const params = new URLSearchParams();
    if (status) params.set('status', status);
    if (effortMin) params.set('effortMin', effortMin);
    if (effortMax) params.set('effortMax', effortMax);
    const search = params.toString() ? `?${params.toString()}` : "";
    history.push({ pathname: '/issues', search });
  }


  render() {
    const { location: { search } } = this.props;//the value of the location parameter i.e search will be accessed here in search.
    const params = new URLSearchParams(search);//now search is passed here.
    const { status, changed } = this.state;
    const { effortMin, effortMax } = this.state;
    return (
      <div className="selection">
        Status:{" "}
        <select onChange={this.onChangeStatus} value={status} >
          <option value="">(All)</option>
          <option value="New">New</option>
          <option value="Assigned">Assigned</option>
          <option value="Fixed">Fixed</option>
          <option value="Closed">Closed</option>
        </select>
        {''}
      Effort between:
        {''}
        <input size={5} value={effortMin} onChange={this.onChangeEffortMin} />
        {'-'}
        <input size={5} value={effortMax} onChange={this.onChangeEffortMax} />
        {''}
        <button type='button' onClick={this.applyFilter} >Apply</button>
        {''}
        <button type="button" onClick={this.showOtiginalFilter} disabled={!changed} >Reset</button>
      </div>
    );
  }
}
export default withRouter(IssueFilter);
