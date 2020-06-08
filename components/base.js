import React from "react";

const Base = (props) => {
  const {status, data, children} = props;
  let kids;
  switch(status) {
    case "loading":
      kids = "Loading...";
      break;
    case "error":
      kids = "Error...";
      break;
    default: {
      kids = (
        <ul>
          <li>First: {data.first}</li>
          <li>Last: {data.last}</li>
          <li>Age: {data.age}</li>
        </ul>
      );
    }
  }
 return (
   <div>
     {children}
     {kids}
   </div>
 )
};

export default Base;