import { Fragment } from "react";
import Practice1 from "./Components/Practice1";
import Practice2 from "./Components/Practice2";
import Practice3 from "./Components/Practice3";
import FormControl from "./Components/FormControl";

const App = () => {
  let itemObject = {
    name: "Shohnaur Rahman",
    age: 20,
    salary: 50000,
  };

  let btnClick = () => {
    alert("Great Job");
  };

  const hrStyle = {
    height: "5px",
    borderWidth: "0",
    color: "red",
    backgroundColor: "#ad0202",
  };

  return (
    <Fragment>
      <Practice1></Practice1>
      <hr style={hrStyle} />
      <Practice2 title="Summer Fest" item={itemObject}></Practice2>
      <hr style={hrStyle} />
      <Practice3 bClick={btnClick}></Practice3>
      <hr style={hrStyle} />
      <FormControl></FormControl>
    </Fragment>
  );
};

export default App;
