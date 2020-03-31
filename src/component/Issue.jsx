import React from "react";
import IssueList from "./IssueList";

const Issue = props => {
  return (
    <div>
      <h3>Issue:</h3>
      {props.issue.title}
      <p>
        <a href={props.issue.html_url}>Issue Link</a>
      </p>
    </div>
  );
};

export default Issue;
