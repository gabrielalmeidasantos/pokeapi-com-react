import React from "react";

export default function BoxContainer(props) {
  return (
    <div className="box-container" id={props.idContainer}>
      {props.children}
    </div>
  );
}
