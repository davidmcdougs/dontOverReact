import React from "react";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const SubmitBtn = props => (
  <button className="submitBtn btn btn-dfault" type="submit"{...props}>
    <i className="fa fa-search"></i>
    submit
  </button>
);

export default SubmitBtn;
