import React from "react";

const CodeElement = () => {
  return (
    <pre {...props.attributes}>
      <code>{props.children}</code>
    </pre>
  );
};

export default CodeElement;
