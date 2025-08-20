export default function Display({
  tipPerPerson,
  billPerPerson,
  onReset,
  people,
  bill,
}) {
  console.log(tipPerPerson, billPerPerson);
  return (
    <div className="display-container">
      <div className="amount">
        <div className="tip-amount">
          <div className="tip-amount-text">
            <p className="tip-total">Tip Amount</p>
            <p className="per-person">/ person</p>
          </div>
          <p className="actual-tip-amount">
            ${Number(tipPerPerson).toFixed(2)}
          </p>
        </div>

        <div className="tip-amount">
          <div className="tip-amount-text">
            <p className="tip-total">Total</p>
            <p className="per-person">/ person</p>
          </div>
          <p className="actual-tip-amount">
            ${Number(billPerPerson).toFixed(2)}
          </p>
        </div>
      </div>
      <button
        className={`btn uppercase ${
          bill <= 0 || people <= 0 ? "disabled" : ""
        }`}
        onClick={onReset}
        disabled={bill <= 0 || people <= 0}
      >
        Reset
      </button>
    </div>
  );
}
