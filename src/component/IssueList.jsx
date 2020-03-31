import React, { Component } from "react";

import Issue from "./Issue";

import "bulma/css/bulma.css";

class IssueList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      issues: []
    };
  }
  componentDidMount() {
    fetch("https://api.github.com/repos/facebook/create-react-app/issues")
      .then(res => res.json())
      .then(json => {
        this.setState({
          issues: json
        });
      });
  }
  render() {
    const { issues } = this.state;

    return (
      <ul>
        {issues.map(issue => (
          <Issue key={issue.id} issue={issue} />
        ))}
      </ul>
    );
  }
}

export default IssueList;
