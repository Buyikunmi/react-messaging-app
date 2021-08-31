import React from "react";
import { Route } from "react-router-dom";

/**
 * @author
 * @function PrivateRoute
 **/
const PrivateRoute = (props) => {
  return (
    <div>
      <Route path={props.path} component={props.component} />
    </div>
  );
};

export default PrivateRoute;
