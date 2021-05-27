import React from "react";

// We want this component to go get the teams from MLB's Stats API
// the request is a GET to `https://statsapi.mlb.com/api/v1/teams?season=2021&sportId=1`
// From there we want to display each team and the members of each team
// To get the members of each team we can call the stats API with the team ID
// GET to `http://statsapi.mlb.com/api/v1/teams/{teamId}/roster?rosterType=active`

const Teams = () => {
  return <h1>Team Component</h1>;
};

export default Teams;
