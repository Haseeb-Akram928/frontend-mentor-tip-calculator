// Author: Haseeb Akram
import { useState } from "react";
import Input from "./components/Input";
import Display from "./components/Display";
import "./App.css";

function App() {
  const [billAmount, setBillAmount] = useState("");
  const [numOfPeople, setNumOfPeople] = useState("");
  const [customTip, setCustomTip] = useState("");
  const [tipPercentage, setTipPercentage] = useState("");
  const [customSelected, setCustomSelected] = useState(false);

  // converting strings to numbers safely
  const bill = parseFloat(billAmount) || 0;
  const people = parseInt(numOfPeople) || 1;
  const tipPercent = parseFloat(tipPercentage) || 0;

  const totalTip = (bill * tipPercent) / 100;
  const tipPerPerson = totalTip / people;
  const totalWithTip = bill + totalTip;
  const billPerPerson = totalWithTip / people;

  function handleReset() {
    setBillAmount("");
    setNumOfPeople("");
    setCustomTip("");
    setTipPercentage("");
    customSelected(false);
  }

  return (
    <>
      <h1>Tip Calculator</h1>
      <div className="wrapper">
        <div className="container">
          <Input
            billAmount={billAmount}
            setBillAmount={setBillAmount}
            numOfPeople={numOfPeople}
            setNumOfPeople={setNumOfPeople}
            customTip={customTip}
            setCustomTip={setCustomTip}
            customSelected={customSelected}
            setCustomSelected={setCustomSelected}
            tipPercentage={tipPercentage}
            setTipPercentage={setTipPercentage}
          />
          <Display
            tipPerPerson={tipPerPerson}
            billPerPerson={billPerPerson}
            onReset={handleReset}
          />
        </div>
      </div>
    </>
  );
}

export default App;
