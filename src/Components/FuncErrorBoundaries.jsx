import React from "react";

function FuncErrorHandler({ error }) {
  return <div>Hi</div>;
}

function ErrorHandler({ error }) {
  return (
    <div>
      <p>An error occurred:</p>
      <pre>{error.message}</pre>
    </div>
  );
}

export function City({ name }) {
  try {
    if (name === "Pehowa") {
      return <div>Hello, visit {name.toUpperCase()}</div>;
    }
  } catch (error) {
    return <ErrorHandler error={error} />;
  }
}

export function Country({ capital }) {
  try {
    if (capital === "India") {
      return <div>Hello, visit {capital.toUpperCase()}</div>;
    }
  } catch (error) {
    return <ErrorHandler error={error} />;
  }
}

export default FuncErrorHandler;