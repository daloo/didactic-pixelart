import React from "react";

export default props => (
  <div>
    This is the Game component
    <div>name : {props.match.params.id}</div>
  </div>
);
