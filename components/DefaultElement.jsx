import React from "react";

const DefaultElement = () => {
  return <p {...props.attributes}>{props.children}</p>;
};

export default DefaultElement;
