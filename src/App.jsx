import "./App.css";
import Display from "./components/Display";
import ButtonContainer from "./components/ButtonContainer";
import { useState } from "react";
function App() {
  let [calVal, setCalVal] = useState("");
  let onButtonClick = (btn) => {
    if (btn.target.innerText === "C") {
      setCalVal("");
    } else if (btn.target.innerText === "=") {
      let result = eval(calVal);
      setCalVal(result);
    } else {
      let newCalVal = calVal + btn.target.innerText;
      console.log(newCalVal);
      setCalVal(newCalVal);
    }
  };
  return (
    <>
      <div className="container">
        <h1>Calculator Using React</h1>
        <Display displayVal={calVal}></Display>
        <ButtonContainer onButtonClick={onButtonClick}></ButtonContainer>
      </div>
    </>
  );
}

export default App;
