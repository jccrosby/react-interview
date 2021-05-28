import React from "react";

// We want this component to go get the teams from MLB's Stats API
// the request is a GET to `https://statsapi.mlb.com/api/v1/teams?season=2021&sportId=1`
// From there we want to display each team and the members of each team
// To get the members of each team we can call the stats API with the team ID
// GET to `http://statsapi.mlb.com/api/v1/teams/{teamId}/roster?rosterType=active`

const Teams = () => {
  return (
    <>
      <h1>Teams Component</h1>
      <p>
        Fork this template from
        [codesandbox.io](https://codesandbox.io/s/react-interview-j63bl).
      </p>
      <h2>Prompt</h2>
      <p>
        We want this component to go get the teams from MLB's Stats API - GET to{" "}
        <pre>
          https://statsapi.mlb.com/api/v1/teams?season=2021&amp;sportId=1
        </pre>{" "}
        From there we want to display each team and the members of each team. To
        get the members of each team call the stats API with the team ID - GET
        to{" "}
        <pre>
          http://statsapi.mlb.com/api/v1/teams/&lt;teamId&gt;/roster?rosterType=active
        </pre>
      </p>
      <h2>Bonus</h2>
      <p>
        Add some styling to the component to make it more presentable or create
        one or two unit tests for the project.
      </p>
    </>
  );
};

export default Teams;
