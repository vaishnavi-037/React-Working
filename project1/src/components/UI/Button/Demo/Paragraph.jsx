const Paragraph = (props) => {
    console.log("PARAGRAPH RUNNING");
    return <p>{props.show ? "This is new!!!" : ""}</p>;
  };
  
  export default Paragraph;
  