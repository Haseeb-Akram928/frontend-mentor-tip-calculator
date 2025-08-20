import dollarIcon from "../images/icon-dollar.svg";
import personIcon from "../images/icon-person.svg";
export default function Input({
  billAmount,
  setBillAmount,
  numOfPeople,
  setNumOfPeople,
  setCustomTip,
  customSelected,
  setCustomSelected,
  tipPercentage,
  setTipPercentage,
}) {
  return (
    <div className="form">
      <div className="input-container">
        <label htmlFor="bill" className="color-grey-500">
          Bill
        </label>
        <div className="bill-wrapper">
          <img src={dollarIcon} alt="dollar icon" className="icon" />
          <input
            type="number"
            id="bill"
            className="input-field"
            placeholder="0"
            value={billAmount}
            onChange={(e) => setBillAmount(e.target.value)}
          />
        </div>
      </div>

      <div className="select-tips color-grey-500">
        <p>Select Tip %</p>
        <div className="tips">
          {[5, 10, 15, 25, 50].map((percent) => (
            <button
              className={`tip-percentage ${
                percent === tipPercentage ? "selected" : ""
              }`}
              key={percent}
              onClick={() => {
                setTipPercentage(percent);
                setCustomSelected(false);
              }}
            >
              {percent}%
            </button>
          ))}
          <div>
            {customSelected ? (
              <input
                type="number"
                className="tip-percentage-input"
                onChange={(e) => {
                  setCustomTip(e.target.value);
                  setTipPercentage(e.target.value);
                }}
              />
            ) : (
              <button
                style={{
                  display: "inline-block",
                }}
                className="tip-percentage special"
                onClick={() => {
                  setCustomSelected(true);
                  setTipPercentage("");
                }}
              >
                Custom
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="input-container">
        <div className="bill-text">
          <label htmlFor="numberofpeople" className="color-grey-500">
            Number of People
          </label>
          {parseFloat(numOfPeople) === 0 && (
            <p className="error-text">Can't by zero</p>
          )}
        </div>
        <div
          className={`bill-wrapper ${
            parseFloat(numOfPeople) === 0 ? "error" : ""
          }`}
        >
          <img src={personIcon} alt="person icon" className="icon" />
          <input
            type="number"
            id="numberofpeople"
            className="input-field"
            placeholder="0"
            value={numOfPeople}
            onChange={(e) => setNumOfPeople(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
