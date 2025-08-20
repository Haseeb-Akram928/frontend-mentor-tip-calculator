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
  const people = parseInt(numOfPeople) || 0;
  const tipPercent = parseFloat(tipPercentage) || 0;

  let tipPerPerson = 0;
  let billPerPerson = 0;

  if (bill > 0 && people > 0) {
    const totalTip = (bill * tipPercent) / 100;
    tipPerPerson = totalTip / people;
    const totalWithTip = bill + totalTip;
    billPerPerson = totalWithTip / people;
  }

  function handleReset() {
    setBillAmount("");
    setNumOfPeople("");
    setCustomTip("");
    setTipPercentage("");
    setCustomSelected(false);
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
            bill={bill}
            people={people}
          />
        </div>
      </div>
    </>
  );
}

export default App;
