import React from "react";

function Display({ onClick, children }) {
  return (
    <>
      <button onClick={onClick}>{children}</button>
    </>
  );
}
export default Display;
