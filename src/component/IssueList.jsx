import React, { Component } from "react";

class IssueList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      issues: [],
      isLoaded: false
    };
  }
  componentDidMount() {
    fetch("https://api.github.com/repos/facebook/create-react-app/issues")
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          issues: json
        });
      });
  }
  render() {
    var { isLoaded, issues } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="IssueList">
          <ul>
            {issues.map(issue => (
              <li key={issue.url}>
                Title: {issue.title} | Url: {issue.url} | Body:
                {issue.body}
              </li>
            ))}
          </ul>
        </div>
      );
    }
    return <div className="IssueList"></div>;
  }
}
export default IssueList;
