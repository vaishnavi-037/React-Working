import Paragraph from "./Paragraph";
import React from "react";

const DemoOutput = (props) => {
    console.log("DEMO RUNNING");
  return <Paragraph show={props.show} />;
};

export default React.memo(DemoOutput);
