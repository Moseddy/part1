import React from "react";
import Part from "./Part";

const Content = (props) => {
  
  return (
    <div>
      {props.parts.map((part, index) => (
        <Part part={part.name} exercise={part.exercises} key={index} />
      ))}
    </div>
  );
};

export default Content;
